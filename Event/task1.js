
let inp = document.querySelector('input');
let body = document.body;
inp.addEventListener('change' , ()=>{
    body.style.backgroundColor = inp.value || "yellow"
})