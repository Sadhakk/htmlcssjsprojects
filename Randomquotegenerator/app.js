const newQuote=document.querySelector('#sad');
const blockquote=document.querySelector('blockquote');
const span=document.querySelector("span");
const twwet=document.querySelector(".btn-2")
let random=async () =>{

    let data = await fetch("https://api.quotable.io/quotes/random");
  

    let json=await data.json();
    console.log(json);

    blockquote.innerText=json[0]?.content;
    span.innerText=json[0]?.author;
   
   
}
function quote(){
    window.open("https://twitter.com/intent/tweet?text="+json[0]?.content,"tweet window","width=300px height=600px");
}

newQuote.addEventListener("click",random);
twwet.addEventListener("click",quote);