//console.log("ways to create an object")
//! 1.literal way({})
//!2. New Object();
/*
let obj=new Object();
obj.time="12:53";
obj.updation=true
console.log(obj)

//!class 
class Students
{
    constructor(name,phy,che,math,bio)
    {
        this.name=name;
        this.phy=phy;
        this.che=che;
        this.math=math;
        this.bio=bio;
        this.grade="";
    }
}
   
 // ! performance will be stored in the prototype object
 performance()
    {
       let avgMarks=(this.phy+this.che+this.math+this.bio)/4;
       this.grade =grade(avgMarks)
   }
 // details also will be stored  inside the prototype object
    details()
    {
        this.performance()
        {
            console.log('${this.name}-${this.grade}')
        }
    }
    function grade(avgMarks)
    {
        if(avgMarks>=90){
            return "grade A"
        }
        else if(avgMarks>=80){
            return "grade B"
        }
        else if(avgMarks>=70){
            return "grade c"
        }
        else{
           return "grade D" 
        }
    }
    let s1=new Students("Akshay",80,90,70,84);
    console.log(s1)
    s1.details()

// ! 

class fruits{
    constructor(fname,fprice){
        this.frame=frame;
        this.fprice=fprice;
    }
    printFirst(){
        console.log('${this.fname}-${this.fprice}');
    }
}
let f1=new fruits("mango",120)
console.log("Ways to create an object")
//! 1. literal way ({}) most common
//! 2. new Object();

let obj = new Object();
obj.time = "12:52"
obj.updation = true
console.log(obj)

// ! class
//! Easy example
class Fruits{
    constructor(fname , fprice){
        this.fname = fname;
        this.fprice = fprice;
    }
    printFruit(){
        console.log(${this.fname} - ${this.fprice})
    }
}  
// ! Instantiation --> creating the instance of the class
let f1 = new Fruits("mango" , 120);*/
//! steps -->
//!1. when we ue this keyword it will allocate some space in the heap area (create an empty object)
//! 2. this keyword will point to that object
//! 3. all the properties will be assigned to the object with values
//! 4. Prototype reference will be attached with the object
//!5. the object reference will be stored in the reference variable(f1)


// class Student{
//     constructor(name , phy , che , math , bio){
//         this.name = name;
//         this.phy = phy;
//         this.che = che;
//         this.math = math;
//         this.bio = bio;
//         this.grade = "";
//     }
//     //! performance will be stored in the prototype object 
//      performance(){
//      let avgmarks = (this.phy+this.che+this.bio+this.math)/4;
//      this.grade = grade(avgmarks)
//     }
//     //details also will be stored inside the prototype object
//     details(){
//         this.performance()
//         console.log(${this.name} - ${this.grade})
//     }
// }

// function grade(avgMarks){
//     if(avgMarks>=90){
//         return "grade A"
//     }
//     else if(avgMarks>=80){
//         return "grade B"
//     }
//     else if(avgMarks>=70){
//         return "grade C"
//     }
//     else{
//         return "grade D"
//     }
// }

// let s1 = new Student("Akshay" , 80 , 90 , 70 , 83);
// let s2 = new Student("Atul" , 90 , 90 , 80 , 83);
// let s3 = new Student("Pranav" , 80 , 94 , 76 , 63);
// console.log(s1)
// s1.details()
// console.log(s2)
// console.log(s3)

