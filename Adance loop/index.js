// !Adance Loops
//? for in
// for in loop will itrate through the index value
/*
let arr=[10,90,12,30,45]
for(let i in arr)
{
    console.log(i)
    console.log(arr[i])
}
// ? for of
// for of will iterate through the element of the array
console.log("for of loop STARTED")
for(let i of arr)
{
    console.log(i)
    console.log(arr[i]) // [undefined] all ready iterate the element
}
*/
//! forEach(callBackFN....)
// forEach will accept a callback function , and that callback
// function will be execuated for each and every element of the array.
// that call back function can have three parameters
// parameters 1 will iterate through the element of the array
// parameter2 will iterate through index of the array
// parameter2 will iterate through the original value

/*-
let arr=[10,90,12,30,45]
arr.forEach((el,i,p3)=>
{
 console.log("Element is " +el,"index is " +i)
 console.log(p3)
})*/
/*
//! Some (CallBackfn...)
let arr=[10,90,45,12,30]  //  if getting false element will check another element when result becomes true   

let op=arr.some((el,i)=>{
    console.log("execuated", i)
    return el%2!==0;
})
console.log(op)

//! every(CallBackfn....)
let op1=arr.every((el,i)=>{
    console.log("execuated", i) // if getting true element will check another element when result become false
    return el%2==0;
})
console.log(op1)
*/
 /*
//? example2
let arr=["",NaN,null,undefined,46,12,30]
let op=arr.every((el,i)=>{
    console.log("every", i) // if getting true element will check another element when result become false
    return el;
})
console.log(op1)
*/

//! find(callBackfn..)
/*
let fruits=["strawberry","sugarCane","mango","grapes","orange","peach","guava"]

let filteredop=fruits.find((el,ind)=>
{
    console.log("execuated for",ind+1,"times");
    return e1.charAt(0)==='s';
})
console.log(filteredop)
*/
// filter(callBackfn...)
/*
let nums=[5,10,20,65,30]
let op=nums.filter((el,i,arr)=>
{
    return el%2!==0;

})
console.log(op)*/
// Task
// create let function 
// and featch first letter only vowels


//! filter
/*/
let arr=["akshay" ,"shekhar","ujjwal","rohit","abhishek"];
let res=arr.filter((v,i)=>{
    return"aeiou".includes(v.charAt(0).toLowerCase())
})
console.log(res);
*/
// dobut
/*
let arr=["5000" ,"100000","20000","53738","762673"];
let res=arr.filter((s,i)=>{
    return"10000".includes(s.charAt(0).toLowerCase())
})
console.log(res)
*/
/*
let mixArray =[120,"hii", false, null , "virat" ,true, 130];
let res=mixArray.filter(v=>typeof v==='number')
console.log(res)

// only truthy value
console.log(mixArray.filter(v=>v))*/
/*
let sal=[30003,40000,500001,60001,70000,800001]
let res=sal.filter((v,i)=>
{
    return v%2 !==0 && console.log(v) 
})
console.log(res)*/
/*
let sal=[30003,40000,500001,60001,70000,800001]
let updateArray=sal.filter((v,i)=> i%2!==0).map((v,i)=> v+10000)
console.log(updateArray)
*/
// Task
//Increment the sal of those emp who have exact four character in there names
// If the update sal is having first digit as even then add mr.before emp name
// if the four charcter must be first letter is vowels that increment of value to 10%.
/* this code is not working 
let emp=["atual" , "pranav","amar","kamal"]
let sal=[2000,50000,30000,80000];//  using map and filter
var result=emp.filter((v,i)=>{
    if(emp[i].length===4)
        console.log(sal[i]+10000)
})
var result=emp.filter((v,i)=> sal[i].toString()[0]%2==0).map(name=> "Mr." +name)
  console.log(result);

  var result=map.filter((v,i)=>{

    if("aeiou".includes(v.charAt(0).toLowerCase()))
        sal.map(sal[i]+sal[i])
  })*/

 //! arr.reduce(callBackFn..., initialValue)
 // reduce will accept two argument--->
//?1.callBack Function
//?2. inital value of accumulator
//! 1.callBackFn canhave 4 arguments , the first argument is accmulator
// the second argument is the iterating (value)
// third will be index
//fourth will be the actual arry
//intial value is optional, if we don't pass the initial value the acc
// will take the  actual 

   /* let arr=[10,20,30,40]
    let res=arr.reduce(( acc,el ,i ,arr )=>
    {
            return acc+el;
    })
    console.log(res)*/

    /*let arr=['a','b','c','d','e']
    let output=arr.reduce((acc,v,i,ar)=>
    {
        return acc+v; // are used v+acc become result right to left
    })
    console.log(output)*/
