const myArray = [1, 2]; // array decleration
myArray[9] = 10 // put 10 at position 9 (adds empty items)
myArray[10] = "end of the array" // multitype
delete myArray[1] // note element becomes undefined ie not removed, boolean retrun

const [x, y] = [1, 2]; // x = 1, y = 2

myArray.length // mutable
// pop(), shift() remove and return last and first element respectively
// push(item), unshift(item) add item to last and first spot respectively, retrun new length
myArray.concat(["second to last, last"]) // retruns new array
const longerArray = [...myArray, ...["second to last, last"]]; // ... seperates array
myArray.join(' separator ') // retruns string vertion
myArray.slice(0, 10) // new array elements spesified by start, end (non-destructive)
myArray.splice(3, 3, "new element") // replaces elements in original usig start, number to be removed
myArray.reverse()
myArray.sort() // by Alphebetical order!
myArray.indexOf("end of the array")
myArray.includes("end of the array", 2) // is the element included staring from index

const mySet = new Set([7, 7, 7, 7, 7, 8, 8, 8, 9, 9]); // {7, 8, 9} (if string each letter added seperately)
mySet.add("item"); // also multitype
mySet.length();
mySet.has("item");
mySet.delete("item");
mySet.clear();

const newArray = [...mySet]; // or Array.from(Set)
// WeakSet can be garbage colected

const romanNumerals = new Map();
romanNumerals.set(1, 'I'); // add key value pair
// .get(key), .has(key)

// can use: condition ? (//code to run if condition is true) : (//code to run if condition is false)
switch (number) {
    case 4:
        console.log('You rolled a four');
        break;
    case 5:
        console.log('You rolled a five');
        break;
    case 6:
        console.log('You rolled a six');
        break;
    default:
        console.log('You rolled a number less than four');
        break;
}

let bottles = 11;
while (--bottles) { // can increment
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}

// for (initialization ; condition ; after) { do something }

for (const value of myArray) {
    console.log(value);
}