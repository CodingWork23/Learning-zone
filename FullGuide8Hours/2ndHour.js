// if statement
/*
let age = 21;

if(age >= 18) {
    console.log('you are an adult!');
}
else if(age < 0) {
    console.log(' you have not been born yet')
}
else{
    console.log('You are a child');
}
*/




// checkbox

document.getElementById('myButton').onclick = function() {

    const myCheckbox = document.getElementById('myCheckbox');
    const visaBtn = document.getElementById('visaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');
    

    // checked --> wenn checkbox true ist
    if(myCheckbox.checked) {
        console.log('you are subscribed');
    }
    else {
        console.log('you are not subscribed');
    }

    if(visaBtn.checked) {
        console.log('You are paying with a Visa!');
    }
    else if(mastercardBtn.checked) {
        console.log('You are paying with a Mastercard!');
    }
    else if(paypalBtn.checked) {
        console.log('You are paying with a PayPal!');
    }
    else {
        console.log('You are paying nothing')
    }
}






// switch

let grade = 'A';

switch(grade) {
    case 'A':
        console.log('You did great!');
        break;
    case 'B':
        console.log('You did good!');
        break;
    case 'C':
        console.log('You did okay!');
        break;
    case 'D':
        console.log('You passed ... barely!');
        break;
    case 'E':
        console.log('You failed!');
        break;
    case 'F':
        console.log('You failed!');
        break;
    default:
        console.log(grade, 'is not a letter grade!');
}
/* Eine andere Alternative

    switch(true) {
    case grade >= 90:
        console.log('You did great!');
        break;
    }

*/






// while loop

let userName = '';
/*
do {
    userName = window.prompt('Enter your name');
}while(userName == '' || userName == null)
console.log('Hello', userName);
*/






// for loop
/*
for(let counter = 1; counter <= 10; counter+=1) {
    console.log(counter);
}
*/

// break ;  continue

for(let i = 1; i<= 20; i+=1){
    if (i == 19) {
        break;      // unterbricht den Loop
    }
    if (i == 11 || i == 7) {
        continue;   // überspringt die Runde
    }
    console.log(i);
}








// loop in einem loop

let symbol = '$';
let rows = 5;
let colums = 10;

for (let i = 1; i <= rows; i+=1) {
    for (let j = 1; j <= colums; j+=1) {
        document.getElementById('myRectangle').innerHTML += symbol;
        
    }
    document.getElementById('myRectangle').innerHTML += '<br>';
}







// condition ? exprIfTrue : exprFalse

let adult = checkAge(21);
console.log(adult);

function checkAge(age) {

    return age >= 18 ? true : false;
}







// andere Alternative für Strings mit Variabeln

let username = 'Bro';
let items = 3;
let total = 75;

// console.log('Hello', username);
// console.log('You have', items, 'items in your card');
// console.log('Your total is $', total);

// console.log(`Hello ${username}`);
// console.log(`You have ${items} items in your card`);
// console.log(`Your total is $${total}`);

let text =
`Hello ${username}
You have ${items} items in your card
Your total is $${total}`;

console.log(text);










// Zahlen Eigenschaften

let myNum = 123456.789;

// myNum = myNum.toLocaleString('en-US'); // US Englisch
// myNum = myNum.toLocaleString('hi-IN'); // Hindi
// myNum = myNum.toLocaleString('de-DE'); // Deutsch

// {style: 'currency', currency: 'Währung'} --> nationale Währung eingeben
// myNum = myNum.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});

// myNum = myNum.toLocaleString(undefined, {style: 'percent'}); //Prozent%

myNum = myNum.toLocaleString(undefined, {style: 'unit', unit: 'celsius'});


console.log(myNum);