const SERVER_PROPERTIES = {
	port: process.env.PORT || 3000
}

const SOCKET_IO = require("socket.io")

function createServer(app) {
	// Controls clients' origin
	app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", `https://safe-shore-84147.herokuapp.com:${SERVER_PROPERTIES.port}`)
		res.header("Access-Control-Allow-Methods", "GET,POST")
		res.header("Access-Control-Allow-Headers", "Origin,X-REaquested-With,Content-Type,Accept,x-client-token,x-cient-secret,Authorization")
		next()
	})

	const HTTP = app.listen(SERVER_PROPERTIES.port, () => {
		// console.log(`Server has start : https://${SERVER.PROPERTIES.ip}:${SERVER.PROPERTIES.port}`)
		console.log(`Server has start : https://safe-shore-84147.herokuapp.com:${SERVER_PROPERTIES.port}`)
	})

	return SOCKET_IO(HTTP);
}

const INTERFACE = require("./interface")

function createListeners(io) {
	io.on("connection", socket => {
		// Listeners
	})
}

exports.PROPERTIES = SERVER_PROPERTIES
exports.createServer = createServer
exports.createListeners = createListeners