
let allDivs = document.querySelectorAll('.common')
console.log(allDivs)

let rainbowColors = ['violet' , 'indigo' , 'blue' , 'green' , 'yellow' , 'orange' , 'red']
allDivs.forEach((el , i)=>{
   el.addEventListener('mouseover' , function(){
    if(el.style.getPropertyValue('background-color') === 'white' || el.style.getPropertyValue('background-color') === ''){
        el.style.backgroundColor = rainbowColors[i]
   }
   else{
    el.style.backgroundColor = "aquamarine"
   }})
})








