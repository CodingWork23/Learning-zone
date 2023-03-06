console.clear();

// ----- Primitive Datentypen
let name = 'junus'; // String
let age = 29; // number
let isStundet = false; // boolean

// ----- komplexe Datentypen

let contact = { // object
    firstName: 'Junus',
    lastName: ' Ergin',
    age: 30,
    isStundet: false
};


console.log(contact.firstName)

// arrays
let notebook = [
    'note1', 'note2', 'nr3'
];

// notebook.push(prompt());

console.log(notebook[3]);


let result = celsiusToFahrenheit(15);

function celsiusToFahrenheit(x) {
    return x * (9 / 5) + 32;
}

console.log(result);