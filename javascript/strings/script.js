/*wrapper around console.log*/
const log = function (x){
	console.log(x);
}

const string = 'The revolution will not be televised.';
console.log(string);

/* Embedding JavaScript */
const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting);

/*Join two varables with embedding */
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

/* Concatenation in context (MDN string example) */
const button = document.querySelector('button');

function greet() {
	const name = prompt('What is your name?');
	const greeting = document.querySelector('#greeting');
	greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

/* Including expressions in strings */
const song = "Fight the Youth";
const score = 9;
const highestScrore = 10;
const output = `I like the song ${song}. I gave it a score of ${
	(score / highestScrore) * 100}%.`
console.log(output);

/* Number to String */
const myNum = 123;
const myString = String(myNum);
console.log(typeof(myString));

/* String to Number */
console.log(
	`${Number(123.5)} is a ${typeof(Number("123.5"))}`
);

// string creation
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A string object");

// accessing characters
log("cat".charAt(1));
