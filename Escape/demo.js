/*alert('Hello there') 
var name=prompt('What is your Name:')
console.log('Hello'+name+'Good Evening')
alert('Hello'+name+'Good Evening')*/

/*var name=prompt('Enter your Name');
var age=prompt('Enter your Age');
agedays=age*365.25
remainingday=(60-age)*365.25;
alert('Hello'+name+'Age'+age);
//alert("Hello"+name+"26"+agedays+"days"+remainingdays+"days No one can change including god also");
*/
/*
console.log(10<20);
console.log(20<15);
console.log(10=="10")
console.log(10===10)
console.log(10==="10")*/
/*
var x =10;
console.log(x);
var y =20;
console.log(y);

console.log(x<10 && x != 5);
console.log(y>9 || x== 10); 
console.log(!(x==y));
console.log(!(x=="10" || x=== y) && !( y!= 8 && x<=y));
console.log(!(x !==1)&& y === "20");
*/
 /*
var num=Number(prompt('Enter Any Number'));
if(num%2===0)
{
    console.log('Given Number is Even');
    alert('Given Number is Even');
}
else{
    console.log('Given Number is odd');
    alert('Given Number is odd');
}*/
/*
var age=Number(prompt("Enter your Age"))
if(age>60)
{
    alert("plz wait some time..Defenitlly you will get Best Match")
}
else if(age<18)
{
    alert("your age already crossed marriage age..No chance of getting marriage")
}
else{
    alert('Thanks for registration..you will get match details soon by email')
}*/
/*
var brand=prompt('Enter your favourate Brand:')
if(brand=="KF"){
    alert("It is Children's brand")
}
else if(brand=="KO")
{
    alert("It is too right")
}
else if(brand=="RC")
{
    alert("It is not that much kick")
}
else if(brand=="FO")
{
    alert("Buy One get One Free")
}
else{
    alert('Other brands are not recommende')
}*/
/*
var sno=4
var num=Number(prompt('Enter your guess between 1 to 9 :'))
if(num>sno)
{
    alert("It is too heigh..Guess again")
}
else if(num<sno)
{
    alert("It is too low guess again")
}
else{
    alert('You Guess Matched')
}*/
/*
var count=1
while(count<=10)
{
    console.log("Hello")
    count++
}*/
/*
var count=1
while(count<=10)
{
    console.log("count")
    count++
}*/
/*
var s="durga"
var i=0
while(i<s.length){
    console.log(s[i])
    i++
}*/
/*
var n=5
while(n<=100)
{
    if(n%3==0 && n%5==0)
    {
        console.log(n)
    }
    n++
}
*/
/*
var name=prompt("Enter your favourite Actress")
while(name!=="sunny"){
    name=prompt("Enter your favourite Actress:")
}
alert("Thanks for Confirmation as your favourite actress: Sunny")*/
/*
for (var i=0;i<10;i++)
{
    console.log("Hello");
}
*/
/*
for(var i=1;i<=10;i++)
{
    console.log(i)
}*/
/*
for(var i=0;i<=100;i++)
{
    if(i%7==0){
        console.log(i)
    }
    
}*/
/*
var word=prompt("Enter Some Word")
for(var i=0; i<=word.length;i++)
    {
        console.log(word[i])
    } 
        */
       /*
    var name=prompt("Enter your Name")
    var actor=prompt("Enter your Favourite Actor")
    var lucky=prompt("Enter your lucky Number")
    var dish=prompt("Enter your favourite Dish")
    
    var nameCondition=false
    var actorCondition=false
    var luckyCondition=false
    var dishCondition=false

    if(name[0]=="d")
    {
        nameCondition=true
    }
    if(actor[actor.length-1]=="r")
    {
        actorCondition=true
    }
    if(lucky==7)
        {
            luckyCondition=true
        }  
    if(dish.length>=6)
        {
            dishCondition=true

        }    
    alert("Hello: " +name+"\nThanks for your information")
    
    if(nameCondition && actorCondition && luckyCondition && dishCondition)
    {
        console.log("Hello Secret Agent Our Operation is:")
        console.log("We have to kill atleast 10 sleeping student in the class room b'z these are burdent to country")

    }*/

        // ! funcctions
