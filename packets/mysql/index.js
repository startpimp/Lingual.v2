const MYSQL = require("promise-mysql")
const FS = require("fs/promises")

const POOL = MYSQL.createPool({
	host: "localhost",
	user: "lingual_website",
	password: "linSite2021",
	database: "lingual"
});

async function tryCreate(useACD) {
	const CON = await MYSQL.createConnection({
		host: "localhost",
		user: "lingual_website",
		password: "linSite2021",
		multipleStatements: true
	});

	const PATH = useACD ? "./packets/mysql/exported.sql" : "./packets/mysql/lingual.sql"

	let DATA = await FS.readFile(PATH);
	await CON.query(DATA.toString());
	console.log("Databases created!")
}

/* simplification */
async function sql(request) {
	return await new Promise(async (resolve, reject) => {
		let PL = await POOL
		let CON = await PL.getConnection()
		
		try {
			const QUERY = await CON.query(request)
			CON.release()
			resolve(QUERY)
		} catch(err) {
			CON.release()
			reject(err)
		}
	});
}

let CONDITION_KEY = (component, language, type) => {
	return `id='${component}.${language}.${type}'`
}

class Language {
	constructor(code, chars, api, types) {
		this.code 	= code
		this.chars 	= chars
		this.api 	= api
		this.types  = types
	}
}

class Component {
	constructor(component, reading, language, types, pronunciations, translations, definitions, synonyms, antonyms) {
		this.component 		= component
		this.reading 		= reading
		this.language 		= language
		this.types 			= types
		this.pronunciations = pronunciations
		this.translations 	= translations
		this.definitions 	= definitions
		this.synonyms	 	= synonyms
		this.antonyms	 	= antonyms
	}
}

async function addComponent(component, reading, language, types, pronunciations, translations, definitions, synonyms, antonyms) {
	reading = reading ? reading : "null"
	return await new Promise(async (resolve, reject) => {
		const TYPE = JSON.parse(types)[0]
		try {
			await sql(`INSERT INTO components(id, component, reading, language, types, pronunciations, translations, definitions, synonyms, antonyms) VALUES(
				'${component.replace(/'/g, String.raw`\'`)}.${language}.${TYPE}',
				'${component.replace(/'/g, String.raw`\'`)}',
				'${reading.replace(/'/g, String.raw`\'`)}',
				'${language}', '${types.replace(/'/g, String.raw`\'`)}',
				'${pronunciations.replace(/'/g, String.raw`\'`)}',
				'${translations.replace(/'/g, String.raw`\'`)}',
				'${definitions.replace(/'/g, String.raw`\'`)}',
				'${synonyms.replace(/'/g, String.raw`\'`)}',
				'${antonyms.replace(/'/g, String.raw`\'`)}')`)
		} catch(err) {
			resolve("EXISTS");
			return;
		}
		const LANGUAGE = await getLanguage(language)
		const CODE = LANGUAGE.code
		const CHARS = LANGUAGE.chars
		const API = LANGUAGE.api
		if(TYPE == "char") {
			CHARS.push(component)
			await sql(`UPDATE languages SET chars='${JSON.stringify(CHARS)}' WHERE code='${CODE}'`)
		}
		if(TYPE == "api") {
			API.push(component)
			await sql(`UPDATE languages SET api='${JSON.stringify(API)}' WHERE code='${CODE}'`)
		}

		resolve()
	});
}

async function editComponent(originComponent, originLanguage, originType, component, reading, language, types, pronunciations, translations, definitions, synonyms, antonyms) {
	reading = reading ? reading : "null"
	return await new Promise((resolve, reject) => {
		sql(`UPDATE components SET 
				id='${component.replace(/'/g, String.raw`\'`)}.${language}.${JSON.parse(types)[0]}',
				component='${component.replace(/'/g, String.raw`\'`)}',
				reading='${reading.replace(/'/g, String.raw`\'`)}',
				language='${language}',
				types='${types.replace(/'/g, String.raw`\'`)}',
				pronunciations='${pronunciations.replace(/'/g, String.raw`\'`)}',
				translations='${translations.replace(/'/g, String.raw`\'`)}',
				definitions='${definitions.replace(/'/g, String.raw`\'`)}',
				synonyms='${synonyms.replace(/'/g, String.raw`\'`)}',
				antonyms='${antonyms.replace(/'/g, String.raw`\'`)}'
				WHERE ${CONDITION_KEY(originComponent.replace(/'/g, String.raw`\'`), originLanguage, originType)}`).then(() => {
			resolve()
		}).catch(err => reject(err));
	});
}

async function removeComponent(component, language, type) {
	return await new Promise((resolve, reject) => {
		sql(`DELETE FROM components WHERE ${CONDITION_KEY(component, language, type)}`).then(() => {
			resolve()
		}).catch(err => reject(err));
	});
}

