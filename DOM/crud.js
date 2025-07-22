

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
// let img = document.createElement('img');
// img.src = "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2992,h_1683,c_limit/DSC_5903.jpg";
// img.style.height = "200px"
// let container = document.querySelector('#containerDiv')
// container.append(img)

// ! createElement //append() // prepend() // appendChild()
// let h1 = document.createElement('h1')
// h1.innerText = "Hello i am created using dom";
// let body = document.body;
// body.append("Hey hii how are you")
// body.append("Bye Bye")
// body.prepend(h1) // add as first child 
// body.append(h1) // add as last child
// body.appendChild(h1)

/*
// let body = document.body;
let indian_players = [
    "Rohit Sharma", 
    "Shubman Gill", 
    "Ishan Kishan", 
    "Virat Kohli", 
    "Shreyas Iyer", 
    "Suryakumar Yadav", 
    "Rishabh Pant", 
    "Hardik Pandya", 
    "Ravindra Jadeja", 
    "Ravichandran Ashwin", 
    "Jasprit Bumrah", 
    "Mohammed Shami", 
    "Mohammed Siraj", 
    "Kuldeep Yadav", 
    "Yuzvendra Chahal", 
    "Bhuvneshwar Kumar", 
    "Shardul Thakur", 
    "Axar Patel", 
    "Deepak Chahar", 
    "Arshdeep Singh", 
    "Harshal Patel", 
    "Umran Malik", 
    "Prasidh Krishna"
]
// body.innerHTML += "<b>Rohit Sharma </b>"
// body.innerHTML += "<b>Hardik Pandya </b>"
// body.innerHTML += "<b>Bumrah </b>"
let body = document.body;
let ul = document.createElement('ul')
ul.type = "none"
body.appendChild(ul);
indian_players.forEach((el , i)=>{
    let li = document.createElement('li');
    li.innerText = el;
    ul.appendChild(li)
    body.style.display = "flex"
    body.style.alignItems = "center"
    body.style.justifyContent = "center"
    body.style.flexDirection = "column"
    li.style.width = "200px"
    if(i%2===0){
        li.style.backgroundColor = "red";
        li.style.padding = "10px 20px";
    }
    else{
        li.style.backgroundColor = "yellow";
        li.style.padding = "10px 20px";
    }
})




const indianPlayers = [
    {
      name: "Virat Kohli",
      age: 35,
      iplTeam: "Royal Challengers Bangalore",
      isMarried: true
    },
    {
      name: "Rohit Sharma",
      age: 36,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "MS Dhoni",
      age: 42,
      iplTeam: "Chennai Super Kings",
      isMarried: true
    },
    {
      name: "Hardik Pandya",
      age: 29,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "KL Rahul",
      age: 31,
      iplTeam: "Lucknow Super Giants",
      isMarried: false
    },
    {
      name: "Shubman Gill",
      age: 24,
      iplTeam: "Gujarat Titans",
      isMarried: false
    },
    {
      name: "Jasprit Bumrah",
      age: 29,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "Rishabh Pant",
      age: 26,
      iplTeam: "Delhi Capitals",
      isMarried: false
    },
    {
      name: "Suryakumar Yadav",
      age: 33,
      iplTeam: "Mumbai Indians",
      isMarried: true
    },
    {
      name: "Shikhar Dhawan",
      age: 38,
      iplTeam: "Punjab Kings",
      isMarried: true
    },
    {
        name: "David Warner",
        age: 37,
        iplTeam: "Delhi Capitals",
        isMarried: true
      },
      
      {
        name: "Steve Smith",
        age: 34,
        iplTeam: "Rajasthan Royals",
        isMarried: true
      },
      
      {
        name: "Glenn Maxwell",
        age: 35,
        iplTeam: "Royal Challengers Bangalore",
        isMarried: true
      },
      
      {
        name: "Pat Cummins",
        age: 30,
        iplTeam: "Kolkata Knight Riders",
        isMarried: true
      },
      
      {
        name: "Mitchell Starc",
        age: 33,
        iplTeam: "Royal Challengers Bangalore",
        isMarried: true
      }
      
  ];
  


  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink"
  ];
  
  
  let table = document.createElement('table')
//   table.style.borderSpacing = "10px"
  table.style.borderCollapse = "collapse"
 
  body.appendChild(table)
  table.style.border = "1px solid black"
  let headertr = document.createElement('tr');
  table.appendChild(headertr)

  let nameth = document.createElement('th')
  nameth.innerText = 'Name'
  let ageth = document.createElement('th')
  ageth.innerText = 'Age'
  let iplteam = document.createElement('th')
  iplteam.innerText = 'IPL Team'
  let isMarried = document.createElement('th')
  isMarried.innerText = 'Married'
  headertr.append(nameth)
  headertr.append(ageth)
  headertr.append(iplteam)
  headertr.append(isMarried)

  indianPlayers.forEach((el , i)=>{
    let tr = document.createElement('tr')
    tr.style.backgroundColor = colors[i%colors.length]
    let details = Object.values(el)
    details.forEach((d)=>{
        let td = document.createElement('td')
        td.style.border = "1px solid black";
         td.style.padding = "10px 20px"
        td.innerText = d;
        tr.appendChild(td)
    })
    table.appendChild(tr)
  })


  //! RAINBOW
  //
  let rainbow = ["violet" , "indigo" , "blue" , "green" , "yellow" , "orange" , "red"]
  let str = "rainbow";
  let arrRainbow = str.split("");
  console.log(arrRainbow)
  let h1 = document.createElement('h1')
  h1.style.fontSize = "50px"
  body.appendChild(h1)
  arrRainbow.forEach((el , i)=>{
    let span = document.createElement('span')
    span.innerText = el.toUpperCase();
    span.style.color = rainbow[i%rainbow.length]
    h1.appendChild(span)
  })




  const imageUrls = [
    "https://www.w3schools.com/w3images/fjords.jpg",
    "https://www.w3schools.com/w3images/lights.jpg",
    "https://www.w3schools.com/w3images/mountains.jpg",
    "https://www.w3schools.com/w3images/forest.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/snow.jpg",
    "https://www.w3schools.com/w3images/rock.jpg",
    "https://www.w3schools.com/w3images/bridge.jpg"
  
  ];
  

  let container = document.createElement('section')
  body.appendChild(container);
  container.style.display = "flex";
  container.style.gap = "20px";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  imageUrls.forEach((el , i)=>{
    let img = document.createElement('img')
    img.src = el;
    img.alt = `img${i}`;
    img.style.height = "200px"
    img.style.width = "200px"
    container.appendChild(img)
  })

  //*/
