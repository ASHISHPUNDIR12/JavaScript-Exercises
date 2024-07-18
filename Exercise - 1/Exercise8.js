// Write a program that takes a number and calculates the sum of all numbers from 1 to that number. 

function ThatNum(num){
    let Summ = 0;
    for(let i = 1 ; i<num ; i++ )
    {
     Summ = Summ + i ;
    }
    return Summ
}

console.log(ThatNum(10));