/*
function wish(){
    console.log("Good Morning")
}     
  wish()
  wish()
  wish()
  */
 /*
  function wish(name)
  {
    console.log("Hello"+name+"Good Morning")
  }
  var name =prompt("Enter your Name")
  wish(name)
  */
 /*
function wish(name="Guest")
{
    console.log("Hello"+name+"Good Morning")
}
wish("Durga")
wish()
*/
/*
function square(num){
    return num*num;
}
var result=square(4)
console.log("The Square of 4:"+result)
console.log("The Square of 5:"+square(5))
*/
/*
function sum(num1,num2)
{
    return num1+num2;
}
var result=sum(10,20)
console.log("The sumof 10,20: " +result)
console.log("The sum of 30,50 :" +sum(30,50))
*/
/*
function capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}
console.log('sunny')
console.log('bunny')
*/
/*
function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(15))
console.log(isEven(10))
*/
/*
function factorial(num)
{
    result=1;
    for(var i=2; i<=num; i++)
        result=result*i;
    return result;
}
console.log("The factorial of 4 is : " +factorial(4))
console.log("The factorial of 5 is : " +factorial(5))
*/
/*
function snakeToKebab(str){
    var newstring=str.replace('_','-')
    return newstring;;
}
console.log(snakeToKebab('total_number'))
*/
/*
function square(n){
    return n*n;
    console.log("function Completed!!!")
}
console.log(square(4))
*/
/*
var x=10
function f1()
{
    console.log(x)
}
function f2()
{
    console.log(x)
}
f1();
f2();
*/
/*
function f1(){
    var x=10
    console.log(x)
}
f1();*/
/*
var x=10;
function f1()
{
    x=777;
    console.log(x)
}
function f2()
{
    console.log(x)
}
f1();
f2();*/
/*
var x=10
function f1()
{
    x=777;
    console.log(x)
}
function f2()
{
    console.log(x)
}
f2();
f1();*/
/*
var x=10;
function f1()
{
   var x=777;
    console.log(x)
}
function f2()
{
    console.log(x)
}
f1();
f2();*/
/*
function singAsong(){
    console.log('Rangamma...Mangamma..')
    console.log('jil..jil..jigel Rani..')
}*/
/*
function sleep_in(weekday,vacation)
{
    return !weekday|| vacation;
}
console.log("Is Employee Sleeping :"+sleep_in(true,true))
console.log("Is Employee Sleeping :"+sleep_in(true,false))
console.log("Is Employee Sleeping :"+sleep_in(false,true))
console.log("Is Employee Sleeping :"+sleep_in(false,false))
*/
/*
function monkey_trouble(asmile,bsmile){
    return (asmile && bsmile) || (!asmile && !bsmile)
}
console.log("Is person in Trouble :" +monkey_trouble(true,true))
console.log("Is person in Trouble :" +monkey_trouble(true,false))
console.log("Is person in Trouble :" +monkey_trouble(false,true))
console.log("Is person in Trouble :" +monkey_trouble(false,false))
*/
/*
function string_times(str,n)
{
    result=" ";
    var count=1
    while(count<=n){
        result=result+str;
        count++;
    }
    return result;
}
console.log(string_times("Krishan",1))
console.log(string_times("hello",4))
*/
/*
function lucky_sum(a,b,c){
    if(a==13){
        return 0;
    }
    if(b==3)
    {
        return a;
    }
    if(c==13){
        return a+b;
    }
}
console.log(lucky_sum(13,10,5))
console.log(lucky_sum(5,13,6))
console.log(lucky_sum(7,5,13))*/
/*
function caught_speeding(speed,isBirthday)
{
    if(isBirthday){
        speed=speed-5;
    }
    if(speed<=60){
        return 0;
    }
    if(speed>=61 && speed<=80){
        return 1;
    }
    else{
        return 2;
    }
}
console.log("Getting Ticket With Number: "+caught_speeding(50,false))
console.log("Getting Ticket With Number: "+caught_speeding(65,false))
console.log("Getting Ticket With Number: "+caught_speeding(65,true))
*/
/*
var friend=["durga","sunny","buuny","chinny"]
friend[4]="vinny";
console.log(friend)
friend[40]="pinny";

var friends=["durga","sunny","buuny","chinny"]
friends[1]="vinny";
console.log(friends)

var friend=["durga","sunny","buuny","chinny"]
console.log(friend[0])
console.log(friend[3])
console.log(friend[30])
*/
/*
var number=[10];
var numbers=new Array();
console.log(number)

var friends=["durga","sunny","buuny","chinny"]
console.log(friends.length)
*/
/*
var random_collection=["durga",10000,true,null]
console.log(random_collection)*/
/*
var numbers=[10,20,30,40]
numbers.push(50)
console.log(numbers)*/
/*
var numbers=[10,20,30,40]
console.log(numbers.pop())
console.log(numbers.pop())
console.log(numbers)*/
/*
var numbers=[10,20,30,40]
numbers.unshift(50)
console.log(numbers)*/
/*
var numbers=[10,20,30,40]
numbers.shift()
console.log(numbers)*/
/*
var numbers=[10,20,30,40]
console.log(numbers.indexOf(40))
console.log(numbers.indexOf(30))*/
/*
var numbers=[10,20,30,40,50,60,70,80]
var num1=numbers.slice(1,5)
console.log(num1)*/
/*
var nums=[[10,20,30],[40,50,60],[70,80,90]]
console.log(nums[0])
console.log(nums[0][0])*/
/*
var books=[]
var input=prompt("which operation you want to perform [add|list|exit]:")
while(input!="exit")
{
    if(input=="add"){
        var newBook=prompt("Enter Name of the Book")
        books.push(newBook);
    }
    else if(input=="list"){
        console.log("List Of Available Books")
        console.log(books)
    }
    else{
        console.log("Enter valid operation");
    }
    input=prompt("what operation you want to perform[add|list|exit]:")
}    
console.log("Thanks for using Our application");*/
/*
var nums=[10,20,30,40,50]
var i=0;
while(i<nums.length){
    console.log(nums[i]);
    i++;
}

var nums=[10,20,30,40,50]
for(var i=0; i<nums.length;i++)
{
    console.log(nums[i]);
}*/
/*
var colors=["red","blue","yellow"]
for(color of colors){
    console.log("****************")
    console.log(color);
    console.log("*****************")
}*/
/*
var heroines=['sunny','mallika','samantha','katrina','karena']
function printElement(element)
{
    console.log('****************')
    console.log(element);
    console.log('***************')

}
heroines.forEach(printElement)*/
/*
var heroines=['sunny','mallika','samantha','katrina','karena']
heroines.forEach(function(element){
    console.log("start element")
    console.log(element)
    console.log("End element")
})
heroines.splice(3,1)
console.log(heroines)*/
/*
var numbers=[10,20,30,40]
numbers[0]=777
console.log(numbers)*/
/*
function reverse(array){
    console.log("Element in Reverse Order:")
    for(var i=array.length-1; i>=0; i--)
    {
      console.log(array[i])
    }
}
reverse([10,20,30,40,50])
reverse(['A','B','C','D','E'])*/
/*
function identical(array){
    var first=array[0]
    for(var i=1;i<array.length;i++)
    {
        if(array[i]!=first){
            return false;
        }
    }
    return true;
}
console.log(identical([10,10,10,10]));
console.log(identical([20,30,40,89]));*/
/*
function max(array){
    var max=array[0]
    for(var i=1; i<array.length;i++)
    {
        if(array[i]>max)
        {
            max=array[i]
        }
    }
    return max;
}
console.log(max([10,20,30,40]))*/
/*
function sum(array)
{
    var sum=0;
    for(num of array)
    {
        sum+=num;
    }
    return sum;
}
console.log(sum([10,20,30,40]))*/
/*
var books=[]
var input=prompt("Which operation you want to perform [add|delete|list|exit]:")

while(input!="exit")
{
    if(input=="add")
    {
        addBook();
    }
    else if(input=="list")
    {
        listBook()
    }
    else{
        console.log("Enter valid Option");
    }
    input=prompt("What operation you want to perform [add|delete|list|exit]:")
}
console.log("Thanks for using our application");

function addBook(){
    var newBook=prompt("Enter Name of the Book:")
    books.push(newBook);
    
}
function listBooks(){
    console.log("List of Available Book")
    for(book of books){
        console.log(book);
    }
}

function deleteBook(){
    var name=prompt("Enter Book Name to delete:")
    var index=books.indexOf(name)
    if(index==-1){
        console.log("Specified book is not available");
    }
    else{
        books.splice(index,1)
          console.log("Specified Book Deleted");
    }
}*/
/*
var movie={
    name:'Bahubali',year:2016,hero:'prabhas'
};
console.log(movie)*/
/*
var nums=[{fno=100,sno=200,tno=300}]
 for(key in nums){
 console.log(key); //To print only keys
 console.log(nums[key]); //To print only values
console.log(key+":"+nums[key]); //To print both key and values
 } */
