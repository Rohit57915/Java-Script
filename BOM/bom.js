// !BOM (Browser Object Model)
// BOM is used to interact with browser by using javascript
// BOM is the pat of the browser
// BOM is represented by window
// It consist of some object modals

// ------------------------Object Model--------------------
// console.log(window)
//! properties 
// console.log(window.location)
// console.log(window.storage)
// console.log(window.screen)
// console.log(window.history)
// console.log(window.navigator)
// console.log(window.document)

//! screen
// screen is a object modal present inside BOM(window)
// it will give the information about the viewport(screen)
// console.log(screen.width)
// console.log(screen.height)
// console.log(screen.availWidth)
// console.log(screen.availHeight)
// console.log(screen.orientation)

//! location
//? properties of location
// console.log(location)
// console.log(location.host)
// console.log(location.port)
// console.log(location.protocol)
// console.log(location.href)

//? methods of location
// location.reload() // it will reload the webpage
// location.assign("https://www.amazon.com")
// location.replace("https://www.pinterest.com") 

//! history
// console.log(history)
// console.log(history.length)
// history.forward() // move forward 1 page
// history.back() // move backward one page
// history.go(+numOfPages) --> forward with numOfPages
// history.go(-numOfPages) --> backward with numOfPages

//! Navigator
// navigator will give information about yor browser
/*
console.log(navigator.language)
console.log(navigator.language)
console.log(navigator.language)
if(navigator.online){
    alert("Connect to the Internet")
}
else{
   alert ("Not Connect to the Internet")
}

//! properties of Window
//! innerHeight,outerHeight,innerWidth,outerWidth
console.log(window.innerHeight)
console.log(window.outerHeight)
console.log(window.innerWidth)
console.log(window.outerWidth)*/

// !BOM (Browser Object Model)
// BOM is used to interact with browser by using javascript
// BOM is the pat of the browser
// BOM is represented by window
// It consist of some object modals

// console.log(window)
//! properties 
// console.log(window.location)
// console.log(location)
// console.log(window.screen)
// console.log(window.history)
// console.log(window.navigator)
// console.log(window.document)

//! screen
// screen is a object modal present inside BOM(window)
// it will give the information about the viewport(screen)
// console.log(screen.width)
// console.log(screen.height)
console.log(screen.availWidth)
console.log(screen.availHeight)
// console.log(screen.orientation)

//! location
//? properties of location
// console.log(location)
// console.log(location.host)
// console.log(location.port)
// console.log(location.protocol)
// console.log(location.href)

//? methods of location
// location.reload() // it will reload the webpage
// location.assign("https://www.amazon.com")
// location.replace("https://www.pinterest.com") 

//! history
// console.log(history)
// console.log(history.length)
// history.forward() // move forward 1 page
// history.back() // move backward one page
// history.go(+numOfPages) --> forward with numOfPages
// history.go(-numOfPages) --> backward with numOfPages

//! navigator
// navigator will give the information about your browser
// console.log(navigator.language)
// console.log(navigator.languages)
// console.log(navigator.onLine)
// if(navigator.onLine){
//     alert("Connected to the internet")
// }
// else{
//     alert("No connected")
// }

//! // innerHeight // outerHeight // innerWidth // outerWidth
// console.log(window.innerHeight)
// console.log("innerWidth" , window.innerWidth)
// console.log(window.outerHeight) // same as availHeight
// console.log("outerWidth" , window.outerWidth) // same as availWidth

//! https://codeshare.io/zlM6br


//! methods of window object(BOM)
//! prompt()
//! alert()
//! confirm()
//! open()
//! close()
// let answer = confirm("Will you marry me")
// // it will display a popup with two buttons , ok and cancel
// // if we press ok it will return true otherwise false
// if(answer){
//     console.log("Yes Why not")
// }else{
//     console.log("Who the hell are you....")
// }

//! open(url)
// open() // if we don't pass any argument it will open blank tab
// open("https://www.amazon.com")

//! close()
// close()


//! setTimeout(callbackFn... , delay)
// console.log("started")
// setTimeout(()=>{
//   console.log("I am timeout function")
// } , 10000)
// console.log("ending")

// let mytimeout = setInterval(()=>{
//   console.log("I am interval function")
// } , 1000)

// let myInterval = setInterval(()=>{
//     let date = new Date();
//     console.log(date.getSeconds())
// } , 1000)
// clearInterval(myInterval)
// clearTimeout(mytimeout)




