let btn=document.querySelector("button");

let p=document.querySelector("p");

let div=document.querySelector(".box");
function changecolor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);

    p.innerText=`rgb(${r},${g},${b})`;

    div.style.backgroundColor=`rgb(${r},${g},${b})`

    
}

btn.onclick=changecolor;
