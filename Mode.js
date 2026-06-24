let btn=document.querySelector("#toggle")
let head=document.querySelector("#head")
let main=document.querySelector("body")
let curr="light mode"

btn.addEventListener("click",()=>{
    if(curr==="light mode"){
        curr="dark mode"
        main.style.backgroundColor="Black"
        head.style.color="White"
        toggle.innerText="Dark"
   
    }
    else{
        curr="light mode"
        main.style.backgroundColor="White"
        head.style.color="Black"
        toggle.innerText="Light"
    }
    })