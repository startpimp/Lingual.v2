const FS = require("fs/promises")
const TTMP3 = require("text-to-mp3")

async function create(type, component, language) {
	const PATH = `./html_files/res/audio/${language}/${type}/${component}.mp3`
	await FS.writeFile(PATH, "")
	await TTMP3.saveMP3(component, language, PATH)
	console.log(`[audio] ${language} => ${component}`)
}


module.exports.create = create