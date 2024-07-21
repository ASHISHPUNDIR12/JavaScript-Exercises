// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


function sumOfArray(arr){
    let sum =  0;
    for(let number of arr){
        sum +=number ; 
    }
    return sum ; 
}
const array = [1 ,2  , 2]
console.log(sumOfArray(array));
