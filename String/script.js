/*let str1='Rohit';
let str2='Virat';
let str3='Dhoni';

console.log(str1)
console.log(str2)
console.log(str3)*/

//! by using new keyword
// let str ="JavaScript"
// console.log(str.length);

//! Inbuilt string Method
// str[0]='K';cannot be initilized
// console.log(str);

//! Method:toLowercase
// let str ="JavaScript";
// str.tpLowerCase();
//console.log(str.toLowerCase());
//console.log(str.toUpperCase());

//!  trimStart And trimEnd()
// let name ="Rohit";
// console.log(name.trimStart());
//console.log(name.trimEnd());
//console.log(name.trim());

// ! replace
// replace();
// le"programming";
// console.log(str1.replace('pro' ,''));

//! replaceAll
// replaceAll();
//let str2="Rohit";
// console.log(str2.replaceAll('h', 'o'))

/*let name=promt("Enter Username");
console.log(name.toUpperCase());
console.log(name.replace('R', 'T'))
console.log(name.replace(toUpperCaseRohit("oh","it")));
*/
/*
let str='raghav'
console.log(str.replace('r','R'))

let name=prompt("Enter Name")
console.log(str.replaceAll('r','R'))
*/
// ! charAt
let str='JavaScript';
console.log(str.charAt(3))

//! slice()
console.log(str.slice(0,4))
console.log(str.slice(-4,-1))

// !substr()
console.log(str.substring(0,4))

//substring()
console.log(str.substring(0,4))

// substr()
//str.substr(s.i,length)
console.log(str.substr(1,5))

//! str.split()

console.log(str.split(""))
let str1="I Love JavaScript"
console.log(str1.split("J"))
let str2="Java Script"
console.log(str2.split("a"))
console.log(str2.slice("4"))

//! indexOf()
let str3="I Love Java"
// will return first Occurance
console.log(str3.indexOf('I'))
console.log(str3.indexOf('')) 
console.log(str3.lastIndexOf('a'))

// ! concatination
let a='Mango'
let b='Fruit'
let c='juice'
console.log(a," ",b," ",c)

//! includes

console.log(a.includes('a'))
console.log(a.includes('y'))

//!  charCodeAt(index)
console.log(a.charCodeAt(1))

//fromCharCode(ascii value)
// it will return the character for a particular ascii value
console.log(String.fromCharCode(65))

//let rev=name.split(" ")
//console.log(name[1].charAt(0).concat(" ",rev[2],charAt(0)," ",rev[1]));

//! charCodeAt(index)
console.log(a.charCodeAt(1))

let name= "Rohit Kumar Yadav"
let narr=name.split(" ");
console.log(name[2].charAt(0).concat(" ",narr[1].charAt(0)," ", narr[0]));

