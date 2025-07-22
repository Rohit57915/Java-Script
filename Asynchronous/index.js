//! promise is an Object used to handle asynchronous operation.
// As a fronted Developer we dont have to crate the promise.
/*console.log("before")
let p=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('hey i am resultend')
    },10000)
})
p.then((data)=>{
    console.log(data)
})
p.catch((err)=>{
    console.log(err)
})
console.log("after")
*/

// ! Promise

console.log("before")
// ! creating promise 
let p = new Promise((res , rej)=>{
    let random= Math.floor(Math.random()*10)
   if(random>5){
    setTimeout(()=>{
        rej('promise is rejected')
    } , 5000)
   }
   else{
    setTimeout(()=>{
        res('promise is resolved')
    } , 5000)
   }
})
console.log(p)
//----------------------------------------------------//
//! handling promise
/*p.then((data)=>{
   console.log(data)
   console.log(p)
})
p.catch((err)=>{
    console.log(err)
    console.log(p)
})
p.finally(()=>{
    console.log('i am finally executed')
})
console.log("after")*/
//---------------------------------------------------------//
/*console.log("hey")
async function demo(){
    try{
        let data= await p;
        console.log(data)
        let data2 = await p1;
        console.log(data2)
    }
    catch(err){
        console.log(err)
    }
}
demo()
console.log("bye")*/
//-----------------------------------------------------------//
console.log("hey")
async function demo(){
    try{
        console.log("Inside async function")
        let data= await p;
        console.log(data)
        console.log("end of the async function")
    }
    catch(err){
        console.log(err)
    }
}
demo()
console.log("bye")
//----------------------------------------------------------//
