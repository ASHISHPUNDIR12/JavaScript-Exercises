// Write a program that takes a number and prints the multiplication table for that number. 
function multiplicationTable(num){
  for (let i = 1; i < 11; i++) {
   const table = num*i;
   console.log(table)
  }
}
multiplicationTable(10);
