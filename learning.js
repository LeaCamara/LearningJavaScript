// // *******TREEHOUSE********

// // FUNCTIONS:
alert("Hey, you're back for more!");

document.write("<h1>Hey!</h1>");
// // writes content to page

console.log("Start Program");
// console.log prints messages into console; helps you send hidden messages and figure out what’s going on inside a program and see errors

// VARIABLES
// start with keyword var to create the variable (or box, where contents can change but it’s always the same box)

var score;
var score = 0;

/*
(= means put whatever’s on the right side into the name on the left side)
this is assigning a value to that variable
only use it when you 1st create the variable***
*/

// This code gives you two different messages:
var message = "Hello!";
alert(message);
message = "Welcome to JS Basics";
alert(message);

// // variable names have to be letters, numbers, $ or _
// // price_per_unit or pricePerUnit (camel case)

// // value = info you’re putting into a variable
// // two common value types:
// // numbers
// // strings

// // use a backslash to avoid syntax errors when you have a single or double quotes inside a string

// // add space when it makes the code easier to understand:
var daysInWeek = 7;

var visitorName = prompt("What is your name?");
alert(visitorName);
console.log(visitorName);
var answer = prompt("What day is it?");
document.write(answer);

message = message + "We are so glad you came by to visit, ";
// // OR
message += "We are so glad you came by to visit, ";

// // These two lines have the same effect. The += is the same as = message +.

// // += means take the contents of the variable and add to it whatever appears on the right of the equal sign.

var visitor = prompt("What is your name?");
var message = "Hello " + visitor + ". Welcome to Treehouse.";
message += "We are so glad you came by to visit, ";
message += visitor;
message += ". Please come again.";
document.write(message);

// // "Hello Lea. Welcome to Treehouse. We are so glad you came by to visit, Lea. Please come again.""

// // Create a variable named firstName and put your first name in the variable:
var firstName = "Lea";
var lastName = "Camara";
var fullName = firstName + lastName;

// // METHODS:
console.log();
// // Log is a method or command for the console.
document.write();
// // Write is a method or command of the document.

var passphrase = "Open Sesame";
console.log(passphrase.length);
// // prints the number 11 to the console

// // See methods at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// // Methods are things you can do with the object & have ().

console.log(passphrase.toLowerCase());
console.log(passphrase.toUpperCase());

var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!";
alert(shout);

// // TO MAKE A MADLIB:
// // "<h2>There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].</h2>"

var adjective = prompt("Let's make a story! First, give me an adjective!");
var story = "<h2>There once was a " + adjective;
var verb = prompt("Give me a verb!");
var noun = prompt("Give me a noun!");
alert("All done! Here's your story!");
story += " programmer who wanted to use Javascript to " + verb;
story += " the " + noun + ".</h2>";
document.write(story);

// // MATH:
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

document.write("There are " + secondsPerDay + "seconds in a day.");

var yearsAlive = 35;
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear;
document.write(" I've been alive for more than " + secondsAlive + " seconds.");
// // Values entered inside prompts are STRINGS by default.

// CONVERT STRINGS TO NUMBERS:
// if you want to do math with numbers in a string, use parseInt or parseFloat to convert the string to numbers.

// parseInt to convert strings to integers
var HTMLBadges = prompt("How many HTML badges?");
var CSSBadges = prompt("How many CSS badges?");
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert("Wow! You have " + totalBadges + " badges!");

// parseInt only returns integers (whole numbers)

// parseFloat to convert strings to decimals

//  you can use the CONSOLE to write JS code & run it immediately. in the console:

// parseFloat("3.14"); converts to decimal 3.14
// parseFloat("1.89 light years away"); converts to just decimal 1.89
// but - number must be at the BEGINNING of the string

// COUNTDOWN; HOW MANY QUESTIONS LEFT
var questions = 3;
var questionsLeft = " [" + questions + " questions left]";
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var verb = prompt('Please type a verb' + questionsLeft );
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);

// GENERATING RANDOM NUMBERS via the math object

// types of objects:
// numbers
// strings
// math

// Objects have associated PROPERTIES, like length:
alert("this string has many characters".length);
// Objects have associated METHODS (actions), like toUpperCase:

