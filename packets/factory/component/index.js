const MYSQL = require("../../mysql/index.js")
const LANG = require("../../lang/index.js")
const FS = require('fs/promises')
const FACTORY = require('../index.js')

async function run(req, res) {
	const LANGUAGE = LANG.getLanguage(res.req)

	const Q_COMPONENT = req.params[0].replace("µ2e", ".")
	const Q_LANGUAGE = req.query.l
	const Q_TYPE = req.query.t

	let COMPONENT = await MYSQL.getComponent(Q_COMPONENT, Q_LANGUAGE, Q_TYPE)

	if(!COMPONENT) return "NOT_FOUND";

	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	
	var main_page = await FS.readFile(__dirname + "../../../../html_files/component.html")
	main_page = main_page.toString()

	main_page = main_page.replace(/\$\(component\)/gm, COMPONENT.component)
	main_page = main_page.replace(/\$\(type\)/gm, COMPONENT.types[0])
	main_page = main_page.replace(/\$\(typed-class\)/gm, COMPONENT.types[0] == "api" ? 'class="ty-api_tya"' : "")

	let TYPES = async (type, and, comma) => {
		return await FACTORY.get("component.types", "html", {
			type,
			and,
			comma
		});
	}

	// Types
	var types_html = ""
	// if(COMPONENT.types.length - 1 == 1)
	for (var index = 1; index < COMPONENT.types.length; index++) {
		const TYPE = COMPONENT.types[index].replace(/\s/g, "-")
		if(COMPONENT.types.length - 2 == index)      types_html += await TYPES(TYPE, 'id="wct-andType_wctat"', "");
		else if(COMPONENT.types.length - 1 == index) types_html += await TYPES(TYPE, "", "");
		else                                         types_html += await TYPES(TYPE, "", "wct-commaType_wctct");
	}
	main_page = main_page.replace("<?set:types?>", types_html)

	// Reading
	if(COMPONENT.reading && COMPONENT.reading != "null") {
		main_page = main_page.replace("<?set:reading?>", await FACTORY.get("component.reading", "html", {
			reading: COMPONENT.reading
		}));
	}

	// Reference (A.P.I. only)
	if(Q_TYPE == "api") {
		var api_language_html = await FACTORY.get("component.api-language", "html", {
			language: Q_LANGUAGE
		});
		main_page = main_page.replace("<?set:api-language?>", api_language_html)
	}

	// Pronunciations
	var ins_pronunciation_html = ""
	for(var index = 0; index < COMPONENT.pronunciations.length; index++) {
		ins_pronunciation_html += await FACTORY.get("component.in-pronunciation", "html", {
			language: COMPONENT.pronunciations[index][0],
			api: COMPONENT.pronunciations[index][1]
		});
	}
	let PRONUNCIATIONS_CONTAINER_HTML = await FACTORY.get("component.pronunciations-container", "html", {
		pronunciations: ins_pronunciation_html
	});
	main_page = main_page.replace("<?set:pronunciations?>", PRONUNCIATIONS_CONTAINER_HTML)

	// Translations
	const TRANSLATIONS_BASED = COMPONENT.translations[LANGUAGE]
	if(TRANSLATIONS_BASED) {
		var ins_translations_html = ""
		for(var index = 0; index < TRANSLATIONS_BASED.length; index++) {
			ins_translations_html += await FACTORY.get("component.in-translation", "html", {
				context: TRANSLATIONS_BASED[index][0] ? `<p class="octt-type_octtt">${TRANSLATIONS_BASED[index][0]}</p>` : "",
				translation: TRANSLATIONS_BASED[index][1],
				example: TRANSLATIONS_BASED[index][2] ? `<p class="octt-example_octte">${TRANSLATIONS_BASED[index][2]}</p>` : ""
			});
		}
		let TRANSLATIONS_CONTAINER_HTML = await FACTORY.get("component.translations-container", "html", {
			translations: ins_translations_html
		});
		main_page = main_page.replace("<?set:translations?>", TRANSLATIONS_CONTAINER_HTML)
	}

	// Definitions
	const DFINITIONS_BASED = COMPONENT.definitions[LANGUAGE]
	if(DFINITIONS_BASED) {
		var ins_definitions_html = ""
		for(var index = 0; index < DFINITIONS_BASED.length; index++) {
			ins_definitions_html += await FACTORY.get("component.in-definition", "html", {
				context: DFINITIONS_BASED[index][0] ? `<p class="ocdd-type_ocddt">${DFINITIONS_BASED[index][0]}</p>` : "",
				definition: DFINITIONS_BASED[index][1],
				example: DFINITIONS_BASED[index][2] ? `<p class="ocdd-example_ocdde">${DFINITIONS_BASED[index][2]}</p>` : ""
			});
		}
		let DEFINITIONS_CONTAINER_HTML = await FACTORY.get("component.definitions-container", "html", {
			definitions: ins_definitions_html
		});
		main_page = main_page.replace("<?set:definitions?>", DEFINITIONS_CONTAINER_HTML)
	}

	main_page = main_page.replace(/\$\(language\)/gm, COMPONENT.language.code)
	main_page = main_page.replace(/\$\(user-language\)/gm, LANGUAGE)
	res.end(LANG.translateFile(main_page, LANGUAGE))
}

module.exports = run