/*
var movies=[{name:'Bahubali',year:2016,hero:'prabhas'},
    {name:'sanju',year:2018,hero:'Ranveer'},
    {name:'Spiders',year:2017,hero:'Mahesh'}
]
console.log(movies[0]["hero"]);*/
/*
var number={
    fg:[10,20,30],
    sg:[40,50,60],
    tg:[70,80,90]
}
console.log(number.sg[2])
console.log(number.tg[1])*/
/*
var movie={
    name:'Bahubali',
    year:'2016',
    hero:'prabhas',
    getInfo:function(){
        console.log('Movie Name:'+this.name);
        console.log('Released Year:'+this.year);
        console.log('Hero Name:'+this.hero);
    }
};
console.log(movie.getInfo())*/
/*
function demo(){
    console.log('Demo Function')
}

var movie={
    name:'Bahubali',
    year:2016,
    hero:'Prabhas',
    getInfo:demo
};
movie.getInfo()*/
/*
function demo(){
    console.log('Demo Function:'+this.name);
}
var movie={
    name:'Bahubali',
    year:2016,
    hero:'Prabhas',
    getInfo:demo
};
movie.getInfo()*/
/*
var movie={
    name:'Bahubali',
    year:2016,
    hero:'Prabhas',
    myFunction(){
        console.log("KJDF"+a);
    }
}
var a=10;
movie.myFunction(a)*/

 var movies=[{name:'Bahubali',isWatched:'true',isHit:'true'},
   {name:'sanju',isWatched:'false',isHit:'true'},
   {name:'spider',isWatched:'true',isHit:'false'},]
 
   movies.forEach(function(movie){
    var result=""
    if(movie.isWatched=="true"){
        result=result+" I Watched "
    }
    else{
        result=result+"I have not seen "
    }
    result=result+movie.name
    if(movie.isHit=="true"){
        result=result+"and Movie is Hit!!!"
    }
    else{
        result=result+"and Movie is Flop!!!"
    }
    console.log(result)
   });

