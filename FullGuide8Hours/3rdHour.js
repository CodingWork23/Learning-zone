// Number guess game

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;


document.getElementById('submitButton').onclick = function() {

    let guess = document.getElementById('guessField').value
    guesses+=1;

    if(guess == answer) {
        alert(`${answer} is the #. It took you ${guesses} guesses.`)
    }
    else if(guess < answer) {
        alert('Too small!');
    }
    else {
        alert(' too large!');
    }

}







// Temperatur umwandler

const celsius = document.getElementById('cButton');
const fahrenheit = document.getElementById('fButton');


document.getElementById('subButton').onclick = function() {
    let temp;

if (celsius.checked) {
    temp = document.getElementById('textBox').value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById('tempLabel').innerHTML = temp + '°C';
}
else if (fahrenheit.checked) {
    temp = document.getElementById('textBox').value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById('tempLabel').innerHTML = temp + '°F';
}
else {
    alert('Select a temperature!');
}
}


function toCelsius(temp) {
    return Math.floor((temp - 32) * (5/9));
}

function toFahrenheit(temp) {
    return Math.floor(temp * 9 / 5 + 32);
}








// array
/*
let fruits = ['apple', 'orange', 'banana'];

// fruits[0] = 'coconut';      // Element ausgetauscht

fruits.push('lemon');       // fügt ein Element hinzu (am Ende)
fruits.pop();               // entfernt ein Element (am Ende)
fruits.unshift('mango');    // fügt ein Element hinzu (am Anfang)
fruits.shift();             // entfernt ein Element (am Anfang)

let lenght = fruits.length; // gibt die Anzahl der Elemente an
let index = fruits.indexOf('apple') // sucht wo das Element ist

// console.log(index);
*/

/*
let prices = [5, 10, 15, 20];


for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
    
}


for(let i of prices) {
    console.log(i);
}
*/









// array strings sortieren

/*
let fruits = ['banana', 'apple', 'kiwi', 'mango'];

// fruits = fruits.sort();              // nach Alphabet sortieren
fruits = fruits.sort().reverse();       // nach Alphabet sortieren (umgekehrt)

for (let fruit of fruits) {
    console.log(fruit);
}
*/








// 2D array

let fruits =        ['mango', 'banana', 'kiwi', 'orange'];
let vegetables =    ['carrot', 'peaper', 'salad'];
let meats =         ['cow', 'sheap', 'pic', 'rabit'];

let nahrungsListe = [fruits, vegetables, meats];

nahrungsListe[0][0] = 'apple'

for(let nahrung of nahrungsListe) {
    for(let eat of nahrung) {
        // console.log(eat);
    }
}











// ...
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(...numbers); // die ganzen Elemente im Array nennen
console.log(maximum);
*/










// rest parameters

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, e));

function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    }
    return total;
}

//function sum(x, y, ...numbers)  ist auch möglich











// callback

summe(2, 3, displayConsole);

function summe(x, y, callback) {
    let result = x + y;
    callback(result);
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById('myLabel').innerHTML = output;
}










// array.forEach() --> ruft jedes Element von einem Array auf
/*
let students = ['vowa', 'andree', 'sergej', 'victor'];
students.forEach(capitalalize);
students.forEach(print);

function capitalalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element)
}
*/







console.log(' ');

// array.map() --> ruft jeden Element von einem Array auf und erzeugt einen neuen Array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

function print(element) {
console.log(element);
}

console.log(...squares);










console.log(' ');

// array.filter() --> erzeugt ein neues Array mit den Elementen die dem Bedingungen zustimmen

let ages = [18, 16, 17, 21, 80];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
    return element >= 18;
}

function print(element) {
    console.log(element);
}











// array.reduce() --> setzt ein Array zu einem einzigen Wert (funktioniert wie forEach())

let prices  = [12, 21, 30, 8, 50];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element) {
    return total + element;
}









console.log(' ');


// Zahlen sortieren im Array

let grades = [100, 50, 45, 75, 25, 67];

grades = grades.sort(descendingSort);

console.log(grades);

function descendingSort(x, y) {
    return x - y
}











console.log(' ');

// function(unbenannt)

const greeting = function() {
    console.log('Hello');
}

greeting();












console.log(' ');

// arrow function

/*
 const greet = (username) => console.log(`Hello ${username}`)

 greet('gandon');
 */

 const percent = (x, y) =>  x / y * 100;

 console.log(`${percent(75, 100)}%`);












 // im Array die Elemente vermischen

 let cards = ['A', '6', '7', 'K', 'Q'];

 shuffle(cards);

 console.log(...cards);

 function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
 }