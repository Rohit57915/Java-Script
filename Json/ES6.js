// ! ES6
// let const
//arrow function
// default Parameters
// spread and rest
// destructuring

let obj={
    name: 'parnav',
    skills:{
        fronted:{
            basic:['html','css','js'],
            advance:{
                libraries:['reactjs'],
                frameworks:{
                    level:{
                        ultimate:{
                            name:"reactjs"
                        },
                        basic:{
                            name:"angular"
                        }
                    }
                }
            }
        }
    }
}
let {skills:{fronted:{advance:{frameworks:[a]}}}} =obj;
console.log(a)
console.log(skills)