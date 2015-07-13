var userInput = prompt("How wide do you want your chessboard to be?")

var userInput = Number(userInput)

var string1 = Array(userInput).join(" #")
var string2 = Array(userInput).join("# ")
var newline = "\n"

var chessboard = function (i) {
  console.log(i % 2 == 0 ? string1 : string2);
};

for (var i = 0; i < userInput; i++) {
  chessboard(i);
}
