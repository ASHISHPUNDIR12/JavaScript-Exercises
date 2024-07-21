// Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

function BiggerString(str){
    let newArray = [];
    for(let word of str ){
        if(word.length > 5 ){
            newArray.push(word);
        }
    }
    return newArray;
}
    const StringArray = ["aashish " , "seenu" , "sanu" , "om"]
    console.log(BiggerString(StringArray));
