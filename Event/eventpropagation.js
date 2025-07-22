
        let gp = document.querySelector('.gp')
        let p = document.querySelector('.p')
        let child = document.querySelector('.child')
        gp.addEventListener('click' , ()=>{
         console.log('grandparent is clicked')
        } , true)
        p.addEventListener('click' , ()=>{
         console.log('parent is clicked')
        } , true)
        child.addEventListener('click' , ()=>{
         console.log('child is clicked')
        } , true)