async function getComponent(component, language, type) {
	return await new Promise((resolve, reject) => {
		sql(`SELECT * FROM components WHERE ${CONDITION_KEY(component, language, type)}`).then(async result => {
			const PACKET = result[0]
			if(PACKET == undefined) resolve(null);
			const COMPONENT = PACKET.component
			const LANGUAGE = await getLanguage(PACKET.language)
			const READING = PACKET.reading
			const TYPES = JSON.parse(PACKET.types)
			const PRONUNCIATIONS = JSON.parse(PACKET.pronunciations)
			const TRANSLATIONS = JSON.parse(PACKET.translations)
			const DEFINITIONS = JSON.parse(PACKET.definitions)
			const SYNONYMS = JSON.parse(PACKET.synonyms)
			const ANTONYMS = JSON.parse(PACKET.antonyms)
			resolve(new Component(COMPONENT, READING, LANGUAGE, TYPES, PRONUNCIATIONS, TRANSLATIONS, DEFINITIONS, SYNONYMS, ANTONYMS));
		}).catch(err => reject(err));
	});
}
async function getAllComponents(language, offset) {
	return await new Promise((resolve, reject) => {
		var command = ""
		if(language == "all") command = `SELECT * FROM \`components\` ORDER BY id LIMIT ${offset}, 50`;
		else command = `SELECT * FROM \`components\` WHERE \`language\`='${language}' ORDER BY id LIMIT ${offset}, 50`;
		sql(command).then(async result => {
			const COMPONENTS = []
			for(var i = 0; i < result.length; i++) {
				const PACKET = result[i]
				const COMPONENT = PACKET.component
				const READING = PACKET.reading
				const LANGUAGE = await getLanguage(PACKET.language)
				const TYPES = JSON.parse(PACKET.types)
				const PRONUNCIATIONS = JSON.parse(PACKET.pronunciations)
				const TRANSLATIONS = JSON.parse(PACKET.translations)
				const DEFINITIONS = JSON.parse(PACKET.definitions)
				const SYNONYMS = JSON.parse(PACKET.synonyms)
				const ANTONYMS = JSON.parse(PACKET.antonyms)
				COMPONENTS.push(new Component(COMPONENT, READING, LANGUAGE, TYPES, PRONUNCIATIONS, TRANSLATIONS, DEFINITIONS, SYNONYMS, ANTONYMS))
			}
			resolve(COMPONENTS);
		}).catch(err => reject(err));
	});
}

async function getAllComponentsBySQL(command) {
	return await new Promise((resolve, reject) => {
		sql(command).then(async result => {
			const COMPONENTS = []
			for(var i = 0; i < result.length; i++) {
				const PACKET = result[i]
				const COMPONENT = PACKET.component
				const READING = PACKET.reading
				const LANGUAGE = await getLanguage(PACKET.language)
				const TYPES = JSON.parse(PACKET.types)
				const PRONUNCIATIONS = JSON.parse(PACKET.pronunciations)
				const TRANSLATIONS = JSON.parse(PACKET.translations)
				const DEFINITIONS = JSON.parse(PACKET.definitions)
				const SYNONYMS = JSON.parse(PACKET.synonyms)
				const ANTONYMS = JSON.parse(PACKET.antonyms)
				COMPONENTS.push(new Component(COMPONENT, READING, LANGUAGE, TYPES, PRONUNCIATIONS, TRANSLATIONS, DEFINITIONS, SYNONYMS, ANTONYMS))
			}
			resolve(COMPONENTS);
		}).catch(err => reject(err));
	});
}

async function getLanguage(language) {
	return await new Promise((resolve, reject) => {
		sql(`SELECT * FROM languages WHERE code='${language}'`).then(result => {
				const PACKET = result[0]
				if(PACKET == undefined) resolve(null);
				const CODE = PACKET.code
				const CHARS = JSON.parse(PACKET.chars)
				const API = JSON.parse(PACKET.api)
				const TYPES = JSON.parse(PACKET.types)
				resolve(new Language(CODE, CHARS, API, TYPES))
		}).catch(err => reject(err));
	});
}

async function getAllLanguages() {
	return await new Promise(async (resolve, reject) => {
		const RESULTS = await sql("SELECT * FROM `languages` ORDER BY `code`")
		const LANGUAGES = []
		for(var i = 0; i < RESULTS.length; i++) {
			const PACKET = RESULTS[i]
			const CODE = PACKET.code
			const CHARS = JSON.parse(PACKET.chars)
			const API = JSON.parse(PACKET.api)
				const TYPES = JSON.parse(PACKET.types)
			LANGUAGES.push(new Language(CODE, CHARS, API, TYPES))
		}
		resolve(LANGUAGES)
	});
}

module.exports.sql = sql
module.exports.Component = Component
module.exports.addComponent = addComponent
module.exports.editComponent = editComponent
module.exports.getComponent = getComponent
module.exports.getAllComponents = getAllComponents
module.exports.getAllComponentsBySQL = getAllComponentsBySQL
module.exports.getAllLanguages = getAllLanguages
module.exports.getLanguage = getLanguage
module.exports.tryCreate = tryCreate