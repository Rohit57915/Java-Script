
// function fun(){
//     console.log("Hey i am function fun")
// }

// let btn = document.querySelector('#one');
// btn.onclick = function(){
//     console.log("property")
// }
// btn.onclick = function(){
//     console.log("new property")
// }

let h1 = document.querySelector('#fh')
h1.onclick = function(){
   h1.innerHTML = 'Hindustan Times'
}
let btn = document.querySelector('#fb')
let body = document.body;
btn.onclick = function(){
    if(body.style.getPropertyValue('background-color') == 'black'){
        body.style.backgroundColor = "white"
        body.style.color = "black"
        btn.innerHTML = ' <i class="fa-solid fa-moon"></i>'
    }
    else{
        body.style.backgroundColor = "black"
        body.style.color = "white"
        btn.innerHTML = ' <i class="fa-solid fa-sun"></i>'

    }
}