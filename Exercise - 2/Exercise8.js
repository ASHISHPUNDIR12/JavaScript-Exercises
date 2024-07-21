// Write a function that takes an object and returns an array of all the keys in the object.

function objectkeys(obj){
    const objkey = Object.keys(obj);
    return objkey;
}

const object = {
    Name : "Ashish" , 
    DOB  : 11-11-2005,
    College : "AIT"
}
console.log(objectkeys(object));
