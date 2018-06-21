
const EventEmitter = require("events");

class Logger extends EventEmitter{
	remoteLog(message) {
		console.log(message);
		this.emit("logging", {id:1, msg:message});
	}
}

// var url="https://abc.xyz";

module.exports = Logger;