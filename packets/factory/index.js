const FS = require("fs/promises")

async function get(filename, type, replacers) {
	var data = await FS.readFile(__dirname + `/${type}/${filename}.${type}`)
	data = data.toString()
	if(replacers) for(let key in replacers) {
		data = data.replace(new RegExp(`\\$\\(${key}\\)`, 'gm'), replacers[key])
	};

	return data;
}

async function AECTyped(content, type) {

	// Inputs
	let READING = await get("aec.reading", "html")
	let TYPES_INPUT = await get("aec.types-input", "html")

	if(type == "word" || type == "char") content = content.replace("<?set:reading?>", READING);
	if(type == "word") content = content.replace("<?set:types-input?>", TYPES_INPUT);

	// Hiddens
	let HIDDEN_DEFINITIONS = await get("aec.hidden-definitions", "html")
	let HIDDEN_TRANSLATIONS = await get("aec.hidden-translations", "html")
	let HIDDEN_PRONUNCIATIONS = await get("aec.hidden-pronunciations", "html")
	let HIDDEN_SYNONYMS = await get("aec.hidden-synonyms", "html")
	let HIDDEN_ANTONYMS = await get("aec.hidden-antonyms", "html")
	
	if(type == "word" || type == "punctuation" || type == "char") content = content.replace("<?set:hidden-definitions?>", HIDDEN_DEFINITIONS);
	if(type == "word") content = content.replace("<?set:hidden-translations?>", HIDDEN_TRANSLATIONS);
	if(type == "word") content = content.replace("<?set:hidden-synonyms?>", HIDDEN_SYNONYMS);
	if(type == "word") content = content.replace("<?set:hidden-antonyms?>", HIDDEN_ANTONYMS);
	if(type == "word" || type == "char") content = content.replace("<?set:hidden-pronunciations?>", HIDDEN_PRONUNCIATIONS);

	// Multiboxes
	let PRONUNCIATIONS_BASED = await get("aec.pronunciations-based", "html")
	let TRANSLATIONS_BASED = await get("aec.translations-based", "html")
	let DEFINITIONS_BASED = await get("aec.definitions-based", "html")
	let SYNONYMS_BASED = await get("aec.synonyms-based", "html")
	let ANTONYMS_BASED = await get("aec.antonyms-based", "html")

	if(type == "word" || type == "char") content = content.replace("<?set:pronunciations-based?>", PRONUNCIATIONS_BASED);
	if(type == "word") content = content.replace("<?set:translations-based?>", TRANSLATIONS_BASED);
	if(type == "word") content = content.replace("<?set:synonyms-based?>", SYNONYMS_BASED);
	if(type == "word") content = content.replace("<?set:antonyms-based?>", ANTONYMS_BASED);
	if(type == "word" || type == "punctuation" || type == "char") content = content.replace("<?set:definitions-based?>", DEFINITIONS_BASED);

	// JavaScript codes
	let TYPES_JS = (type == "word") ? await get("aec.types", "js") : ""
	let SYNONYMS_JS = (type == "word") ? await get("aec.synonyms", "js") : ""
	let ANTONYMS_JS = (type == "word") ? await get("aec.antonyms", "js") : ""
	let TRANSLATIONS_JS = (type == "word") ? await get("aec.translations", "js") : ""
	let DEFINITIONS_JS = (type == "word" || type == "punctuation" || type == "char") ? await get("aec.definitions", "js") : ""
	let PRONUNCIATIONS_JS = (type == "word" || type == "char") ? await get("aec.pronunciations", "js") : ""

	content = content.replace("<?set:js-types?>", TYPES_JS);
	content = content.replace("<?set:js-synonyms?>", SYNONYMS_JS);
	content = content.replace("<?set:js-antonyms?>", ANTONYMS_JS);
	content = content.replace("<?set:js-translations?>", TRANSLATIONS_JS);
	content = content.replace("<?set:js-definitions?>", DEFINITIONS_JS);
	content = content.replace("<?set:js-pronunciations?>", PRONUNCIATIONS_JS);
	content = content.replace(/\$\(typed-id\)/gm, type == "api" ? 'id="ty-api_tya"' : "")

	return content
}

function AECVars(content, vars) {
	for(let key in vars) {
		content = content.replace(new RegExp(`\\$\\(${key}\\)`, 'gm'), vars[key])
	}

	return content
}

module.exports.AECTyped = AECTyped
module.exports.AECVars = AECVars
module.exports.get = get