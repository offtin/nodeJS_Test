var fs = require("fs");

// 비동기식 IO로 읽어 들임
fs.readFile("./package.json", "utf-8", function(err, data){
    console.log(data);
});
