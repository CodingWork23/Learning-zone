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


let prices = [5, 10, 15, 20];

/*
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
    
}
*/

for(let i of prices) {
    console.log(i);
}










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