/*
    let arr=['a','b','c','d','e']
    let output=arr.reduceRight((acc,v,i,ar)=>
    {
        return acc+v;
    })
    console.log(output)*/

    //! Array
//


// ! Creating an Array
//? By using literals
// let arr = [10 ,20 , 30];
// console.log(arr)

//? by using new Array()
// let arr2 = new Array(10 , 20 , 30);
// console.log(arr2)

//! heterogeneous Array
// we can store the elements of different data type in an array.
// let arr3 = ["Rohit" , 40 , true]
// console.log(arr3)

//! adding the elements to the array
// let nums = [];
// nums[0] = "Tea"
// nums[10] = "Coffee"
// console.log(nums)//(11) ['Tea', empty × 9, 'Coffee']

//! update the elements of the array
// nums[0] = "Filter Coffee"
// console.log(nums) //['Filter Coffee', empty × 9, 'Coffee']

//! When We use the new Array() to create an array and we pass only one value(number value) that will be taken as the size of the array
// let arr3 = new Array(5);
// console.log(arr3) //[empty × 5]
// console.log(arr3.length)
// let arr4 = new Array("5");
// console.log(arr4) //['5']
// console.log(arr4.length)

//? Properties of an Array
// length

//! Methods
//!1.push()
// add the elements at the last of an array , we can add whatever element we have to add as an argument , we can pass more than one argument also
// let arr = ["mango" , "guava" , "orange"];
// arr.push("grapes")
// console.log(arr.push("grapes" , "strawberry")) //5
// console.log(arr) //(5) ['mango', 'guava', 'orange', 'grapes', 'strawberry']
//! Note --> It updates the actual array,   it returns updated length of the array as output

//! 2. pop()
// it will remove the element from the last index of the array.
// console.log(arr.pop()) //"strawberry"
// console.log(arr) //(4) ['mango', 'guava', 'orange', 'grapes']
//! Note --> It will return the element which has been removed from the array.

//! 3.shift()
// it is used to remove the element from the 0th index of the array .
// it will return the removed element as the output
// console.log(arr.shift()); // "mango"
// console.log(arr) //(3) ['guava', 'orange', 'grapes']

//! 4.unshift()
// it is used to add the element at the 0th index of the array .
// it will return the updated length of the array
// console.log(arr.unshift('kiwi' , 'papaya')) //5
// console.log(arr)

//! slice(s.i , e.i)
// it is used to get the specific part of an array , 
// it will not modify the actual array . it will return a new array
// let res = arr.slice(1 , 4);
// console.log(res)//(3) ['papaya', 'guava', 'orange']
// console.log(arr) //(5) ['kiwi', 'papaya', 'guava', 'orange', 'grapes']

//! splice(starting index , deleteCount , newElement , newElement2....newElementN)
// splice is used to add or remove the elements from an array at a perticular index,
//It will modify tha actual array 
// let fruits = ["kiwi" , "strawberry" , "papaya" , "orange"];
// //! only removing
// console.log(fruits.splice(1,2))
// console.log(fruits) //['kiwi', 'orange']
// //! only adding
// console.log(fruits.splice(1,0,"grapes" , "mango"))
// console.log(fruits) //['kiwi', 'grapes', 'mango', 'orange']
// //! removing and adding
// fruits.splice(1,1,"guava")
// console.log(fruits) //(4) ['kiwi', 'guava', 'mango', 'orange']

//! join()
// let fruits = ["kiwi" , "strawberry" , "papaya" , "orange" , "strawberry"];
// let str = fruits
// .join("$")
// let str1 = fruits.join(" ")
// console.log(str)
// console.log(str1)

//! indexOf(element)
//first occurence index
// console.log(fruits.indexOf("grapes"))//-1 --> element is not present inside the array
// console.log(fruits.indexOf("strawberry"))

//! lastIndexOf(element)
//last occurence index
// console.log(fruits.lastIndexOf("strawberry"))

//! at(index)
// element at a perticular index
// console.log(fruits.at(3)) // "orange"
// console.log(fruits.at(7)) //undefined

