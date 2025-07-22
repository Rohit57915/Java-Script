// Functions
//! Types of Function
//! 1. Named Function

// the function which id declared with function keyword and have a identifier name is called function
/*function demo(){
    console.log("I am  Named Function")
}
demo();

// !2. Anonymous Function
//  a function which does not have any identifier name is called as annonymous function
// to execute annonymus function we have to store them inside a variable
let fun = function(){
    console.log("Annonymus function")
}
fun();

// !3. Function with expreesion

// Expression of storing a function inside a variable ia called a function expression

//whenever we store a function  inside a variable we cannnot call that function with the function identifier , we can 
//  only call it with the help of variable identifier 

let a=function sum(a,b){
    console.log(a+b)
}
// sum()// incaught reference error
a(10,20)*/

//! first class function 
// a function which is stored as a value inside A variable  is called as first class function  


//!4. Higher order function(HOF)
// A function which accepts  another function as arguments or it returns a functions is called as higher order function
// 
/*function fun(a,b,c)
{
    a(b,c);
}
// here the function fun is accepting sum as the argument so in this case fun is the higher order function

fun(sum,20,10)
fun(sub,20,10)
fun(mult,20,10)
fun(div,20,10)
fun(function(p1,p2){console.log(p1**p2)},40,2) // Annonymus function
//!5. callback function
// a function which is passed as the argument to another function is called as callback function
// ex-> sub,div,mult
function sum(p1,p2)    // Call Back Function
{
    console.log(p1+p2)
}
function sub(p1,p2)  // Call Back Function
{
    console.log(p1-p2)
}
function mult(p1,p2) // Call Back Function
{
    console.log(p1*p2)
}
function div(p1,p2)  // Call Back Function
{
    console.log(p1/p2)
}*/

//!6. Arrow Function
//when only one parameter we can remove parenthises.
// when we have  one line return statement we don't need curly brackets & return keyword.


/*let sum=(a+b) => console.log(a+b);

*/
/*let fun=() =>(a)=>a*a;
let res=fun();
console.log(res(4))

function add(p1=0, p2=0)
{
console.log(p1+p2)
}
add(10,20);// 30
add(10);// 10
add();// 0*/

//!7. IIFE (Immediately Invoked Function Expresstion)


//!8. Nested Function
  /* debugger;
   
function outer()
{
    console.log("I am outer function")
    function Inner()
    {
        console.log("I am Inner Function")
    }
    Inner();
}
outer();*/
/*debugger;
function Name()
{
    let ref="Akshay Sir"
    console.log(ref);
    function DOB()
    {
       let age=20;
       console.log(age);
    }
    DOB();
}
Name();*/

/*let name="Rohit Sharma";
let age=60;

console.log("Name is "+name+" Age is "+age);*/

//Area of rectangle
//Area of Triangle
//Peramiter of rectangle
//Area of Cuboid

/*function details()
{
    return `${arguments[0]}-${arguments[1]}`
}
let v=details("piyush" , 30);
console.log(v)*/

//!9 Nested Function
/*debugger;
function gp()
{
    let gpgold=10,gpland=20;
    function p()
    {
        let pgold=20,pland=30;
        function child()
        {
            let gchild=30;
            console.log(gpgold+pgold+gchild)
        }
        child()
    }
    p()
}
gp()*/
/*
debugger;
function gp()
{
    let gpgold=10,gpland=20;
   return function p()
    {
        let pgold=20,pland=30;
       return function child()
        {
            let gchild=30;
            console.log(gpgold+pgold+gchild)
        }
    
    }

}
let r1=gp()
let r2=r1()
r2()*/

// !10 Counter function
/*
function counter() //inside heap area closeer here 
{
    let count=0;
    return function counter1()
    {
        console.log(++count)
    }
}
let res=counter();
res()
res()
res()*/

//!11 Curring Function
// curring is a process of breaking function a function which is accepting more than one arguments to the
// nested function accepting one arguments. 
function sum()
{
    return function(a)
    {
        return function(b)
        {
            return function(c)
            {
                return a+b+c;
            }
        }
    }
}
let ref=sum()(10)(20)(30)
console.log(ref);
/* function sum()
 {
    return a=>b=>c=> a+b+c;
 }*/







