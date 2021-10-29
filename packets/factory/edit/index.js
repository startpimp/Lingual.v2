const MYSQL = require("../../mysql/index.js")
const LANG = require("../../lang/index.js")
const FACTORY = require('../index.js')
const FS = require('fs/promises')

async function run(req, res) {
	const Q_TYPE = req.query.t
	const Q_COMPONENT = req.query.c
	const Q_LANGUAGE = req.query.l
	const COMPONENT = await MYSQL.getComponent(Q_COMPONENT, Q_LANGUAGE, Q_TYPE)
	const C_TYPES = COMPONENT.types
	const C_DEFINITIONS = COMPONENT.definitions
	const C_PRONUNCIATIONS = COMPONENT.pronunciations
	const C_TRANSLATIONS = COMPONENT.translations
	const C_READING = COMPONENT.reading
	const C_COMPONENT = COMPONENT.component
	const C_LANGUAGE = COMPONENT.language
	const LANGUAGE = LANG.getLanguage(res.req)

	var main_page = await FS.readFile(__dirname + "../../../../html_files/aec.html")
	main_page = main_page.toString()

	let LANGUAGES = await MYSQL.getAllLanguages()
	main_page = await FACTORY.AECTyped(main_page, Q_TYPE)

	
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
		languages_html += await LANGUAGE_OPTION(LANGUAGES[index].code, LANGUAGES[index].code == C_LANGUAGE.code ? "selected" : "")
	}
	main_page = main_page.replace("<?set:codes?>", JSON.stringify(JSON_BASED))
	main_page = main_page.replace("<?set:languages?>", languages_html)

	// Known types
	if(Q_TYPE == "word") {
		var types_html = ""
		for(var index = 1; index < C_TYPES.length; index++) {
			types_html += await FACTORY.get("aec.type", "html", {
				type: C_TYPES[index]
			});
		}
		main_page = main_page.replace("<?set:types?>", types_html)
	}

	// Known pronunciations
	if(Q_TYPE == "word" || Q_TYPE == "api" || Q_TYPE == "char") {
		var added_pronunciations_html = ""
		for(var index = 0; index < C_PRONUNCIATIONS.length; index++) {
			added_pronunciations_html += await FACTORY.get("aec.added-pronunciations", "html", {
				index,
				language: C_PRONUNCIATIONS[index][0],
				api: C_PRONUNCIATIONS[index][1]
			});
		}
		main_page = main_page.replace("<?set:added-pronunciations?>", added_pronunciations_html)
	}

	// Known translations
	if(C_TRANSLATIONS[LANGUAGE] && Q_TYPE == "word") {
		var added_translations_html = ""
		for(var index = 0; index < C_TRANSLATIONS[LANGUAGE].length; index++) {
			added_translations_html += await FACTORY.get("aec.added-translations", "html", {
				index,
				context: C_TRANSLATIONS[LANGUAGE][index][0] ? `<p class="icbtt-context_icbttc">${C_TRANSLATIONS[LANGUAGE][index][0]}</p>` : "",
				translation: C_TRANSLATIONS[LANGUAGE][index][1],
				example: C_TRANSLATIONS[LANGUAGE][index][2] ? `<p class="icbtt-example_icbtte">${C_TRANSLATIONS[LANGUAGE][index][2]}</p>` : ""
			});
		}
		main_page = main_page.replace("<?set:added-translations?>", added_translations_html)
	}

	// Known definitions
	if(C_DEFINITIONS[LANGUAGE] && (Q_TYPE == "word" || Q_TYPE == "punctuation" || Q_TYPE == "char")) {
		var added_definitions_html = ""
		for(var index = 0; index < C_DEFINITIONS[LANGUAGE].length; index++) {
			added_definitions_html += await FACTORY.get("aec.added-definitions", "html", {
				index,
				context: C_DEFINITIONS[LANGUAGE][index][0] ? `<p class="icbtt-context_icbttc">${C_DEFINITIONS[LANGUAGE][index][0]}</p>` : "",
				definition: C_DEFINITIONS[LANGUAGE][index][1],
				example: C_DEFINITIONS[LANGUAGE][index][2] ? `<p class="icbtt-example_icbtte">${C_DEFINITIONS[LANGUAGE][index][2]}</p>` : ""
			});
		}
		main_page = main_page.replace("<?set:added-definitions?>", added_definitions_html)
	}

	let MORE_HIDDENS = await FACTORY.get("aec.more-hiddens", "html", {
		language: C_LANGUAGE.code
	});
	main_page = main_page.replace("<?set:more-hiddens?>", MORE_HIDDENS)

	main_page = FACTORY.AECVars(main_page, {
		hidden_types: JSON.stringify(C_TYPES),
		hidden_definitions: JSON.stringify(C_DEFINITIONS),
		hidden_translations: JSON.stringify(C_TRANSLATIONS),
		hidden_pronunciations: JSON.stringify(C_PRONUNCIATIONS),
		reading: C_READING == "null" ? "" : C_READING,
		component: C_COMPONENT,
		url: "./editit",
		url2: `./component/${C_COMPONENT}?l=${C_LANGUAGE.code}&t=${C_TYPES[0]}`,
		page: "edit",
		type: Q_TYPE
	});

	main_page = main_page.replace(/\$\(user-language\)/gm, LANGUAGE)
	res.end(LANG.translateFile(main_page, LANGUAGE))
}

module.exports = run