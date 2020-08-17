const arr1 = [2, 3, 53, 33, 3];
const arr2 = [23, 32, 5, 53, 12];
const arr3 = ["sujon", "abir", "shibbir"]

const newArray = arr1.concat(arr2).concat(arr3); // array concat method;

console.log(arr1.lastIndexOf(3)); // indexOf method use for found element in array;
console.log(Array.isArray(arr3));

arr3.unshift("Hera", "Hossain");

console.log(arr3)

arr3.push("3", "something");
console.log(arr3)