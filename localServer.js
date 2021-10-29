const SERVER_PROPERTIES = {
	ip: require("ip").address(),
	port: 9998
}

// Certififications to create secured HTTP site
const FILE_SYSTEM = require("fs")
const SERVER_OPTIONS = {
	key: FILE_SYSTEM.readFileSync("key.pem"),
	cert: FILE_SYSTEM.readFileSync("cert.pem")
}

const SOCKET_IO = require("socket.io")

function createServer(https, app) {
	// Controls clients' origin
	app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", `https://${SERVER_PROPERTIES.ip}:${SERVER_PROPERTIES.port}`)
		res.header("Access-Control-Allow-Methods", "GET,POST")
		res.header("Access-Control-Allow-Headers", "Origin,X-REaquested-With,Content-Type,Accept,x-client-token,x-cient-secret,Authorization")
		next()
	})

	return SOCKET_IO(https, {
		// Creates the verificator (cors) to check all GET and POST methods
		cors: {
			origin: `https://${SERVER_PROPERTIES.ip}:${SERVER_PROPERTIES.port}`,
			methods: ["GET", "POST"]
		}
	})
}

const INTERFACE = require("./interface")

function createListeners(io) {
	io.on("connection", socket => {
		// Listeners
	})
}

exports.PROPERTIES = SERVER_PROPERTIES
exports.OPTIONS = SERVER_OPTIONS
exports.createServer = createServer
exports.createListeners = createListeners