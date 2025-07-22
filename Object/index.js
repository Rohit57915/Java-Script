// ! Objects
// Object is the programmtic representation of a real world entity
// Object is the combination of multiple key and value pairs(properties)
// key  and value pair are seperated by colon(:)
// multiple properties are seperated by comma(,)

//! Rules to create
/*
let marker ={
    color:"Black",
    isMarried:true,
    7 :"Dhoni", // only number as a key is also possible
    // 7a: "Bike Ride ", // not possible to start with a number
    // length*h
    //     "length*h": 10, // cannot include special characters other than $ and _
    "length*h": 10, 
    //1marker :"hey"// can't start with a number
    "1marker":"hey", // if you wan't to start with a number or want to use some other special characters we must have to pass the key in double quotes("1ke%y")
    isMarried : false // if we have same key for more than once , it will take the updated one
}
// ! Accessing the properties of an object
// we have two ways to access the property of aN OBJECT

//!1. DOT NOTATION
let person={
    name: "Rohit",
    age : 37,
    team: "MI"
}
console.log(person.name);
console.log(person.age);
console.log(person.team);
//!2. BRACKET 
console.log(person["name"]);
console.log(person["age"]);
console.log(person["team"]);

//! where we should be useing brackets notation
// console.log(marker["7"])
console.log(marker["7"])// whereever you have the key which is not follwing the rules of identifiers we must use bracket notation 
console.log(marker["length*h"]) 

let uInput= prompt("Please enter the input as age", "name or team")
console.log(uInput)
console.log(person.uInput)// undefined ,it is trying to find the key as uInput inside the person Object
console.log(person[uInput]) // it will evaluate the value of the uInput Variable

// ! Updating / Modifying the object
let player ={
    name : "Rohit",
    age : 37,
    team :"MI" ,
    true : false, // inside the object you can have keyword a the key
    if :"yes"
}
//! Adding a property to the player object
player.titles=5
console.log(player)
player["isMarried"]=true; 
console.log(player)

// ! Update of properties
player.name="Kl Rahual"
console.log(player)
player["age"]=47;
console.log(player)

//! Deleting the property from an object
delete player.name;
delete player["age"];
console.log(player)

// ! Method --> function inside an object is known as method

let player ={
    name : "Rohit",
    age :37,
    team :"MI",
    // ! !st way to declare a method
    isPlaying : function(){
        console.log("yes still playing for india")
    } ,
    //! 2nd way to declare a method
    isPlaying2(){
        console.log("Playing for Mumbai Indians")
    }
}
player.isPlaying()
player.isPlaying2()*/
/*
let emp=[{name:"Sunil",sal :3000},{name:"arun",sal:40000},{name:"Rohit",sal:4600},{name:"atual",sal:23000}]
let output=emp.map((el,i)=>{
    
   if("aeiou".includes(el.name.charAt(0))){
      return {...el,sal:el.sal+2000}
    }
    return el;
})
console.log(output)
console.log(emp)

let filteroutput=emp.filter((el,i)=>{
    return el.name.length>4
})
console.log(filteroutput)
*/

// let students=[{roll no:7, grades: B,class: 9,contribution:100},
// {roll:6,grades:c,class:10,contribution:500},{roll no:5,grades: B,
// class:9,contribution:10},{roll:8,grades:c,class:8,contribution:200},
// {{roll:16,grades:A,class:10,contribution:150}}]
 // used filter--------------------------
// 1. filtter even roll number student's
// 2. filter based on class(8,9,10);
// 3. filter based on the grades (A,B,C); 
// use reduse---------------------
// 1. Calculate the total contribute
// used map---------------------------
// 1. Upadate the grade by 1 level(B-> A);
/*
let studentsRoll=[{roll:7,roll:6,roll:5,roll:8,roll:16}];
let rollres=studentsRoll.filter((rn,i)=>{
     
    return rn.roll.length>3
    
})
console.log(rollres)*/
/*
let students = [
    { rollno: 7, grade: 'B', class: 3, contri: 100 },
    { rollno: 8, grade: 'D', class: 9, contri: 200 },
    { rollno: 9, grade: 'A', class: 10, contri: 600 },
    { rollno: 5, grade: 'E', class: 5, contri: 60 }
];
// 1. Filter even roll number students
let evenRollNo = students.filter(student => student.rollno % 2 === 0);
console.log(evenRollNo)
// 2. Filter students from classes 8, 9, and 10
let studentClasses = students.filter(student => [8, 9, 10].includes(student.class));
console.log(studentClasses)
// 3. Filter students with grades A, B, C (case insensitive)
let filteredGrades = students.filter(student => ['A', 'B', 'C'].includes(student.grade.toUpperCase()));
console.log(filteredGrades)
// 4. Reduce: Calculate total contribution
let totalContri = students.reduce((sum, student) => sum + student.contri, 0);
console.log(totalContri)
*/
/*
let emp = [
    {
        name:'sunil',
        sal:32000
    },
    {
        name:'arun',
        sal:42000
    },
    {
        name:'vikash',
        sal:36000
    },
    {
        name:'atul',
        sal:30000
    }
]
// updating the salaries by 2000 for those employees whose names starts with a vowel
// let res = emp.map((el)=>{
//     if("aeiou".includes(el.name.charAt(0))){
//         return {...el , sal:el.sal+2000}
//     }
//     return el;
// })
// console.log(res)
// console.log(emp)

//! filter those emp who are having more than 4 characters in there name

// emp.filter((el)=>{
//     return el.name.length>4; b                  
// })            
*/


