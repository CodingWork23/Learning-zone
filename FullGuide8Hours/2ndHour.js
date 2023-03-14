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
    // checked --> wenn checkbox true ist
    if(document.getElementById('myCheckbox').checked) {
        console.log('you are subscribed');
    }
    else {
        console.log('you are not subscribed');
    }

}