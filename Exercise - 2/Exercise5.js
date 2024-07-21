// Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.


function sumEvenNumbers(arr){
    let sum  = 0;
    for(let s of arr){
        if(s % 2 == 0)
            {
                sum = sum + s
            }
            else {
                sum = sum + 0;
            }
    }
    return sum;
}
 let arrry = [1 ,3 ,2 ,4]
console.log(sumEvenNumbers(arrry))