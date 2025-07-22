//! DOM (Document Object Model)
// It is part of the browser
// It is the structure of html document
// by using DOM we can make changes on UI using JavaScript(Updating content,Deleting content,adding content)
// DON is a true like hierchical structure of html document where every html element is called as node
//!Direct access
/*
console.log(window)
console.log(document)
console.dir(document)
console.dir(document.body)*/

// ! DOM (Document Object Modal)
// console.log(window)
// console.log(document)
// console.dir(document)
// console.dir(document.all) // [HTML Collection] all the elements prsent inside document
// console.log(document.body)
// console.log(document.links)
// console.log(document.images)

// let allChilds = document.body.children;
// for(let child of allChilds){
//     console.log(child)
// }
/*
let li2 = document.body.children[2].children[0].children[1];
console.log(li2)*/

//! CRUD on html element
// !? RETRIVE
//! DOM SELECTOR method
//! 1.  document.getElementById()
//it will select the single html element with the matching id.
// // if multiple element having same id it will select the first element with matching id 
/*let p=document.getElementById('para')
console.log(p)
let listitem3=document.getElementById('l3')*/
//! 2.  document.getElementsByClassName('class')
// it will return an arraY OF HTML ELEMENT WITH THE MATCHING CLASS
// IF single element is there with the class then also it will be there in the aray

/*let demoElements= document.getElementsByClassName('demo')
console.log(demoElements)*/
/*
let demo1=document.getElementById('demo1')
console.log(demo1)
console.log(demo1[0])*/

//!3 getElementsByTagName('tag')
// it will return the array of all the element with the matching tagname

/*let allPara=document.getElementsByTagName('p')
console.log(allPara)*/
// selecting ul and moving to the children of ul
/*let ul=document.getElementsByTagName('ul')
console.log(ul[0].children[3])*/

//!4 getElementsByName('name')

/*let form=document.getElementsByName('email')
console.log(form[0])*/

//!5 Query Selector
//queryselector is an advance method where we can pass any css selector as the arument
// it will be selecting all matching element with that
// particular selector
//


//!CRUD ON HTML ELEMENTS
//? RETRIEVE
//! dom selector methods

//! 1. document.getElementById()
// it will select the single html element with the mathcing id.// if multiple elements having same id it will select the first element with matching id
// let p = document.getElementById('para')
// console.log(p)
// let listitem3 = document.getElementById('l3')
// console.log(listitem3)

//! 2. document.getElementsByClassName('class')
// It will return an array like object of html elements with the matching class
//If single element is there with the class then also it will be there in the array.
// let demoElements = document.getElementsByClassName('demo')
// console.log(demoElements)

// let demo1 = document.getElementsByClassName('demo1');
// console.log(demo1)
// console.log(demo1[0])

//! 3. getElementsByTagName('tag')
// it will return the array like object of all the elements with the mathcing tagname
// let allPara = document.getElementsByTagName('p')
// console.log(allPara)
// selecting ul and moving to the children of ul
// let ul = document.getElementsByTagName('ul')
// console.log(ul[0].children[3])
// //! getElementsByName

// let username = document.getElementsByName('user');
// console.log(username[0])

// let email = document.getElementById('email')
// console.log(email)

//! querySelector('selector')
// querySelector is an advance method where we can pass any css selector as the argument
// it will be selecting first matching element 
// it will be returning a single html element 
// let demoClass = document.querySelector('.demo')
// console.log(demoClass)
// let paraId = document.querySelector('#para')
// console.log(paraId)
// let li = document.querySelector('li');
// console.log(li)

//! querySelectorAll('selector')
// querySelectorAll is an advance method where we can pass any css selector as the argument
// it will be selecting all matching element with that perticular selector
// it will be returning an array like object with all selected elements
// let demoClass = document.querySelectorAll('.demo')
// console.log(demoClass)
// let paraId = document.querySelectorAll('#para')
// console.log(paraId)
// let li = document.querySelectorAll('li');
// console.log(li)


//! Update the HTML Elements
// let para1 = document.querySelector('#para')
// console.dir(para1)
// console.log("Inner HTML")
// console.dir(para1.innerHTML)
// console.log("Inner Text")
// console.dir(para1.innerText)
// console.log("text content")
// console.dir(para1.textContent)

// para1.innerHTML = "<b>Hello this is updated content</b>"
// para1.innerText = "<b>Hello this is updated content</b>"
// para1.textContent = "<b>Hello this is updated content</b>"


//! create
// document.createElement('tag')

/*let img = document.createElement('img');
img.src = "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg";
img.style.height = "200px"

let container = document.querySelector('#containerDiv')
container.append(img)*/

// // ! createElement //append() // prepend() // appendChild()
// // let h1 = document.createElement('h1')
// // h1.innerText = "Hello i am created using dom";
// // let body = document.body;
// // body.append("Hey hii how are you")
// // body.append("Bye Bye")
// // body.prepend(h1) // add as first child 
// // body.append(h1) // add as last child
// // body.appendChild(h1)





//! CreateElement // Append()// prepend() // appendChild()
let h1=document.createElement('h1')
h1.innerText= "DOM (Document object modal)";
let body=document.body;
body.appendChild(h1)

// ! ================CRUD ON HTML ATTRIBUTES====================
// let div = document.querySelector('div');
//? create
//! setAttribute('attrname' , 'attrValue')
// div.setAttribute('id' , 'demo')

//? read
//! getAttribute('attributeName')
// let section = document.querySelector('section')
// let attr = section.getAttribute('class')
// console.log(attr)
// console.log(section.getAttribute('id'))

//! update
//! setAttribute('attrname' , 'attrvalue')
// let ar = document.querySelector('article');
// ar.setAttribute('id' , 'a2')

//! removeAttribute('attrName')
// div.removeAttribute('title')


// ! ============ CRUD ON STYLE ATTRIBUTE / INLINE CSS =================
let div = document.querySelector('div');
//! Create //! Update
// !1. setProperty('property-name' , 'value')
div.style.setProperty('height' , '200px')
div.style.setProperty('width' , '300px')
div.style.setProperty('background-color' , 'red')

// !2. element.style.propertyName = "value"
div.style.border = "5px solid black"
div.style.borderRadius = "20px"

//!3. cssText = "value"
div.style.cssText = "background-color:green; height:100px";
div.style.cssText += "width:100px";

//! read
//!getPropertyValue('property-name')
console.log(div.style.getPropertyValue('background-color'))

//! delete
//! removeProperty('property-name')
div.style.removeProperty('width')