//! reverse()
// it will modify the original array
// it will reverse the array
// let nums = [10 , 32 , 56 , 2 , 74]
// nums.reverse()
// console.log(nums)

//! sort()
//it will modify the actual array , we have to pass a callback function with two parameters otherwise it will be comparing the first digits of eac element,
// let arr = [31 , 45 , 1 , 2 , 3 , 67 ,10 , 21 ]
// arr.sort() //[1, 10, 2, 21, 3, 31, 45, 67]
// console.log(arr)
//! passing callback function
// arr.sort((a,b)=>a-b); // ascending
// arr.sort((a,b)=>b-a); // descending order
// console.log(arr)

//! if we have elements as string than it will be comparing the ascii value of the first character of each element.
// let fruits = ["kiwi" , "strawberry" , "papaya"  ,"Apple" , "orange" , "strawberry"];
// fruits.sort()
// console.log(fruits)


//! concat
// it is used to merge multiple arrays , it won't modify the original array
// let arr = [10 ,20 ,30]
// let arr1 = [101 ,201 ,301]
// let arr2 = [1011 ,2011 ,3011]
// let res = arr.concat(arr1 , arr2);
// console.log(res)

//! includes
// let arr = [10 ,20 ,30]
// console.log(arr.includes(20)) // true
// console.log(arr.includes(202)) // false

//! fill(value , s.i , e.i)
// let arr = new Array(10);
// console.log(arr)
// arr.fill(0  , 3 , 6) // IT WILL FILL 0 FROM INDEX 3 TO 5(E.I-1)
// console.log(arr) //[empty × 3, 0, 0, 0, empty × 4]


// !Advance Loops 
// ? for in
// for in loop will iterate through the index values
// let arr = [10 , 90 , 12 , 30 , 45];
// for(let i in arr){
//     console.log(i)
//     console.log(arr[i])
// }
//? for of
//for of will iterate through the elements of the array
// console.log("For of loop started")
// for(let i of arr){
//     console.log(i)
// }

//! forEach(callbackFn..)
//forEach will accept a callback function ,and that callback function will b executed for each and every element of the array , 
// that callback function can have three parameters
//parameter 1 will iterate through the elements of the array
// parameter2 will iterate through index of the array
// parameter 3 will represent the original array
// let arr = [10 , 90 ,45, 12 , 30];
// arr.forEach((el , i , p3)=>{
//     console.log(el , i)
//     console.log(p3)
// })

//! some(callbackFn...)
// let arr = [11,10 , 90 ,46, 12 , 30];
// let op = arr.some((el , i)=>{
//     console.log("executed" , i)
//     return el;
// })
// console.log(op)
//! every(callbackFn...)
// let op1 = arr.every((el , i)=>{
//     console.log("executed every" , i)
//     return el%2==0;
// })
// console.log(op1)

//? example2
// let arr = ["",NaN , null , undefined ,46, 12 , 30];
// let op = arr.some((el , i)=>{
//     console.log("some" , i)
//     return el;
// })
// console.log(op)
// //! every(callbackFn..)
// let op1 = arr.every((el , i)=>{
//     console.log("every" , i)
//     return el;
// })
// console.log(op1)

//!find(callbackFn...)
// let fruits = ["strawberry", "sugar","mango" , "grapes" , "orange"  , "peach"  , "guava" ]

// let filteredOp = fruits.find((el , ind)=>{
//     console.log("executed for " ,ind+1 , " times");
//     return el.charAt(0) === 's';
// })
// console.log(filteredOp)
// console.log([1,2,3,4,5,6].find((el)=>el>    w4))
// console.log([1,2,3,4,5,6].find((el)=>el<4))


//! filter(callbackFn..)
//returning the names starting with vowels
// let arr = ["akshay" , "shekhar" , "ujjwal" , "rohit" , 'abhishek']
// let res = arr.filter((v , i)=>{
//    return "aeiou".includes(v.charAt(0).toLowerCase())
// })
// console.log(res)

// let names = ["akshay" , "shekhar" , "ujjwal" , "rohit" , 'abhishek'];

//! mixedArray
// let mixedArray = [120 , 'rohit' , true , false , null , undefined , NaN , 130];
// let numberedArray = mixedArray.filter(v=>typeof v === 'number')
// let stringArray = mixedArray.filter(v=>typeof v === 'string')
// let otherElements = mixedArray.filter(v=>typeof v !== 'string' && typeof v !== 'number')
// console.log(numberedArray)
// console.log(stringArray)
// console.log(otherElements)

