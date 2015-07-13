//console.log("test")
for (var row = 0; row < 8; row++) {

  var line = "";

  for (var column= 0; column < 8; column ++) {

    var total = row + column;

    if (total % 2 === 0) {
      line += " ";
    } else {
      line += "#";
    }
  }

console.log(line);
}
