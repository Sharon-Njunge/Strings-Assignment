//Question 1: Extract four last characters
let statement = "extravaganza"
let result = statement.substring (7,11);
console.log({result})

//Question 2:Insert the fourth index to the variable
let food = "The quick fox jumped over the lazy dog"
let stringToAdd = "eat";
let indexPosition = 4
let newString = food.slice(0,4) + stringToAdd + food.slice(indexPosition)
console.log({newstring});

//Question 3:How many times the string appears in the string variable.
let state = "The quick brown fox jumps over the lazy dog"
console.log(state.match("the"));
console.log(state.match("brown"));

//Question 4:Find the words from the following strings
let string1 = "The pupils  are reading in the library";
let word = string1.search("are")
console.log({string1});

let string2 = "The child was sitting on the table before it fell";
let sentence = string2.search("setting");
console.log({sentence});

//Question 5: convert the following strings into the specified format;
//upercase; "wonderful"
//lowercase; "amazing", "UndERneath"
//Title case; "A wonderful world"

let line = "wonderful";
let phrase1 = line.toUpperCase();
console.log({phrase1});

let line1 = "amazing";
let phrase2 = line.toLowerCase();
console.log({phrase2});

let line2 = "UndERneath";
let phrase3 = line.toLowerCase();
console.log({phrase3});

let line3 = "A wonderful world"
let phrase4 = line.toTitleCase();
console.log({phrase4});






