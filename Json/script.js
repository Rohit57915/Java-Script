async function getdata() {
       try{
        let data =await fetch("./data.json")
        let op=await data.json();
        console.log(op)
        let JsnObj=JSON.stringify(op)
        console.log(JsnObj)
        console.log(JSON.parse(JsnObj))
       }
       catch(err){
        console.log(err)
       }
}
getdata()

// impot data from "./data.json"


//! Storage API
// LocalStorage
// SessionStorage

