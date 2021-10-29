function getLanguage(req) {
	const LANG = req.headers["accept-language"].split(",")[0]
	return LANG;
}

const ENGLISH_VARS = require("../../html_files/res/translations/en-US.json")

function getVar(lang, key) {
	var languageVars = null
	try {
		languageVars = require("../../html_files/res/translations/" + lang + ".json")
	} catch(err) {
		console.info("WARNING (l3):", lang, 'en-US')
		languageVars = require("../../html_files/res/translations/en-US.json")
	}
	if(languageVars.hasOwnProperty(key)) return languageVars[key];
	else if(ENGLISH_VARS.hasOwnProperty(key)) {
		console.info("WARNING (l2):", lang, "en-US", key)
		return ENGLISH_VARS[key];
	} 
	else {
		console.info("WARNING (l1):", lang, key)
		return "null";
	}
}

function translateFile(content, lang) {
	const VARS = [...content.matchAll(/\$\[(?<var>[a-zA-Z.-]+)\]/gm)]
	var result = content
	var minus = 0
	for(var i = 0; i < VARS.length; i++) {
		const TRANSLATED_TEXT = getVar(lang, VARS[i][1])
		result = result.replaceBetween(VARS[i].index - minus, VARS[i].index + VARS[i][0].length - minus, TRANSLATED_TEXT)
		minus += VARS[i][0].length - TRANSLATED_TEXT.length
	}
	delete require.cache["C:\\Users\\StartKingz\\Desktop\\SHIT\\Lingual\\html_files\\res\\translations\\" + lang + ".json"];
	return result;
}

module.exports.translateFile = translateFile
module.exports.getVar = getVar
module.exports.getLanguage = getLanguage