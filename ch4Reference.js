[1, 2, 3].map(func) // creates new array with output of function
[1, 2, 3, 4, 5].reduce((acc, val) => acc + val, startVal); // used when you need the output of previous run and current value in the array
[2, 7, 6, 5, 11, 23, 12].filter(x => x % 2 === 0); // adds element if function returns true

function mean(array, callback) {
    if (callback) {
        array.map(callback); // first edits array baced on function
    }
    const total = array.reduce((a, b) => a + b);
    return total / array.length;
}