//! Task
//! create a class for shapes
//! calcArea
//! calcCircumfrance
//! calcPerimeter
//! overallCalc --> circle --> all 3 , rectanle --> perimeter , area  , square --> area , perimeter , triangle --> area , perimeter
/*
class Shapes{

    constructor(calcArea,calcCircumference,calcperimeter)
    {
        this.calcArea=calcArea;
        this.calcCircumference=calcCircumference;
        this.calcperimeter=calcperimeter;
        
    }
    circle(){
        return Math.PI * this.calcArea * this.calcArea;
        return this.calcCircumference();
        return 2 * Math.PI * this.calcperimeter;
    }
    rectangle(){
        return this.length * this.width;
        return 2 * (this.length + this.width);
    }
    OverallCalc()
    {
        return {
        Area: this.circle(),
        Circumference: this.circle(),
        };
        
    }
    OverallCalc()
    {
        return{
            Area: this.rectangle(),
            perimeter: this.rectangle
        }
    }
    square(){
        
    }
    triangle(){
       
    }
}
let c1=new Shapes(6);
console.log("Circle: " , c1.OverallCalc());
*/
// Base Shape class
/*
class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }

    calculatePerimeter() {
        throw new Error("Method 'calculatePerimeter()' must be implemented.");
    }

    calculateCircumference() {
        throw new Error("Method 'calculateCircumference()' is applicable for circular shapes.");
    }
}

// Circle class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }

    overallCalc() {
        return {
            Area: this.calculateArea(),
            Circumference: this.calculateCircumference()
        };
    }
}

// Rectangle class
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }

    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }

    overallCalc() {
        return {
            Area: this.calculateArea(),
            Perimeter: this.calculatePerimeter()
        };
    }
}

// Square class (inherits from Rectangle)
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    overallCalc() {
        return {
            Area: this.calculateArea(),
            Perimeter: this.calculatePerimeter()
        };
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(side1, side2, side3, base, height) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    overallCalc() {
        return {
            Area: this.calculateArea(),
            Perimeter: this.calculatePerimeter()
        };
    }
}

// Example usage
const circle = new Circle(5);
console.log("Circle:", circle.overallCalc());

const rectangle = new Rectangle(10, 5);
console.log("Rectangle:", rectangle.overallCalc());

const square = new Square(4);
console.log("Square:", square.overallCalc());

const triangle = new Triangle(3, 4, 5, 3, 4);
console.log("Triangle:", triangle.overallCalc());

---------------------------------------------------------------------------------
// class Student{
//     constructor(name , phy , che , math , bio){
//         this.name = name;
//         this.phy = phy;
//         this.che = che;
//         this.math = math;
//         this.bio = bio;
//         this.grade = "";
//     }
//     //! performance will be stored in the prototype object 
//      performance(){
//      let avgmarks = (this.phy+this.che+this.bio+this.math)/4;
//      this.grade = grade(avgmarks)
//     }
//     //details also will be stored inside the prototype object
//     details(){
//         this.performance()
//         console.log(`${this.name} - ${this.grade}`)
//     }
// }

// function grade(avgMarks){
//     if(avgMarks>=90){
//         return "grade A"
//     }
//     else if(avgMarks>=80){
//         return "grade B"
//     }
//     else if(avgMarks>=70){
//         return "grade C"
//     }
//     else{
//         return "grade D"
//     }
// }

// let s1 = new Student("Akshay" , 80 , 90 , 70 , 83);
// let s2 = new Student("Atul" , 90 , 90 , 80 , 83);
// let s3 = new Student("Pranav" , 80 , 94 , 76 , 63);
// console.log(s1)
// s1.details()
// console.log(s2)
// console.log(s3)

----------------------------------------------------------------------------

//  ! constructor Function
// function Student(name , age){
//   this.name = name;
//   this.age = age;
// }
//! adding the properties and methods to the prototype object
// Student.prototype.isMarried = true;
// Student.prototype.printDetails = function(){
//     console.log(`${this.name} - ${this.age}`)
// };
// console.log(Student.prototype)
// let s1 = new Student("Akshay" , 90)
// console.log(s1)

//! Object.create()
// you can pass another object as the argument anbd it will add all the properties of that argument object to the prototype
// let per = {
//     age:40,
//     team:"Mi"
// }
// let obj = Object.create(per)
// console.log(obj)

//! methods
let st = {
    rollno:7,
    grade:"A",
    age:15
}
let st1 = {
  address:"Delhi"
}
let st2 = {
    isMarried:false
}
//! Object
// Object.keys(refVariable)
//! it will return all the keys of an object stored in an array 
// console.log(Object.keys(st))
// Object.keys(refVariable)
//! it will return all the values of an object stored in an array 
// console.log(Object.values(st))


//! Object.entries(st)
// it will return an array which will contain nested arrays at each index representing key and value both
// console.log(Object.entries(st))

//! Object.assign
//    let op =  Object.assign({}  , st , st1 , st2)
//    console.log(op)

   //! Object.freeze(refVariable)
   // it will freeze the object so after that you will not be able to add the properties to the object
   //You won't be able to modify
   //You won't be able to delete
   //! Object.isFrozen(refVariable) is used to check if an object is freezed or not
//    Object.freeze(st)
//    st.qualification = "BTech"
//    st.grade = "D"
//    delete st.age;
//    console.log(st)
//    console.log(Object.isFrozen(st))


//  Object.seal(st)
 //! we cannot add new properties , but we can modify the existing properties , and we cannot delete existing properties
//  st.age = 90;
//  st.prop = "one"
//  delete st.grade;
//  console.log(st)
//  //! Object.isSealed(refvariable) used to check if an object is sealed or not
//  console.log(Object.isSealed(st))


//! refvariable.hasOwnproperty('propertyname')
// It is used to check if some property is present inside the object or not
// it will return boolean value
// console.log(st.hasOwnProperty('school'))

-------------------------------------------------------------

console.log(Math)
//! Properties
// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.SQRT2)

//! Methods
//! abs()
//converting negative values to +ve
// console.log(Math.abs(-90))

//! floor()
// rounding off the number to nearest lowest integer
// console.log(Math.floor(16.9))
// console.log(Math.floor(16.3))

//! ceil()
// rounding off the number to nearest highest integer
// console.log(Math.ceil(16.9)) // 17
// console.log(Math.ceil(16.1)) //17

//! round()
// rounding off the number to nearest integer
// console.log(Math.round(16.1))//16
// console.log(Math.round(16.5))//17
// console.log(Math.round(16.9))//17

//! trunc
// it will remove the floating point values
// console.log(Math.trunc(16.7)) // 16
// console.log(Math.trunc(16.1) )// 16

//! Math.random()
// it is used to generate the random numbers from 0 to 1
//! formula
//! (Math.random()*(highets-lowest))+lowest
// let randomValue = Math.floor(Math.random()*10);
// console.log(randomValue);

// function getOtp(){  
// let otp = Math.floor(Math.random()*8999)+1000;
// return `Your OTP is ${otp}`;
// }
// console.log(getOtp())

//! Date Object
// let date = new Date();
// console.log(date.getFullYear()) // 2025
// console.log(date.getMonth()) // 2 (0 to 11)
// console.log(date.getDate()) // 17
// console.log(date.getDay()) // 1  (0 to 6)
// console.log(date.getHours()) // 1  
// console.log(date.getMinutes()) // 54  
// console.log(date.getSeconds()) // 54  
// console.log(date.getMilliseconds()) 

// let purchasedate =new Date();
//  purchasedate.setFullYear(2020)
//  purchasedate.setMonth(8)
//  purchasedate.setDate(15)
//  purchasedate.setHours(13)
//  purchasedate.setMinutes(30)
//  console.log(purchasedate)


//! Call Apply, Bind
// used to change the reference of this keyword
function details(place){
    console.log(`${this.pname} - ${this.page} - ${place}`)
}
let p1 = {
    pname:"rohit",
    page:40
}
let p2 = {
    pname:"virat",
    page:30
}
// details.call(p1 , 'Delhi')
// details.apply(p1 , ['Mumbai'])
let fun = details.bind(p2)
fun("Mumbai")
fun("Delhi")
fun("Kolkata")

//! Assignment --> Guessing Game , OTP Mathcing
//! Assignment --> convert the 24 hours format into 12 hours by using
//  some logics and also display the time like 02:05 AM/PM.
*/
 
/*-------TASK--------------------- */
/*function OtpMatching(){
    let otp= Math.floor(Math.random()*8999)+1000;
    alert(`Your OTP is ${otp}`);
     var user=parseInt(prompt("Enetr any number"));
    
      if(user==otp){
            return (otp+ " Current OTP Matching " + user+ " User given Otp")
        }
        else {
            return (otp+ " Current OTP Not Matching " + user+ " User given Otp")
        }
    
}
alert(OtpMatching());*/

function OtpMatching(){
    let otp= Math.floor(Math.random()*8999)+1000;
    alert(`Your OTP is ${otp}`);
     var userInput=parseInt(prompt("Enetr any number"));
     let correctOtp=false
    while(!correctOtp){
      if(otp===userInput){
            console.log('COngratualation login succeccfull')
            correctOtp=true
            break;
        }
        else {
            console.log('please enter the correct otp')
            userInput=parseInt("Enter correct otp")
        }
    }
}
alert(OtpMatching());