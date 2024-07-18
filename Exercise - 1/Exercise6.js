// Write a program that takes a number and checks whether it is positive, negative, or zero

function checknumber(num){
    if(num>0){
        return console.log("positive")
    }
    else if(num===0){
        return console.log("its zero bruh")
    }
    else {
        return console.log("negative")
    }
}
  checknumber();