// MATH OBJECT is used to perform complex mathematical functions, like finding the square root of a number or working with trigonometric functions like tangent, sines, and cosines to create more realistic games and animations.

// Properties you can use with the Math object:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// for ex: Math.round(2.2) in console rounds it to 2

// Open an alert dialog and display the temperature variable rounded to the nearest integer:

var temperature = 37.5;
alert(Math.round(temperature));

// to round DOWN to nearest integer:
alert(Math.floor(temperature));

// USE CASES for RANDOM NUMBERS:
// random photo each time someone visits site
// random question selected as part of quiz

// Start by creating a random number.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// in the console:
// Math.random() returns a value from zero to a decimal value up to, but NOT including, 1. The random number can actually be zero.

// ROLLING A DIE:
// if you want to get a random integer from rolling a die (anywhere from 1 to 6):

Math.floor( Math.random() * 6 ) + 1;
// (to make sure you don’t end up with 0)

var dieRoll = Math.floor( Math.random() * 6 ) + 1;
alert("You rolled a " + dieRoll);

// RANDOM NUMBER CHALLENGE:
// Create a Random Number Generator:
//  You will need:

// prompt() dialogue to collect user input
// parseInt() function to convert the input to an integer
// Math.random() method to create a random number
// Part 1: Build a program that prints out a random number from 1 to the number the user selects:

var input = prompt("Give me a number");
var topNumber = parseInt(input);
// (changing the string to a number)
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p>";
document.write(message);
// Part 2: Create a program that accepts two values and generates a random number from the first to the second.

var input1 = prompt("Give me a number");
var bottomNumber = parseInt(input1);
var input2 = prompt("Give me another number");
var topNumber = parseInt(input2);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and  " + topNumber + ".</p>";
document.write(message);

// CONDITIONAL STATEMENTS:
// If this is true, then do that.

var answer = prompt("What programming language is the name of a gem?");
if ( answer.toUpperCase() === "RUBY" ) {
  document.write("<p>That's right!</p>");
} else {
 document.write("<p>That's wrong!</p>");
}

var answer = prompt("What is the best programming language?");
if (answer.toUpperCase() === "JAVASCRIPT") {
  alert("You are correct");
}

// WAYS TO TEST THINGS:
// === tests the strict equality of two things; compares types as well as value
// == less strict but can cause weird unexpected results
// !== strict not equal
// >
// >=
// <
// <=

// strings are in ABC order, so "apple" < "bear"
// numbers come before letters, so 1 < "a"

// ("3" == 3) the == converts the string 3 to the number 3

//  RANDOM NUMBER GUESSING GAME

var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Guess a number between 1 & 6.");
if (parseInt(guess) === randomNumber) {
  document.write("<p>You guessed it!</p>");
} else {
  document.write("<p>Sorry, the number was " + randomNumber + "</p>");
}

// TWO POSSIBLE OUTCOMES: TRUE OR FALSE
// ALL CONDITIONAL STATEMENTS return a TRUE or FALSE (BOOLEAN) value.
// Set/assign the boolean value false to the variable correctGuess, so that the value of the variable will only change if the player gets the correct answer:

// Create variable w/ Boolean false value.
// Create a random #.
//  Open dialog box & ask user to input random #.
// Program tests user’s response.
// If it matches, the variable is changed to true b/c player correctly guessed the answer.     If player didn’t guess correct answer, variable stays the same, false.
// If the value in correctGuess is true, then we write a winning message.  Or if the value is false, we tell the player the number.


var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Guess a number between 1 & 6.");
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
}
if (correctGuess === true) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry, the number was " + randomNumber + "</p>");
}

// Two conditional statements
// So if the player guesses the correct number, the correctGuess variable changes to true.
// If the player guesses wrong, the variable doesn’t change and stays false.
// #2 checks to see if the value in the correctGuess variable is true & if it is tells the player she was correct. Otherwise it tells them what the correct number was.

// MANY POSSIBLE OUTCOMES:  ELSE-IF CLAUSE

