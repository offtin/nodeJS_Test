var Calc = require("./test_event3");

var calc = new Calc();

calc.emit("stop");

console.log(Calc.title + "에 stop 이벤트 전달함.");
