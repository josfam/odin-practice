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
