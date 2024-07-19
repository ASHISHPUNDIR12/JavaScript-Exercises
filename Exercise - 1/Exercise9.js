// Write a program that takes a string and prints out the number of vowels in the string. 

function countVowels(str){
    count = 0 ;
    for (let s of str ) {
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'  ){
            count ++ ; 
        }
       
    }
    return count ;
}
console.log(countVowels("aashish"));
