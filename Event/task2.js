let btn = document.querySelector('button')
let body = document.body;
let h1 = document.querySelector('h1')
btn.addEventListener('click' , ()=>{
    let color = randomColor()
   body.style.backgroundColor = color;
   h1.innerText = color;
})
window.addEventListener('mousemove' , ()=>{
    let color = randomColor()
       body.style.backgroundColor = color;
       h1.innerText = color;
})
function randomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r} , ${g} , ${b})`
}
