var userInput = prompt("How wide do you want your chessboard to be?")

//converts userInput from string to number
var userInput = Number(userInput)

//.join repeats the string by the number input by the user
var string1 = Array(userInput + 1).join(" #")
var string2 = Array(userInput + 1).join("# ")

//the ? and : is called ternary operator
// ternary operator takes in three arguments
// condition ? exprr1 : expr2
//short cut for if statement
var chessboard = function (i) {
  console.log(i % 2 == 0 ? string1 : string2);
};


for (var i = 0; i < userInput; i++) {
  chessboard(i);
}
