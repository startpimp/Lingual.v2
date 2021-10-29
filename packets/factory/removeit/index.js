const MYSQL = require("../../mysql/index.js")

async function run(req, res) {
	const Q_COMPONENT = req.query.c
	const Q_LANGUAGE = req.query.l
	const Q_TYPE = req.query.t

	await MYSQL.sql(`DELETE FROM components WHERE id='${Q_COMPONENT}.${Q_LANGUAGE}.${Q_TYPE}'`)

	res.redirect(`/`);
}

module.exports = run