// Write a program that displays a string in reverse order.

function reverseString(str){
    const reverseString = str.split("").reverse().join();
    return reverseString;
}
console.log(reverseString("ashish"));