//  You start with a simple conditional statement.
//  Then add an else if clause, which provides another condition to test.
//  Now you have two conditions.
//  If the first one is true then the code in the first block between the first pair of braces runs. (door #1)
//  However, if the first condition is false, then a second condition is tested.
//  If the answer to that condition is true, then the code in the second code block runs. (door #2)
//  The second condition is not tested if the first condition is true. You'll only get to the second condition if the first is false.
//  Now, if neither of the conditions is true you might want to provide a fallback, so that the program does something. (door #3)
//  You can do this by adding an else clause to the end. There is no condition for this last part.
//  However, the code block at the end only ever runs if both of the conditions above are false. There's no limit to the number of else if clauses you can add. However, you must start with an if clause. And the else clause, if there is one, must go at the end. Now, there's four test conditions, and five possible outcomes. But only one will ever run.
// And keep in mind that as soon as one test condition is true the code for that condition runs and all the conditions following, and the last else clause are skipped.

var isAdmin = false;
var isStudent = false;

if ( isAdmin ) {
    alert('Welcome administrator');
} else if (isStudent) {
    alert('Welcome student');
} else {
  alert("Who are you?");
}

// TO GIVE CLUES IF THEIR GUESS IS HIGHER OR LOWER THAN THE CORRECT ANSWER:

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt("Try again. The number I'm thinking of is more than " + guess);
  if ( parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
  var guessMore = prompt("Try again. The number I'm thinking of is less than " + guess);
  if ( parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
}
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

// COMBINING MULTIPLE TESTS INTO A SINGLE CONDITION

// && - AND operator = BOTH conditions must be true; both tests have to pass
// || - OR operator = EITHER condition can be true; only one test has to pass

// must have a complete condition on either side of the operator

// CODING QUIZ CHALLENGE - TROUBLESHOOT WHY ONLY 3/5 ARE CORRECT!
// // quiz begins, no answers correct
var correct = 0;

// //ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === "RUBY") {
  correct += 1;
}

var answer2 = prompt("Name a programming language that's also a snake");
if ( answer1.toUpperCase() === "PYTHON") {
  correct += 1;
}

var answer3 = prompt("What language do you use to style webpages?");
if ( answer3.toUpperCase() === "CSS") {
  correct += 1;
}

var answer4 = prompt("What language do you use to build the structure of webpages?");
if ( answer1.toUpperCase() === "HTML") {
  correct += 1;
}

var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === "JAVASCRIPT") {
  correct += 1;
}

//output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

//output rank
if (correct === 5) {
    document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= 3) {
    document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (correct >= 1) {
    document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
    document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}

// FUNCTIONS
// CREATING REUSABLE CODE WITH FUNCTIONS
// = Set of instructions that you want to run over and over again

// DECLARE the function:
function goToCoffeeShop() {
}
// (Whenever you see () following a name, you know you’re dealing with a function.)
// {} BRACES form a code block that runs whenever you CALL the function, like this:
goToCoffeeShop();
// ** The () are what call the function and activate its programming
// **Common to place functions at the top; it’s not run immediately, just memorized by browser.

// //A. NAMED FUNCTION:

// create a new random number each time function is called
// no ; after the braces

function alertRandom() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  alert(randomNumber);
}

// This calls the function 4x:
alertRandom();
alertRandom();
alertRandom();
alertRandom();

// //B. FUNCTION EXPRESSION/ANONYMOUS FUNCTION:

// //lets you assign a function to a variable
var alertRandom = function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
};
alertRandom();

// There's no name after the function keyword, so it's called an anonymous function.
// Instead, the name comes from the variable.
// We're storing a function into a variable.
// And there's a ; after the last brace.

// Functions break the top to bottom flow.
//  It's very common to have one function call another function which calls yet another function.
//  As each function completes, it returns to the function that called it.
//  That's one reason it's a good idea to put your functions at the top of a script. So those different components you access in your program are organized in a single area of the script.

// GETTING INFO FROM A FUNCTION, RETURNING VALUES:
// can print to console, print to page, alert, or SAVE it in a varia
// Use the RETURN keyword

// function to return a random number:

function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

// things you could do with it:

alert( getRandomNumber() );
console.log( getRandomNumber() );
var dieRoll = getRandomNumber();

