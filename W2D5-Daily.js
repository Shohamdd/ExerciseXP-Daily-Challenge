//DailyEx - 99 bottles of beer
let word = "bottles";
let count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 1) {
        console.log(count + " " + count + " of beer on the wall.");
    } else if(count == 1) {
        console.log(count + " bottle of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
}
