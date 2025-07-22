
let box = document.querySelector('.box')
window.addEventListener('keypress' , (e)=>{
    console.log("hey")
   if(e.key.toLowerCase() === "w"){
    console.log('i am w')
    console.log(box.style)
     box.style.top = parseInt(box.style.getPropertyValue('top')) + 10 +'px' ;
     console.log(box.style.getPropertyValue('top'))
   }
})
// let btn = document.querySelector('button')
// btn.addEventListener('click'  , (e)=>{
//     console.log(e)
// })
// let inp = document.querySelector('input')
// inp.addEventListener('keypress' , (e)=>{
//     console.log(' i am keypress ')
//     console.log(e)
//     if(e.key.toLowerCase() === 'a'){
//         // console.log("Amitabh Bachchan")
//         inp.value="Amitabh Bachchan"
//     }
// })