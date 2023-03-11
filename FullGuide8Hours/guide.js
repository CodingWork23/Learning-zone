console.clear;

// console.log('hello world');
// window.alert('i realy love pizza!'); // kleines Fenster

let firstName = 'Bro';
let age = 21;
let student = true;

// console.log('hello', firstName);
// console.log('You are', age, 'years old');
// console.log('Enrolled:', student);

// document.getElementById('id').innerHTML = 
document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;




// HTML-Werte einfügen oder verändern


//  let username = window.prompt('What´s your name?'); // kleines Fenster mit Angabe
//  console.log(username);

let username;
// onclick = wenn geklickt
document.getElementById('myButton').onclick = function() {

    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = 'Hello ' + username + ' !'
};



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

let x = 3.99;
let y = 5;
let z = -4
let maximum;
let minimum;

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


function colculate(a, b) {
    a = Math.pow(a, 2);
    b = Math.pow(b, 2);

    let ab = a + b;
    result = Math.sqrt(ab);
    result = Math.round(result);
    
    return result;
}

console.log(colculate(5, 6));