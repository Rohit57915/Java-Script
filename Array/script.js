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
//let arr = ["mango" , "guava" , "orange"];
// arr.push("grapes")
//console.log(arr.push("grapes" , "strawberry")) //5
//console.log(arr) //(5) ['mango', 'guava', 'orange', 'grapes', 'strawberry']
//! Note --> It updates the actual array,   it returns updated length of the array as output

//! 2. pop()
// it will remove the element from the last index of the array.
//console.log(arr.pop()) //"strawberry"
//console.log(arr) //(4) ['mango', 'guava', 'orange', 'grapes']
//! Note --> It will return the element which has been removed from the array.

//! 3.shift()
// it is used to remove the element from the 0th index of the array .
// it will return the removed element as the output
//console.log(arr.shift()); // "mango"
//console.log(arr) //(3) ['guava', 'orange', 'grapes']

//! 4.unshift()
// it is used to add the element at the 0th index of the array .
// it will return the updated length of the array
// console.log(arr.unshift('kiwi' , 'papaya')) //5
// console.log(arr)

//!5 slice(s.i , e.i)
// it is used to get the specific part of an array , 
// it will not modify the actual array . it will return a new array
// let res = arr.slice(1 , 4);
// console.log(res)//(3) ['papaya', 'guava', 'orange']
// console.log(arr) //(5) ['kiwi', 'papaya', 'guava', 'orange', 'grapes']

//!6 splice(starting index , deleteCount , newElement , newElement2....newElementN)
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

// !toString()
//! join()
let fruits=["kiwi","strawberry","papaya","orange"];
let str= fruits.join(" $ ")
let str1= fruits.join(" ")
console.log(str)
console.log(str1)

//! indexOf(element)
// first occurence
console.log(fruits.indexOf("grapes")) //Element is not present inside the 
//!lastIndexOf(element)
//last occurence
console.log(fruits.indexOf("strawberry"))
//! at()
// element at a particular index
console.log(fruits.at(3))
console.log(fruits.at(7))

//! reverse
let num =[10,32,56,2,35]
num.reverse()
console.log(num)

//! sort
let arr1=[10,21,31,67,45,34] // ascending order 

arr1.sort()
console.log(arr1)
//! passing callback fumction
let arr=[31,45,1,2,3,67,10,21] //descending order
arr.sort((a,b)=>b-a);
console.log(arr)

//! if we have element as String than it will comparing the ascii value
//of the first character of each element.
let fruit =["kiwi","strawberry","papaya","orange","strawberry"]
fruit.sort()
console.log(fruit)

//! concat
let arr2=[10,20,30]
let arr3=[101,201,301]
let arr4=[1022,2011,3011]
let res=arr.concat(arr3,arr4)
console.log(res)

//! includes
let arr5=[10,20,30]
console.log(arr5.includes(20))

//! fill()
let arr6=new Array(10);
console.log(arr6)
arr6.fill(0,3,6) // It will fill 0 from index 3 to 5(ending index one)
console.log(arr6) // [empty × 3, 0, 0, 0, empty × 4]