//! only truthy values
// console.log(mixedArray.filter(v=>v)) //(4) [120, 'rohit', true, 130]

//! ques
// let sal = [30003 , 40000 , 50001 , 60001 , 70000 , 80001];
// let res = sal.filter((v , i)=>{
//     // return i%2 !==0 && console.log(i);
//     return v%2 !==0 && console.log(v);
// })
// console.log(res)

// ! map(callbackFn.)
// let sal = [30003 , 40000 , 50001 , 60001 , 70000 , 80001];
// let updatedArray = sal.filter((v , i)=>i%2!==0).map((v , i)=> v+10000)
// console.log(updatedArray)
// let mapRes = sal.map((v,i)=>{
//     return 0;
// })
// let filterRes = sal.filter((v,i)=>{
//     return 0;
// })
// console.log(mapRes)
// console.log(filterRes)

// let names = ['atul' , 'pranav' , 'amar' , 'kamal']
// let salaries = [20000 , 50000 , 30000 , 80000];
// // !1. increment the salaries of those emp who are having 4 characters in there name
// names.forEach((el , i)=>{
//    if(names[i].length === 4){
//     salaries[i] += 10000;
//    }
// })

// names.forEach((el,i)=>[
//      console.log(`${names[i]} - ${salaries[i]}`)
// ])

// //! 3. increment the salary by 10% if the name starts with vowel
// names.forEach((el , i)=>{
//         if("aeiou".includes(names[i].charAt(0))){
//             salaries[i] *= 1.1;
//         }
// })
// names.forEach((el,i)=>[
//     console.log(`${names[i]} - ${salaries[i]}`)
// ])

// //!2. if first digit of the salary is even than add Mr. before emp name

// salaries.forEach((el , i)=>{
//       if(salaries[i].toString().charAt(0)%2 === 0){
//            names[i] = `Mr.${names[i]}`
//       }
// })
// names.forEach((el,i)=>[
//     console.log(`${names[i]} - ${salaries[i]}`)
// ])



//! arr.reduce(callbackFn.. , initialValue)
// reduce will accept two arguments -->
//?1 . callback function
//?2. initial value of accumulator
//! 1. callbackFn canhave 4 arguments , the first argument is accumulator
// the second argument is the iterating variable(values)
// third will be index
// fourth will be the actual array
// initial value is optional , if we don't pass the initial value the acc will take  the 0th index value and the iterating variable will start from the 1st index
// if you pass the initial value than accumulator will have the initial value at starting and the iterating variable will start from the 1st index
// the returned value of the callback function will become the new value of the accumulator 
// at last reduce function will return one value(whatever is present in the accumulator at last)
// let arr = [10 ,20 , 30 ,40];
// let output = arr.reduce((acc , v , i , ar)=>{
//    return acc+v;
// } , 0)
// console.log(output)
//! example 1
// let arr = [10 ,20 , 30 ,40];
// let output = arr.reduce((acc , v , i , ar)=>{
//   console.log(acc , v )
// })
// console.log(output)


// let arr = ['a' , 'b' , 'c ' , 'd' , 'e'];
// let output = arr.reduce((acc , v , i , ar)=>{
//   console.log(acc , v )
// })
// console.log(output)

//! reduce right
// let arr = ['a' , 'b' , 'c' , 'd' , 'e'];
// let output = arr.reduceRight((acc , v , i , ar)=>{
//   return acc+v;
// })
// console.log(output)

//! flat(argument)
// flat will remove the nested array and convert it to a single array without any nested array
// argument you can pass any number from 1 to infinity
// to remove 1 level of nestingue 1 and respectively 2 for 2 level of nesting
// let arr = [1 , 2, 3, 4, [5 , 6]]
// let res  = arr.flat() // removes only one level nesting without argument
// console.log(res)
// let nums = [1 ,[ 2, [3, [4, [5 , 6]]]]]
// let flattenArray = nums.flat(Infinity)
// console.log(flattenArray)

//! to identify that inside the variable array is stored or not 
// let arr = 20;
// console.log(typeof arr)
// console.log(Array.isArray(arr))

//! Array.of(argument)
// it will create the array from  a single argument also
// console.log(Array.of(10))

// //! copyWithin
// let arr = [10 , 20 , 30]
// arr.copyWithin(0 ,1 , 2)
// console.log(arr)





