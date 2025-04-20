// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
        Adds one or more elements to the end of an array and returns the new length.
    2. pop
        Removes the last element from an array and returns that element.
    3. shift
        Removes the first element from an array and returns that element.
    4. unshift
        Adds one or more elements to the beginning of an array and returns the new length.
    5. splice
        Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    6. slice
        Returns a shallow copy of a portion of an array into a new array.

*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.

Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/

// Question 1:
const grades = [55, 63, 78, 88, 75];

let sum = 0;
for (let i=0; i<grades.length; i++) {
    sum += grades[i];
}
const avg = sum / grades.length;
console.log("Average Grades = " + avg);

// Question 2:
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
const combined = arr1.concat(arr2);

// Using for loop to remove all even-indexed values
for (let i=0; i<combined.length; i += 2) {
    combined.splice(i, 1);
}
console.log(combined);