// ! delete
  //! parent.replaceChild()
/*
  let body=document.body;
  let h2=document.querySelector('#heading2')
  console.log(h2)
  let para=document.createElement('p')
  para.innerHTML='Hey i am Paragraph'

  // body.replaceChild(newElementNode,prevElementNode)
  body.replaceChild(para,h2)
*/
//! removeElement
//let body=document.body;
//let h3=document.querySelectorAll('h3')
//body.removeChild(h3[0])

//remove()
//! elementNode.remove()
/*
let h1=document.querySelector('h1')
h1.remove()*/

/*
//! create
let div=document.querySelector('div')
div.setAttribute('id','demo')
// ! read 
let section  =document.querySelector('section')
let attr= section.getAttribute('class')
console.log(attr)
console.log(section.getAttribute('id'))

//!update
//! setAttribute ('Attrname', 'attravalue')
let ar = document.querySelector('article')
ar.setAttribute('id','a2')

// ! removeAttribute('attrName)
div.removeAttribute('title')
*/
 let div=document.querySelector('div')
// !1. setProperty('Property-name','value')
div.style.setProperty('height','200px')
div.style.setProperty('width','200px')
div.style.setProperty('background-color','red')

//!2. element.style.propertyName="value" 
div.style.border="5px solid black"
div.style.borderRadius="20px"

//!3. cssText ="Value"
div.style.cssText= "background-color:green";
div.style.cssText+= "width:100px";

//! read
//! getPropertyValue('property-name')
console.log(div.style.getPropertyPriorityValue('background-color'))

//! delete
//! removeProperty('property-name')
div.style.removeProperty('width')