// A return statement causes the JavaScript interpreter to exit the function immediately, so  the return statement should be the last thing in a function.
// First, the JavaScript interpreter memorizes the steps in the function.
// Then, the function is called. The program flow jumps up and into the function.
// When the return statement is encountered, the function returns the number 5 and the last line in the function never, ever runs.
// Instead, control is passed back to the main program and the alert following the function call runs.
// In addition, the return statement can only return a single value.
// That is, you can only return ONE thing at a time: a string, a number, a Boolean value, or the contents of a variable.

// checking if an email field is empty:

function isEmailEmpty() {
  var field = document.getElementById("email");
  if (field.value === "") {
    return true;
  } else {
    return false;
  }
}

document.getElementById accesses an element on the Web page with an ID of email, and stores a reference to that element in a variable named field

// storing return value in a variable:

var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert("Please provide your email address.");
}

// https://teamtreehouse.com/library/interactive-web-pages-with-javascript

// The Return statement exits a function and sends a value back to the spot in the program where the function was called.

// You can have > 1 return statement in a function, but one one ever runs.  Usually you’ll find multiple return statements within different branches of conditional statements.

// _________________________

function getYear() {
  var year = new Date().getFullYear();
  return year;
}
var yearToday = getYear();

// var year creates a new variable and stores the current year in it.
// return year returns this variable from the function.
// var yearToday calls the getYear function and stores the returned value of the function in a new variable named yearToday

// ______________________

// You can
// a) GET info from a function via RETURN keyword
// must be a single item (variable, string, number, Boolean, etc.)
// b) SEND info to a function via an ARGUMENT to change how that function works; pass a piece of info called an ARGUMENT to a function
// It’s a value that you pass to a function when you call the function
// functions can accept MULTIPLE arguments; when calling a function, you an pass multiple arguments to the function.
// Each argument is then stored in a separate parameter and is used as a separate variable within the function.

// The ARGUMENT is stored in a variable called a PARAMETER that you can use inside the function.
// Add a parameter name inside the () when creating a function.
// When we call the function, we need to pass it some information, aka PASSING AN ARGUMENT TO THE FUNCTION.

// SINGLE ARGUMENT:
function goToCoffeeShop(drink) {
  alert(drink + "is on the way!");
}
goToCoffeeShop("Chamomile tea");
// will alert: "Chamomile tea is on the way!"

// MULTIPLE ARGUMENTS:

function goToCoffeeShop(drink, pastry) {
  alert(drink + " and " + pastry " are on the way!");
}
goToCoffeeShop("Espresso", "croissant");
// will alert: "Espresso and croissant are on the way!"
// ___________________________

// Making the random number function more flexible by accepting a value that sets the upper limit of each random number:

function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(100000));
console.log(getRandomNumber(2));

// Once the browser loads Javascript, you can call any function in that JavaScript file directly in the console.

function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}
console.log(getArea(10, 20, "sq ft"));

// Using an array or a JavaScript object filled with multiple values can be a better way to pass even more arguments.

// When you call a function you pass an "argument" which is stored in a "parameter" in the function.

// Examples of passing an argument to a function:
// alert("Hello world!")
// document.write("<h1>Welcome</h1>")
// Math.floor(2.2)
// getArea(10, 20, "sq ft")
// ________
// Ex of a function named returnValue that accepts a single argument and then immediately returns that argument:

function returnValue(birthday) {
  return birthday;
}
var echo = returnValue("August");

// ________________
// Create a new function named max which accepts two numbers as arguments (you can name the arguments, whatever you would like). The function should return the larger of the two numbers.

// HINT: You'll need to use a conditional statement to test the 2 parameters to see which is the larger of the two.

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// This calls the function with two numbers and passes the result of the function to the alert method:

alert(max(1828, 3));
// ______________________

// VARIABLE SCOPE (How JS protects variables from writing over each other):

// Scope = context in which a variable can be accessed, such as within a function or within the global scope of the entire program.
// JavaScript provides separate scopes for each function.
// Each function acts like its own individual universe and the variables that are created within that universe don't interact with the variables created in another universe or another function.

// ALWAYS use the VAR keyword when creating a variable inside a function.
// If you don’t, your function is reaching out to the global scope and might override another variable with the same name.
// As long as you use the var keyword to create the variable, you can use the same variable inside functions, and the variable will only exist inside that function.

