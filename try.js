
const Logger = require("./logger");

var logger = new Logger();

logger.on("logging", (arguments) =>{
	console.log(arguments.id, arguments.msg);
});

logger.remoteLog("Hello to you");