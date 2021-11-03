'use strict';

String.prototype.replaceBetween = function(start, end, what) {
  return this.substring(0, start) + what + this.substring(end);
};

// Creates the server instance
const SERVER = require("./localServer")
const APP = require("express")()
const FS = require("fs")
const LANG = require("./packets/lang/index.js")
const MYSQL = require("./packets/mysql/index.js")

/*
 *  Redirection factory
 */
const COMPONENT_TYPES = [
	"word",
	"char",
	"punctuation",
	"api"
]

APP.get('/', async (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	await require("./packets/factory/root/index.js")(req, res)
});

APP.get('/add', async (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	await require("./packets/factory/add/index.js")(req, res)
});

APP.get('/cba', async (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	await require("./packets/factory/cba/index.js")(req, res)
});

APP.get('/removeit', async (req, res) => {
	await require("./packets/factory/removeit/index.js")(req, res)
});

APP.get('/edit', async (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	await require("./packets/factory/edit/index.js")(req, res)
});

APP.get('/addit', async (req, res) => {
		await require("./packets/factory/addit/index.js")(req, res)
});

APP.get('/audio', async (req, res) => {
	await require("./packets/factory/audio/index.js")(req, res)
});

APP.get('/editit', async (req, res) => {
	await require("./packets/factory/editit/index.js")(req, res)
});

// Need to harcode words for client
APP.get('/component/*', async (req, res) => {
	let ERR = await require("./packets/factory/component/index.js")(req, res)
	if(ERR == "NOT_FOUND") {
		res.redirect(`../ufc?c=${req.params[0].replace("µ2e", ".")}&l=${req.query.l}&t=${req.query.t}`)
	}
});

APP.get('/ufc', async (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	await require("./packets/factory/ufc/index.js")(req, res)
})

// Need to hardcode node_modules directory for client
APP.get('/node_modules/*', (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/javascript; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	res.sendFile(__dirname + req.originalUrl)
});

// Need to harcode ressources directories for client
APP.get('/css/*', (req, res) => {
	/*res.writeHead(200, {
		"Content-Type": "stylesheet/css; charset=utf-8"
	});*/
	res.sendFile(__dirname + `/html_files/res/style/${req.params[0]}.css`)
});

// Need to harcode image files (png) for client
APP.get('/img/*', (req, res) => {
	/*res.writeHead(200, {
		"Content-Type": "img/png; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});*/
	res.sendFile(__dirname + `/html_files/res/img/${req.params[0]}.png`)
});

// Need to harcode javascript directories for client
APP.get('/js/*', (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/javascript; charset=utf-8",
		"Cache-Control": "no-cache",
		"X-Content-Type-Options": "nosniff"
	});
	res.sendFile(__dirname + `/${req.params[0]}.js`)
});

// Starts the server (HTTPS)
async function start() {
	await MYSQL.tryCreate(process.argv[2] == "-u" ? true : false);
	const HTTPS = require("https").Server(SERVER.SERVER_OPTIONS, APP)
	const SERVER_INSTANCE = SERVER.createServer(HTTPS, APP)
	SERVER.createListeners(SERVER_INSTANCE)
	APP.listen(SERVER.PROPERTIES.port, () => {
		console.log(`Server has start : http://${SERVER.PROPERTIES.ip}:${SERVER.PROPERTIES.port}`)
	});
}

start()