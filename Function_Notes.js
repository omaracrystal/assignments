//function- code block that performs some sort of task

// fuction declaration syntax
var greet = function() {
 console.log("hello class");
};

greet();

// function declaration syntax
function greetDeclartionSyntax() {
  console.log("hello class 2");
}

greetDeclartionSyntax();

//defining with a parameter
var greetWithParameters = function(str) {
  console.log("hello " + str);
}
//waiting for argrument to pass through
greetWithParameters("class");

function classGreeting(studentName) {
  console.log("Hi "+ studentName);
}

classGreeting("Crystal");

//returning values- always

function classGreetinginReturn(studentName) {
  return "Hi, " + studentName;
}

var result = classGreetinginReturn('Brandon');
console.log(result);
console.log(classGreetinginReturn('Brandon'));

function classGreetingTwo(student1, student2) {
  console.log("Hi, "+ student1);
  console.log("Hello, "+ student2);
}

classGreetingTwo('Kierston', 'Robbie');
