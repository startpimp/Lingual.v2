const FS = require('fs/promises')
const AXIOS = require("axios")
const HTTPS_ADAPTER = require("axios/lib/adapters/http");

async function run(req, res) {
	const LANGUAGE = req.query.l
	const COMPONENT = req.query.c
	const LINK = encodeURI(`http://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${LANGUAGE}&q=${COMPONENT}&textLen=${COMPONENT.length}`)

	AXIOS.get(LINK, {
		responseType: "stream",
		adapter: HTTPS_ADAPTER,
		"Content-Range": "bytes 16561-8065611"
	}).then(Response => {
		const STREAM = Response.data
		res.set("Content-Type", "audio/mp3")
		res.set("Accept-Ranges", "bytes")
		res.set("Content-Length", Response.headers["Content-Length"])

		STREAM.on("data", chunk => {
			res.write(chunk)
		});

		STREAM.on("error", err => {
			res.sendStatus(404)
		});

		STREAM.on("end", () => {
			res.end();
		});
	}).catch(err => console.error(err))
}

module.exports = run