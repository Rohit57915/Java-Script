/*let num=parseInt(prompt("Enter the Number"))
console.log(num);
if(num%5===0 && num%3===0)
{
     console.log("Fizz Buzz Number");
}
else if(num%5===0){
    console.log("Fizz Number")
}
else if(num%3===0)
{
    console.log("buzz Number")
}
else{
    console.log("Enter the valid Number")
}*/

// Switch Statement
let day=parseInt(prompt("Enter the Num"))
switch(day)
{
case 1:{
    console.log("Sunday")
    break;
}
case 2:{
    console.log("Monday")
    break;
}
case 3:{
    console.log("Tuesday")
    break;
}
case 4:{
    console.log("Wednesday")
    break;
}
default :{
  console.log("Invalid number")
        }
}