const MYSQL = require("../../mysql/index.js")
const LANG = require("../../lang/index.js")
const FS = require('fs/promises')
const FACTORY = require('../index.js')

async function run(req, res) {
	const LANGUAGE = LANG.getLanguage(res.req)
	const Q_COMPONENT = req.query.c
	const Q_LANGUAGE = req.query.l
	const Q_TYPE = req.query.t

	var main_page = await FS.readFile(__dirname + "../../../../html_files/ufc.html")
	main_page = main_page.toString()

	main_page = main_page.replace(/\$\(component\)/gm, Q_COMPONENT)
	main_page = main_page.replace(/\$\(language\)/gm, Q_LANGUAGE)
	main_page = main_page.replace(/\$\(type\)/gm, Q_TYPE)
	main_page = main_page.replace(/\$\(user-language\)/gm, LANGUAGE)
	res.end(LANG.translateFile(main_page, LANGUAGE))
}

module.exports = run