// This alert returns Trish because only the name variable inside the function has the value of Sarah. And it can’t be accessed outside that function.

var name = "Trish";
function setName() {
  var name = "Sarah";
}
setName();
alert(name);

// This alert returns Go Away! Because the var keyword isn't used to declare a message variable inside the function, the function overwrites the value in the global variable message
var message = "Welcome!";
function setMessage() {
  message = "Go away!";
}
setMessage();
alert(message);
// GLOBAL SCOPE = when a variable is accessible anywhere inside a program (in the body of the program and within functions)

// MORE RANDOM NUMBER CHALLENGES

function getRandomNumber( upper, lower ) {
  var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return random;
}

// OR - MORE COMPACT:

function getRandomNumber( upper, lower ) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(10, 100));
console.log(getRandomNumber(9, 78));
console.log(getRandomNumber(1, 6));
console.log(getRandomNumber(0, 6));

// Because all a return statement does is return a value. It doesn't matter where that value comes from.

// It can be stored in a variable, or it can just be the result of another function, or some mathematical operations, as it is in this case.

// TO ANTICIPATE PROBLEMS & MAKE SURE BOTH ARE NUMBERS:

function getRandomNumber( lower, upper ) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error("oops, both values must be a number!");
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log( getRandomNumber( 9, 24 ) );
console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, "one-hundred" ) );

// As soon as it comes across a string, an error is thrown, and the program stops.
// ______________

// LOOPS, ARRAYS, AND OBJECTS

// LOOPS to repeat the same set of actions over & over
// ARRAYS to store lots of information
// OBJECTS to store information by assigning different properties and property values to a variable

// Frequently use objects to exchange data between websites using Ajax, and even for communicating with some types of databases.

// LOOP is a way to repeat the same actions a certain # of times or until a certain condition is true.
// While loop
// Do While loop
// For loop

// WHILE LOOPS
// similar to conditional statement
// Conditional Statement: code only runs ONCE when a condition is true
// While Loop: code runs over and over AS LONG AS the condition is true; no semicolon after the final brace

// REPEAT A CERTAIN # OF TIMES:

// write 10 numbers to a page using a loop:

// //This function returns a random number from 1 to a number that's supplied to the function:

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

randomNumber(6);
// //returns a random number from 1 to 6

var counter = 0;
// //keeps track of how many times loop has run; starts at 0 & we add 1 each time the loop runs.

while (counter < 10000) {
  var randNum = randomNumber(6);
  document.write(randNum + " ");
  counter += 1;
}

// //The loop will repeat itself as long as the number inside the counter variable is less than 10.

// REPEAT UNTIL A CERTAIN CONDITION IS TRUE:
// Generate a random number from 1 to 10000. This is the number the computer needs to guess.
// Enter a while loop - inside this loop the computer will "guess" a random number. If the # the computer guess matches the # generated at the beginning of the program, the loop ends. If not, the loop continues until the correct # is guessed.
// Exit the loop and print the random number and the number of times it took the computer to guess it.
var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");

// REMEMBER
// 1. The condition is evaluated BEFORE the loop.
// So if the test condition is not true at the beginning, then the loop will never run.
// 2.  You always need a way to break out of the loop!
// Ways to stop the loop from running:
// a) keyword break;
// b) most common: change some variable inside the loop that causes the test condition to evaluate to false
// ________________________________
// In this while loop, a prompt keeps appearing until the user types "sesame" into the prompt:

var secret = prompt("What is the secret password?");
var counter = 0;

while(secret !== "sesame") {
  secret = prompt("That's not it! Try again");
  counter += 1;
}

document.write("You know the secret password. Welcome.");
// ____________________________________

// DO WHILE LOOP

// does something over & over again while a condition is true
// basic difference btw while & do while loops:
// Will ALWAYS execute the code block AT LEAST ONCE, because the condition is evaluated AFTER the loop.  () are at the END, not the beginning.
// Useful when you want to prompt a user for some information and make sure the user gives it to you, like a valid email address. You prompt once, and then as many times as it takes.

// do {
//   // code for loop goes here
//   // it runs AT least one time
// } while ( )

