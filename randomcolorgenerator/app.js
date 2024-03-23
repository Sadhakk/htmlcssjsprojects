// function sadhak(){
//     return ("hello world")
// }

// function hello(func){
//     let m=func
//     console.log(m)
// }
// hello(sadhak())

// let greet=()=>{
//     console.log("hell man")
// }

// greet()

// let sadhak1=(setInterval(() => {
//     console.log("hello world 2")
// }, 2000));

// setInterval(()=>{
//     console.log("hello world 3")
// },2000)

// setTimeout(() => {
//     clearInterval(sadhak1)
// }, 3000);

// let post={
//     name:"sadhak",
//     rollno:"20121A1247",
//     likes:24,
//     comments:"beautiful",
//     tags:['sadhak','sadhak_smart',"saaaaaaaad"]
// }
// post.user="hello";

// for (let key in post) {
//     console.log(`${post[key]} and key is ${key}`);
// }

// const p=document.querySelector("p");


// let h1=document.createElement("h1");

// h1.innerText="hello h1";

// p.append(h1);

// let q=document.createElement("p");

// q.innerHTML="<strong>hello world d2</strong>";

// p.appendChild(q);

// p.insertAdjacentElement(p,q);

// let btn=document.querySelector("button");

// let p=document.querySelector("p");

// let div=document.querySelector(".box");
// function changecolor(){
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);

//     p.innerText=`rgb(${r},${g},${b})`;

//     div.style.backgroundColor=`rgb(${r},${g},${b})`

    
// }


// Creating a function that returns a Promise to simulate fetching data from a remote server
// function fetchData() {


//     return new Promise((reslove,reject)=>{
//           setTimeout(()=>{
//             // let data={id:123,"name:":"sadhak"}

//             // reslove(data);

//             reject(new Error("data is not feteched"));
//           },2000)
//     })
// }

// fetchData()
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log("error detected ",err.message)
// })



// async function getData(){

//    try{
//     let data=await fetchData();
//     console.log("data Feteched successfully",data);
//    }catch(err){
//     console.log(err.message)
//    }
    
// }

// getData();
// // btn.onclick=changecolor;


// //acessing the json data;

let student= '{"name": "John", "age": 30, "isStudent": false}';

  let data=JSON.parse(student)

  console.log(data.name);


 let att= {
    "name": "John",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "gaming", "traveling"],
    "address": {
      "city": "New York",
      "zipcode": "10001"
    }
  }

  let data1=JSON.stringify(att);
  let dat2=JSON.parse(data1)
  console.log(dat2.name)
  