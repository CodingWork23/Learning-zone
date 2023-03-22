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

for(let counter = 1; counter <= 10; counter+=1) {
    console.log(counter);
}