// NUMBER GUESSING GAME where you’re prompted until you get the right number:

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

// //from 1 to 10
// //contains the player's guess
// //tracks how many guesses
// //set to false b/c at beginning of game player hasn't made any correct guesses. It's a FLAG b/c it's used to determine the state of a particular condition.

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt("Guess a number between 1 and 10.");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess )

// //flag changes to true when correct number is guessed.
// //loop repeats as long as condition is true (as long as player hasn't guessed correct answer), hence: while ( ! correctGuess )

document.write("<h1>You guessed it!</h1>");
document.write("It took you " + guessCount + " tries to guess the number " + randomNumber);
// _______________________________
// Given the code below, what will print out to the console?

while (false) {
 console.log('Hello');
}
console.log('Goodbye');

// Goodbye. Because the condition for the while loop is false the loop never runs and 'Hello' never prints, but the second console.log does run because it's outside the loop.

// ________



// Given the code below, what will print out to the console?

do {
  console.log('Hello');
} while (false)
console.log('Goodbye');
// Hello Goodbye. B/c even though the condition is false, a do while loop always runs at least once.

var counter = 0;
while (counter < 10) {
  document.write(counter);
  counter += 1;
}

for (var counter = 0; counter < 10; counter += 1) {
  document.write(counter);
}
// ____________________________

// FOR LOOPS (THE MOST COMMON LOOP)
// for actions that need to run a specific number of times
// common way to work with arrays (lists of data) and go through each item in an array one at a time

// BASIC STRUCTURE:
for (var i = 0; i < 10; i += 1) {
  // do something in here
}

// to increment:   i += 1   OR   i++

// WHILE LOOP VS FOR LOOP:

var counter = 0;
while (counter < 10) {
  document.write(counter);
  counter += 1;
}

for (var counter = 0; counter < 10; counter += 1) {
  document.write(counter);
}
document.write runs each time all 3 conditions are true

var html = "";
// // this holds the html that will print to the page
for (var i = 1; i <= 10; i += 1) {
  html += "<div>" + i + "</div>";
}
document.write(html);
// _________________________

// Create a for loop that logs the numbers 4 to 156 to the console. To log a value to the console use the console.log( ) method.

for (var i = 4; i < 157; i++) {
  console.log(i);
}
// _______________________

// Ways to EXIT A LOOP:
// When a certain condition is no longer true
// Break keyword
// Any code that appears INSIDE the loop AFTER the break statement will NEVER run. (like the Return keyword)
// Will exit a loop even when the loop condition is still true (like even when you still haven’t guessed the correct number)

// EX from NUMBER GUESSING GAME:

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess )

// OR to break out of this infinite loop:

while (true) {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}

document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

// OR to break out of the loop after 10 tries:

while (guessCount < 10) {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}

if (correctGuess) {
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
} else {
  document.write("<h1>Sorry. You didn't guess it.</h1>");
}
// _________________________
for (var j = 0; j <= 100; j += 10) {
  console.log( j );
}

// This loop will run 11 times. Because the test condition includes the value 100 -- j <= 100 -- the loop will work for the following values of j: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.
// ______________
// ENDLESS LOOP = when the loop’s condition never evaluates to false
// DRY = DON’T REPEAT YOURSELF
// Ex if you want to use JS to add 10 photos from Flickr to a website, use a loop that repeats the code 10x.
// Functions let you place reusable code into a container, the function. You only write the code once, and then you can call the function as many times as you want.

// CODE REFACTORING CHALLENGE
var html = '';
var red;
var green;
var blue;
var rgbColor;

// //THIS CODE WAS REPEATED 10X:
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:’+ rgbColor + ‘"></div>';

// CHANGED TO:
var html = '';
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  var color = "rgb(";
  color += randomRGB() + ",";
  color += randomRGB() + ",";
  color += randomRGB() + ")";
  return color;
}

function print(message) {
  document.write(message);
}

for (var i = 0; i < 100; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);

// _________________________

// to run a loop that console.logs double #s from 2 to 24:

for (var i = 2; i <= 24; i += 2) {
  console.log(i);
}
// ________________________

// DATA STRUCTURES:
// Simple Variable holds only one value
// ARRAY is LIST of items that can hold ANY COMBINATION of data types & you don’t have to know ahead of time how many; you can add/remove as you go. Uses [].

