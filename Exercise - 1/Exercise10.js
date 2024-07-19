// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.




function findCommonArry(arr1 , arr2){
    let commonELementArr = [];
    for (let i = 0 ; i < arr1.length ; i++)
    {
         if (arr2.includes(arr1[i]) )
         {
            if(!commonELementArr.includes(arr2[i])){
                commonELementArr.push(arr1[i])
            }
         }
    }
    return commonELementArr;

}
    arr1  = [1 , 2 ,3 , 5 , 9];
    arr2 =  [1 , 4 , 6, 8 , 10];
    console.log(findCommonArry(arr1 , arr2));
















// function findCommonElements(arr1,arr2)
// {
//     let commonElements = [];
//     for(let i = 0; i < arr1.length; i++)
//     {
//         if(arr2.includes(arr1[i]))
//         {
//             if(!commonElements.includes(arr2[i]))
//             {
//                 commonElements.push(arr1[i]);
//             }
//         }
//     }
//     return commonElements;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// const commonElements = findCommonElements(arr1, arr2);
// console.log(commonElements); 