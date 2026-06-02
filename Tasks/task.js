let dark_mode=document.getElementById("dark");
dark_mode.addEventListener("click",()=>{
    let body=document.querySelector("body");
    body.style.backgroundColor="black";
    body.style.color="white";
})

let lite_mode=document.getElementById("light");
lite_mode.addEventListener("click",()=>{
    let body=document.querySelector("body");
    body.style.backgroundColor="white";
    body.style.color="black";
})

let blue_mode=document.getElementById("blue");
blue_mode.addEventListener("click",()=>{
    let body=document.querySelector("body");
    body.style.backgroundColor="blue";
    body.style.color="black";
})