// [] represent an ARRAY LITERAL, aka an EMPTY ARRAY

var shoppingList = [
  "carrots",
  "milk",
  "eggs"
];

// HOW TO ACCESS THE DIFFERENT ELEMENTS IN AN ARRAY:
// Use the INDEX VALUE, which starts with 0.

var shopping = [ 'carrots', 'milk', 'eggs' ];
console.log(shopping[1]); accesses:  milk

// 3 of the Most Common Ways to ADD ITEMS to an ARRAY:

// LENGTH to add to END
// PUSH to ADD to END
// UNSHIFT to ADD to BEGINNING

// LENGTH property contains the number of items in an array
// you can find out the number of items with this code:
numbers.length;
// to add the number 7 to the end of an array:
numbers[numbers.length] = 7;
// To add an item to the end of the Array, we just add it, at an index that matches the total number of items in the array.

// PUSH:
numbers.push(7);
numbers.push(7, 8, 9);
// In the console, numbers.push(6) returns the number of items in the array, 6 (if started from 1)
// numbers — gives you a PRINTOUT of the items in the array; you can just type the ARRAY NAME to get a printout

// UNSHIFT:
numbers.unshift(0);
// adds 0 to the beginning of the array
numbers.unshift(-2, -1, 0);
nums.unshift(0);
// —adds 0 to the beginning and returns the NEW number of items in the array

// 2 Ways to REMOVE ITEMS FROM AN ARRAY:

// POP (opposite of push), pops the last item off; REMOVES FROM END of array and ALSO RETURNS the last item
// SHIFT (opposite of unshift); REMOVES FROM BEGINNING of array and ALSO RETURNS the first item; returns it and removes it

// POP:
var lastItem = numbers.pop();
// nums.pop() —removes the last item and tells you how many items are in the array (before the pop)

// SHIFT:
var firstItem = numbers.shift();
noms.shift();
// ——removes the first item from the array and returns the value of the first item that was removed

// PUSH and SHIFT are often used TOGETHER to create a method for creating a queue or list of items that follow the logic of first in, first out - often called eth0.

var orderQueue = ['1XT567437','1U7857317','1I9222528'];
var shipping = orderQueue.shift();
// //this removes the first item in the queue and stores it in the variable shipping

// USING FOR LOOPS WITH ARRAYS
// any list or group of items (playlist, quiz questions, etc.)
// need to repeat same steps for each item in array
// for loop loops through, iterates, items in array
// .length makes sure it runs the correct number of times

// PRINTING OUT AN ORDERED LIST OF PLAYLIST ITEMS:
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

// //Prints out a string of content to the document (won’t work without this):
function print(message) {
  document.write(message);
}

// //Takes an array of items & prints it out as an ordered list to the page:
// //Takes an array (list) as a parameter, which is a variable that holds some value that’s passed to the function.
function printList(list) {
  var listHTML = "<ol>";
  for (var i = 0; i < list.length; i += 1) {
    listHTML += "<li>" + list[i] + "</li>";
  }
  listHTML += "</ol";
  print(listHTML);
}
printList(playList);
// //Since a function doesn't actually do anything until it's called:

// var i = 0 initializes a counter variable named i & stores 0 in it
// i < list.length is a test condition that checks to make sure that i is < total number of items in array; it will run as many times as there are items in the array
// i += 1 increases value of i by 1 each time through the loop
// _______________________________
// The challenge: "Use a for or while loop to iterate through the values in the temperatures array from the first item -- 100 -- to the last -- 10. Inside the loop, log the current array value to the console."

// The code:
var temperatures = [100,90,99,80,70,65,30,10];
for (var i = 0; i < temperatures.length; i += 1) {
  console.log(temperatures[i]);
}

// 'i' on its own will just tell you how many time the loop has run (it's iterations 0,1,2, etc). It's just the counter variable. By plugging it in (temperatures[i]) gives you the corresponding value (at that index) in the specified array.

// OTHER METHODS FOR WORKING WITH ARRAYS:
// JOIN takes an array and returns a string with all the items in the array separated by a supplied character such as a comma or a colon.