//! Assignment question on Array of objects

// let students = [
//     {
//         rollno:7,
//         grade:'B',
//         class:9,
//         contri:100
//     },
//     {
//         rollno:6,
//         grade:'C',
//         class:8,
//         contri:500
//     },
//     {
//         rollno:5,
//         grade:'B',
//         class:9,
//         contri:10
//     },
//     {
//         rollno:8,
//         grade:'C',
//         class:8,
//         contri:200
//     },
//     {
//         rollno:16,
//         grade:'A',
//         class:10,
//         contri:100
//     },
// ]

// function filterByClass(arr , clas){
//     return arr.filter((el)=>el.class === clas)
// }
// let filterclass8 = filterByClass(students , 8)
// console.log(filterclass8)
// let filterclass9 = filterByClass(students , 9)
// console.log(filterclass9)
// let filterclass10 = filterByClass(students , 10)
// console.log(filterclass10)

// function filterEvenRollno(arr){
//     return arr.filter((el)=>el.rollno%2 === 0)
// }
// let evenRollNumbers = filterEvenRollno(students);
// console.log(evenRollNumbers)

// function filterbyGrade(arr , grade){
//     return arr.filter((el)=>el.grade.toLowerCase() === grade.toLowerCase())
// }
// let filterAGrade = filterbyGrade(students , 'A')
// console.log(filterAGrade)
// let filterBGrade = filterbyGrade(students , 'B')
// console.log(filterBGrade)
// let filterCGrade = filterbyGrade(students , 'C')
// console.log(filterCGrade)

//! totalContri

// let totalContri = students.reduce((acc , el)=>{
//       return acc+el.contri;
// } , 0)
// console.log(totalContri)

//! upgrade the grades by 1
// let updatedGrades = {
//     'A':'A++',
//     'B':"A",
//     'C':"B"
// }
// let updatedGradesArray = students.map((el)=>{
//     return {...el , grade:updatedGrades[el.grade]};
// })
// console.log(updatedGradesArray)


//! methods --> function inside the object 
/*let player = {
    pname : 'Ronaldo',
    nationality :"Portugese",
    achievements:"Five",
    details(){
        console.log(`Player is ${player.pname}`)
    },
    details1: function(){
        console.log("Ronaldo is a Football Player")
    }
}
player.details()
player.details1()

*/



// console.log("This Keyword file")
//! this 
//! this keyword if used globally  points to global object window
//! if we ue this keyword inside a function that will point to the parent object (window)
// console.log(this)
// console.log(window)
// function fun(){
//     console.log(this)
// }
// fun()
//! this inside a method will point to the parent object -->(obj in this example)
// let obj = {
//     pname:"Virat" , 
//     team:"RCB",
//     details:function(){
//         console.log(`the name is ${this.pname} - ${this.team} `)
//     }
// }
// console.log(obj)
// obj.details()

//! this inside the method as arrow function
//! arrow function doesn't have this keyword of its own so it will borrow this keyword from its parent ()
// let obj = {
//     v:this, // here this is pointing to the window
//     pname:"Virat" , 
//     team:"RCB",
//     details:()=>{
//         console.log(this)
//         // console.log(`the name is ${this.pname} - ${this.team} `)
//     },
//     details1:function(){
//         console.log(this) // here this is pointing to obj
//         // console.log(`the name is ${this.pname} - ${this.team} `)
//     }
// }
// obj.details()
// obj.details1()



// ! Assignment
//! five students objects
//! In each object details method must be there 
//! Properties ---->
//! chemistry marks
//! physics marks
//! maths marks
//! biology marks
//! create seperate methods for each student as performance()
// performance will calculate the average marks and based on that utilize the grade(averageMarks) function from window object.
// grade function will return the grades based on average marks
//! avgMarks ->90 ---> A grade
//! avgMarks ->80 ---> B grade
//! avgMarks ->70 ---> C grade

//! one property is there in each object called as grade , 
//! from performance function you must assign the grade to the gradeproperty
//! printdetails method is there that will print name and grade of the student
/*
let students1 ={
            chem : 60,
            phy : 55,
            math :60,
            bio :70,
             
            details1:function()
            {
                console.log(` student details is ${this.chem} - ${this.phy}-${this.math}-${this.bio} `);
            }
        }
        console.log(students1)
        students1.details1()
     
      
 let students2={
            chem : 65,
            phy : 75,
            math :40,
            bio :80,
            details2:function(){
                console.log(` student details is ${this.chem} - ${this.phy}-${this.math}-${this.bio} `);
            }
         }
         console.log(students2)
         students2.details2()
let students3={
            chem : 40,
            phy : 75,
            math :80,
            bio :40,
            details3:function(){
                console.log(` student details is ${this.chem} - ${this.phy}-${this.math}-${this.bio} `);
            }
         }
         console.log(students3)
         students3.details3()
let student4={
            chem : 80,
            phy : 85,
            math :90,
            bio :75,
            details4:function(){
                console.log(` student details is ${this.chem} - ${this.phy}-${this.math}-${this.bio} `);
            }
         }
         console.log(student4)
         student4.details4()
let student5={
            chem : 87,
            phy : 45,
            math :68,
            bio :78,
            details5:function(){
                console.log(` student details is ${this.chem} - ${this.phy}-${this.math}-${this.bio} `);
            }
         }
         console.log(student5)
         student5.details5()
*/
    



