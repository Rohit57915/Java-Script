let body=document.body;
for(let i=1; i<=100; i++)
{
    let btn= document.createElement('button')
    btn.innerText='btn-${i}'
    btn.addEventListener('click',()=>{
        btn.style.backgroundColor=randomColor()
        btn.style.color=randamColour()
    })=
    body.appendChild(btn)
}
function randomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
     return 'rgb(${r},${b})'
}