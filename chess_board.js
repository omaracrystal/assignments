var userInput = prompt("How wide do you want your chessboard to be?")

var string1 = " #"
var string2 = "# "
var newline = "\n"
var counter = 0.5

var chessboard = function () {
  console.log(string1.repeat(userInput) + newline + string2.repeat(userInput));
};

while (counter <= userInput/2) {
  console.log(chessboard);
  counter++
};
