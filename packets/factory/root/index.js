const FACTORY = require('../index.js')
const FS = require('fs/promises')
const MYSQL = require("../../mysql/index.js")
const LANG = require("../../lang/index.js")
const { COMPONENT_TYPES } = require("../../../interface.js")

async function run(req, res) {
	const LANGUAGE = LANG.getLanguage(res.req)
	let TO_SHOW = req.query.l ? req.query.l : "all"

	if(req.query.s == "t") TO_SHOW = req.query.origin

	let COMPONENTS_HTML = async (component, language, type) => {
		return await FACTORY.get("root.components", "html", {
			component,
			language,
			type,
			api: type == "api" ? "ty-api_tya" : "",
			component_uri: component.replace(/\./g, "µ2e")
		});
	};

	let LANGUAGE_OPTION = async (code, selected) => {
		return await FACTORY.get("aec.option", "html", {
			code,
			selected
		});
	};

	let COMPONENTS = []

	var page = 0
	if(req.query.p) page = parseInt(req.query.p);
	let MAX = 0
	let OFFSET = 0

	if(req.query.s == "t") {
		const CLASSES = []
		if(req.query.word) CLASSES.push("word");
		if(req.query.char) CLASSES.push("char");
		if(req.query.punctuation) CLASSES.push("punctuation");
		if(req.query.api) CLASSES.push("api");
		var conditions = ""
		if(CLASSES.length >= 1) {
			conditions = `id LIKE '%${req.query.contains}%.${req.query.origin == "all" ? "%" : req.query.origin}.${CLASSES[0]}'`
			CLASSES.forEach(_class => {
				conditions += ` OR id LIKE '%${req.query.contains}%.${req.query.origin == "all" ? "%" : req.query.origin}.${_class}'`
			});
		} else conditions = `id LIKE '%${req.query.contains}%.${req.query.origin}.%'`

		const COUNT = await MYSQL.sql(`SELECT COUNT(*) FROM components WHERE ${conditions}`)
		MAX = (COUNT[0]["COUNT(*)"] - (COUNT[0]["COUNT(*)"] % 51)) / 50
		const OFFSET = page * 50
		COMPONENTS = await MYSQL.getAllComponentsBySQL(`SELECT * FROM components WHERE ${conditions} ORDER BY id LIMIT ${OFFSET}, 50`);
	} else {
		const COUNT = await MYSQL.sql(`SELECT COUNT(*) FROM components WHERE id LIKE '%.${TO_SHOW == "all" ? "%" : TO_SHOW}.%'`)
		MAX = (COUNT[0]["COUNT(*)"] - (COUNT[0]["COUNT(*)"] % 51)) / 50
		const OFFSET = page * 50
		COMPONENTS = await MYSQL.getAllComponents(TO_SHOW, OFFSET)
	}
	
	// Page content
	var main_page = await FS.readFile(__dirname + "../../../../html_files/index.html")
	main_page = main_page.toString()

	// Pages
	const URL = req._parsedUrl.search ? req._parsedUrl.search.replace(/\&?\??p\=[0-9]+/g, "") : ""
	main_page = main_page.replace(/\$\(queries\)/g, URL)
	const BEFORE_Q = URL != "" ? "&" : "?"
	main_page = main_page.replace(/\$\(min-query\)/g, `${BEFORE_Q}p=0`)
	main_page = main_page.replace(/\$\(max-number\)/g, (MAX + 1).toString()[0])
	main_page = main_page.replace(/\$\(max-query\)/g, `${BEFORE_Q}p=${MAX.toString()[0]}`)
	main_page = main_page.replace(/\$\(de-query\)/g, page - 1 < 0 ? `${BEFORE_Q}p=${page}` : `${BEFORE_Q}p=${page - 1}`)
	main_page = main_page.replace(/\$\(in-query\)/g, page + 1 > MAX ? `${BEFORE_Q}p=${page}` : `${BEFORE_Q}p=${page + 1}`)
	main_page = main_page.replace(/\$\(act-number\)/g, page + 1)

	var components_html = ""
	for(var i = 0; i < COMPONENTS.length; i++) {
		components_html += await COMPONENTS_HTML(COMPONENTS[i].component, COMPONENTS[i].language.code, COMPONENTS[i].types[0])
	}
	main_page = main_page.replace("<?set:components?>", components_html)


	let LANGUAGES = await MYSQL.getAllLanguages()
	let FIRST_CONTAINER = await FACTORY.get("root.container", "html", {
		onclick: "",
		language: TO_SHOW,
		clickable: "",
		first: "bcs-first_bcsf"
	});
	var components_container_html = FIRST_CONTAINER

	var languages_html = ""
	for(var index = 0; index < LANGUAGES.length; index++) {
		languages_html += await LANGUAGE_OPTION(LANGUAGES[index].code, LANGUAGES[index].code == (TO_SHOW == "all" ? LANGUAGE : TO_SHOW) ? "selected" : "")
		if(LANGUAGES[index].code == TO_SHOW) continue;

		let CONTAINER = await FACTORY.get("root.container", "html", {
			onclick: 'onclick="gotoLanguage(\'$(language)\')"',
			language: LANGUAGES[index].code,
			clickable: "bcs-clickable_bcsc",
			first: ""
		});
		components_container_html += CONTAINER
	}
	main_page = main_page.replace("<?set:containers?>", components_container_html)
	main_page = main_page.replace("<?set:languages?>", languages_html)

	var components_types_container_html = ""
	var components_classes = ""
	for(var index = 0; index < COMPONENT_TYPES.length; index++) {
		let CONTAINER = await FACTORY.get("root.container-nd", "html", {
			type: COMPONENT_TYPES[index],
			first: index == 0 ? "bcs-first_bcsf" : ""
		});
		let CLASS = await FACTORY.get("root.component-classes", "html", {
			class: COMPONENT_TYPES[index]
		});
		components_types_container_html += CONTAINER
		components_classes += CLASS
	}
	main_page = main_page.replace("<?set:component-classes?>", components_classes)
	main_page = main_page.replace("<?set:containers-nd?>", components_types_container_html)

	main_page = main_page.replace(/\$\(user-language\)/gm, LANGUAGE)
	res.end(LANG.translateFile(main_page, LANGUAGE))
}

module.exports = run