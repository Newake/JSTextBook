{
    // this is a block
    const message = 'Hello!';
}

typeof 'hello' //string
typeof {
    ninja: 'turtle'
} //object
4 + 10 // 14

{
    const name = 'Alexa'; //set
    name //look at varable
    typeof name; //get type
}

{
    // declare object
    const name = {
        value: 'Alexa'
    };

    // attempt to reassign to another object
    name = {
        value: 'Siri'
    }
    // error
}

let b = 2;
{ b = 4; b; }
b // 4

const name2 = 'Alexa'; // declare and assign a variable
name2.length; // retrieve the name variable's length property
name2.length = 7; // try to change the length
name2.length; // 5
name2.lastIndexOf('a'); //4


'    Hello World     '.trim(); //Hellow World

Number.isInteger(42); // true

(5).toExponential(); // 5e+0

2.459.toPrecision(2); // 2.5

'hello' * 5; // NaN (not a number)

Number('23'); // 23

parseInt('omg',36); // 31912

~2476; // -2477 bitwise not

/* bitwise singe normal double for and, or
^ xor
number << amount , shift left
*/