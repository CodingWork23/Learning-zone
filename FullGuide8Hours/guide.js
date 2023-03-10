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