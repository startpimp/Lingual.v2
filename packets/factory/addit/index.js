const MYSQL = require("../../mysql/index.js")

async function run(req, res) {
	const COMPONENT = req.query.component
	const READING = req.query.reading != '' ? req.query.reading : null
	const ORIGIN = req.query.origin
	const HIDDEN_TYPES = req.query.types_hidden
	const HIDDEN_PRONUNCIATIONS = req.query.pronunciations_hidden ? req.query.pronunciations_hidden : '[]'
	const HIDDEN_TRANSLATIONS = req.query.translations_hidden ? req.query.translations_hidden : '{}'
	const HIDDEN_DEFINITIONS = req.query.definitions_hidden ? req.query.definitions_hidden : '{}'
	const COMPONENT_CLASS = JSON.parse(HIDDEN_TYPES)[0]

	try {
		await MYSQL.addComponent(COMPONENT, READING, ORIGIN, HIDDEN_TYPES, HIDDEN_PRONUNCIATIONS, HIDDEN_TRANSLATIONS, HIDDEN_DEFINITIONS)
	} catch(err) {}
	res.redirect(`/component/${COMPONENT.replace(/\./g, "µ2e")}?l=${ORIGIN}&t=${COMPONENT_CLASS}`);
}

module.exports = run