console.clear;

// console.log('hello world');
// window.alert('i realy love pizza!'); // kleines Fenster
/*
let firstName = 'Bro';
let age = 21;
let student = true;*/

// console.log('hello', firstName);
// console.log('You are', age, 'years old');
// console.log('Enrolled:', student);

// document.getElementById('id').innerHTML = 
/*
document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;*/









// HTML-Werte einfügen oder verändern


//  let username = window.prompt('What´s your name?'); // kleines Fenster mit Angabe
//  console.log(username);

// let username;
// onclick = wenn geklickt
/*
document.getElementById('myButton').onclick = function() {

    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = 'Hello ' + username + ' !'
};*/








// Strings in Numbers verwandeln
/*
let ageOld;
ageOld = window.prompt('How old are you?');

ageOld = Number(ageOld);
console.log(typeof ageOld); // Zeigt den Werttyp
ageOld += 1;

console.log('Happy Birthday! You are', ageOld, 'years old');
*/









// Math
/*
let x = 3.99;
let y = 5;
let z = -4
let maximum;
let minimum;*/

// x = Math.round(x);   // runden
// x = Math.floor(x);   // abrunden
// x = Math.ceil(x);    // aufrunden
// x = Math.pow(x, 2);  // hoch zwei (x²)
// x = Math.sqrt(x);    // wurzeln
// x = Math.abs(x);     // der weg zur 0
// maximum = Math.max(x, y, z);  // maximum
// minimum = Math.min(x, y, z);  // minimum
// x = Math.PI;         // pi

// console.log(x);

/*
function colculate(a, b) {
    a = Math.pow(a, 2);
    b = Math.pow(b, 2);

    let ab = a + b;
    result = Math.sqrt(ab);
    result = Math.round(result);
    
    return result;
}*/

// console.log(colculate(5, 6));







// Counter

let count = 0;

document.getElementById('decreaseBtn').onclick = function(){
    count -= 1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('resetBtn').onclick = function(){
    count = 0;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increaseBtn').onclick = function(){
    count += 1;
    document.getElementById('countLabel').innerHTML = count;
}






// random number generator

document.getElementById('rollButton').onclick = function() {
    document.getElementById('xlabel').innerHTML = Math.floor(Math.random() * 20) + 1;
    document.getElementById('ylabel').innerHTML = Math.floor(Math.random() * 20) + 1;
    document.getElementById('zlabel').innerHTML = Math.floor(Math.random() * 20) + 1;
}







// useful string properties & methods

let username = 'Bro Code';
let phonenumber = '123-456-7890'

// console.log(username.length); // wieviele Zeichen es hat
// console.log(username.charAt(0)); // welcher Buchstabe es ist
// console.log(username.indexOf('o')); // wo der Buchstabe ist
// console.log(username.lastIndexOf('o')); // wo der letzte Buchstabe ist
// username = username.trim(); // entfernt Leerzeichen vor und nach
// username = username.toUpperCase(); // setzt Buchstaben groß
// username = username.toLowerCase(); // setzt Buchstaben klein

phonenumber = phonenumber.replaceAll('-', '/'); // ersetzt Zeichen

// console.log(phonenumber);







// slice = Texte schneiden ohne den Variabel zu verändern

let fullname = 'Bro Code';
let firstname;
let lastname;

// slice() --> wählt nur bestimmte Bereiche in einem Text aus
// firstname = fullname.slice(0, 3);
// lastname = fullname.slice(4);

//indexOf('') --> sucht bestimmte Zeichen
firstname = fullname.slice(0, fullname.indexOf(' '));
lastname = fullname.slice(fullname.indexOf(' ') + 1);

// console.log(firstname);







// method chaining = Elemente abrufen nacheinander in einer Zeile Code

let userName = 'bro';

let letter = username.charAt(0).toUpperCase();
// letter = letter.toUpperCase();

console.log(letter);