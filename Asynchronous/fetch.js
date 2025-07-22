/*let data=fetch('https://fakestoreapi.com/products');
data.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
}).then((err)=>{
    console.log(err)
})
console.log(data);*/

/*fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));*/

  let data=fetch('https://fakestoreapi.com/products');// website Name is fake Store Api 
  async  function getData(){
    let res=await data;
    let alldata= await res.json();
    mydata(alldata)
    console.log(alldata)
  }
  getData()
   let body=document.body;
  function mydata(a){
     a.forEach(el => {
        let card =document.createElement('div')
        let img=document.createElement('img')
        let h3=document.createElement('h3')
        h3.innerText=el.title.slice(0,11)
        img.src=el.image;
        card.appendChild(img)
        card.appendChild(h3)
        body.appendChild(card)
     });
  }
  mydata