let form=document.querySelector('form')
let username=document.querySelector('#user')
let pass=document.querySelector('#pass')
let email=document.querySelector('#email')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log({
        name: username.value ,
        pass: pass.value,
        email: email.value
    })
})