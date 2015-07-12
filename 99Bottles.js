for (beer = 99; beer > 0; beer --) {
  remainder = beer - 1;
  if (beer != 1) {
    beercase = "bottles";
  } else {
    beercase = "bottle";
  }
  if (remainder != 1) {
    remaindercase = "bottles";
  } else {
    remaindercase = "bottle"
  }
  console.log(beer + " " + beercase + " of beer,");
  console.log("Take 1 down, pass it around,");
  if (remainder != 0) {
    console.log(remainder + " " + remaindercase + " of beer on the wall.");
  } else {
    console.log("No more bottles of beer on the wall.");
  }
}
