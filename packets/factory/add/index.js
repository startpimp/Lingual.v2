const MYSQL = require("../../mysql/index.js")
const LANG = require("../../lang/index.js")
const FACTORY = require('../index.js')
const FS = require('fs/promises')

async function run(req, res) {
	const TYPE = req.query.t
	const LANGUAGE = LANG.getLanguage(res.req)
	
	var main_page = await FS.readFile(__dirname + "../../../../html_files/aec.html")
	main_page = main_page.toString()

	let LANGUAGES = await MYSQL.getAllLanguages()
	main_page = await FACTORY.AECTyped(main_page, TYPE)

	
	let LANGUAGE_OPTION = async (code, selected) => {
		return await FACTORY.get("aec.option", "html", {
			code,
			selected
		});
	};

	var languages_html = ""
	const JSON_BASED = {}
	for(var index = 0; index < LANGUAGES.length; index++) {
		if(LANGUAGES[index].code == "all") continue;
		JSON_BASED[LANGUAGES[index].code] = `$[lang.${LANGUAGES[index].code}]`
		languages_html += await LANGUAGE_OPTION(LANGUAGES[index].code, LANGUAGES[index].code == LANGUAGE ? "selected" : "")
	}
	main_page = main_page.replace("<?set:codes?>", JSON.stringify(JSON_BASED))
	main_page = main_page.replace("<?set:languages?>", languages_html)

	main_page = FACTORY.AECVars(main_page, {
		hidden_types: `["${TYPE}"]`,
		hidden_definitions: "{}",
		hidden_translations: "{}",
		hidden_pronunciations: "[]",
		hidden_synonyms: "[]",
		reading: "",
		component: "",
		url: "./addit",
		url2: "./",
		page: "add",
		language: LANGUAGE,
		type: TYPE
	});

	main_page = main_page.replace(/\$\(user-language\)/gm, LANGUAGE)
	res.end(LANG.translateFile(main_page, LANGUAGE))
}

module.exports = run