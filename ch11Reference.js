function sayHello(greeting = 'Hello') {
    return `${ greeting }, my name is ${ this.name }`;
}
sayHello.call(clark, 'How do you do'); // How do you do, my name is Clark
sayHello.call(bruce); // Hello, my name is Bruce

function square(x) {
    return x * x;
}
square.length // num of paramiters
square.call(null, 4) // null as not object
square.apply(null, [4])

square.description = 'Squares a number that is provided as an argument' // adding propertys

function square(x) { // store then look up values if they have already been called
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}

(() => { // used so temp is gone after it is used
    const temp = a;
    a = b;
    b = temp;
})();
// emediatly invoke using ();
// a block can aslo be used

(function () { // to place all code in strict mode
    'use strict';
    // All your code would go inside this function
})();

function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}
party(); // Wow this is amazing!
party(); // Been there, got the T-Shirt
party(); // Been there, got the T-Shirt

function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

const beachParty = party; // note that the party function has not been invoked

beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly - Wow this is amazing!
party(); // Been there, got the T-Shirt
beachParty(); // but this function hasn't been redefined - Wow this is amazing!'
beachParty(); // no matter how many times this is called it will remain the same - Wow this is amazing!
// louses properties

function ride() {
    if (window.unicorn) { // if required methods exist
        ride = function () {
            // some code that uses the brand new and sparkly unicorn methods
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function () {
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}

function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');
// This tape will self-destruct in five seconds ... 
// Hmmm, should I accept this mission or not ... ? 
// BOOOOM!

const promise = new Promise((resolve, reject) => { // create promise
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

const promise2 = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n): reject(n);
    }, n * 1000);
});

promise2.then(result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`));
// fufillment function, rejected function
promise.catch(result => console.log(`Drat! ... I rolled a ${result}`)); // other option for fail
promise.then(result => console.log(`I rolled a ${result}`)).catch(result => console.log(`Drat! ... I rolled a ${result}`)); // or

async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id);
        // load the game using the returned info
    } catch (error) {
        throw error;
    }
}

function outer() {
    const outside = 'Outside!';

    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}

outer()
// Outside!
// Inside!
// Outside!