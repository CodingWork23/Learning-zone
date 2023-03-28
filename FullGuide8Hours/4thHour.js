
// nasted function

let userName = 'Bro';
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox() {
        console.log(`You have ${userInbox} new massages`);
    }
}











console.log(' ');

// Map --> ein Array, nur das die Elemente einen Wert haben.

const store = new Map([
    ['t-shirt', 20],
    ['cap', 5],
    ['socks', 15],
    ['jeans', 45],
]);

// let shoppingCart = 0;

// shoppingCart += store.get('jeans'); // den Element auswählen
// store.set('hat', 35);   // ein Element einfügen
// store.delete('cap');    // ein Element löschen
// console.log(store.has('cap'));  // überprüfen ob es ihn gibt
console.log(store.size);    // überprüft wie viel Elemente es sind

store.forEach((value, key) => console.log(`${key} $${value}`));











console.log(' ');

// object --> ein Object kann Variablen und functionen enthalten

const car = {
    model:'Mustang',
    color:'red',
    year:2023,

    drive : function() {
        console.log('You drive a car');
    },
    brake : function() {
        console.log('You step on the brakes');
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

// car.drive();












console.log(' ');

// this

const car1 = {
    model:'Mustang',
    color:'red',
    year:2023,

    drive : function() {
        console.log(`You drive a ${this.model}`);
        // console.log(`You drive a ${model}`); <-- funktioniert nicht in einem object
    }
}

car1.drive();












console.log(' ');

// class

class Player{
    score = 0;

    pause() {
        console.log('You paused the game');
    }
    exit() {
        console.log('You exited the game');
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();












console.log(' ');

// constructor --> man kann neue Werte in class eingeben

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student('Sergej', 17, 2.8);

console.log(student1.name);











console.log(' ');

// static

class Car{

    static numberOfCars = 0;// static --> eine Variable für den class selber, nicht für 'new Car'

    constructor(model){     // aktiviert, wenn 'new Car' entsteht
        this.model = model;
        Car.numberOfCars += 1; // die eigentliche class einsetzen, wenn es für static gedacht ist, und nicht 'this'!
    }

    static startRace() {
        console.log('3...2...1...GO!');
    }
}

const carNr1 = new Car('Audi');
const carNr2 = new Car('BMW');
const carNr3 = new Car('Mustang');

console.log(Car.numberOfCars);

Car.startRace();