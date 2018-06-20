
const filesystem=require("fs");

filesystem.readdir("./",function(err, files) {
	if(err) console.log("Error", err);
	else console.log("Result", files);	
});
