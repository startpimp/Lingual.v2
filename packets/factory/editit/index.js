const MYSQL = require("../../mysql/index.js")

async function run(req, res) {
	const Q_TYPE = req.query.origin_type
	const Q_COMPONENT = req.query.origin_component
	const Q_LANGUAGE = req.query.origin_language
	const COMPONENT = req.query.component
	const READING = req.query.reading != '' ? req.query.reading : null
	const ORIGIN = req.query.origin
	const HIDDEN_TYPES = req.query.types_hidden
	const HIDDEN_PRONUNCIATIONS = req.query.pronunciations_hidden ? req.query.pronunciations_hidden : '[]'
	const HIDDEN_SYNONYMS = req.query.synonyms_hidden ? req.query.synonyms_hidden : '[]'
	const HIDDEN_ANTONYMS = req.query.antonyms_hidden ? req.query.antonyms_hidden : '[]'
	const HIDDEN_TRANSLATIONS = req.query.translations_hidden ? req.query.translations_hidden : '{}'
	const HIDDEN_DEFINITIONS = req.query.definitions_hidden ? req.query.definitions_hidden : '{}'
	const COMPONENT_CLASS = JSON.parse(HIDDEN_TYPES)[0]

	await MYSQL.editComponent(Q_COMPONENT, Q_LANGUAGE, Q_TYPE, COMPONENT, READING, ORIGIN, HIDDEN_TYPES, HIDDEN_PRONUNCIATIONS, HIDDEN_TRANSLATIONS, HIDDEN_DEFINITIONS, HIDDEN_SYNONYMS, HIDDEN_ANTONYMS)
	res.redirect(`/component/${COMPONENT.replace(/\./g, "µ2e")}?l=${ORIGIN}&t=${COMPONENT_CLASS}`);
}

module.exports = run