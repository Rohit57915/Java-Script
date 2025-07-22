// let a = 10;
// console.log(typeof a)
// let b = "Rohit"
// console.log(typeof b)
// let c = true;
// console.log(typeof c)
// let d = undefined;
// console.log(typeof d)
// let e = null;
// console.log(typeof e)
// let f = 1n;
// console.log(typeof f)
// let g = Symbol('id')
// console.log(typeof g)

//! Type coercion
// the implicit tyope conversion from one data type to another is know as type coercion , it is done internally by js engine .

// console.log('5' - 2); //3 --> '5' is coverted to 5 (whenever you are using any operator than + the string of number will be converted to number data type)
// console.log('60'*true); // both are converted to number data type internally 
// console.log(1<3>2)

// console.log('1234a' * true == NaN);
// console.log('1000'-'500'*20- false*'123'-10)
//  let res = '1000' - '5000' + '0' - 0;
//  console.log(typeof typeof res)

//! Explicit type coversion
// console.log(typeof NaN) // number
// let a = Number('30'); //30
// console.log(typeof a)
// let b = Number('30a'); //NaN
// console.log(typeof a) //number
// let c = Number(true);
// console.log(c); //1
// console.log('50')
// console.log(50)
//! Boolean
// let e = Boolean(1);
// console.log(e)
// let f = Boolean("akshay");
// console.log(f)
// let g = Boolean("   ");
// console.log(g)
// console.log(Boolean(false))
// console.log(Boolean(true))
// console.log(Boolean(30.45))
// console.log(Boolean(0.45))
// console.log(Boolean(1n))
// console.log(Boolean(-2))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(0))
// console.log(Boolean(""))

//! String
// let a = String(10);
// console.log(a)
// console.log(typeof a)
// let b = String(true)
// console.log(b)
// console.log(typeof b)

//! Truthy and falsy values
// whenever we use the values at the place of any condition or any boolean value than the value will be converted to true or false based on it is truthy or falsy
//? falsy values
// 0 , false , "", null , undefined , NaN
//? Truthy values --> other than falsy whatever is there is evaluated as true
// console.log(undefined+56);
// console.log(NaN+NaN+10);
// console.log(undefined+'10')
// console.log(null+12)
// console.log(Number(null))
// console.log(Number(undefined))
// console.log(null*80-'56'+765-0+'56'-0+true+""*1+1)
// console.log(Number(""))
console.log(null*10 - 54+30-30+'123456' - undefined*4)

