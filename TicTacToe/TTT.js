let boxes= document.querySelectorAll(".box")
let btn= document.querySelector(".res")
let end=document.querySelector("#finale")


let turnO= true

const winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turnO){
        box.innerText= "O"
            turnO= false
    }else{
        box.innerText= "X"
            turnO= true
    }
    box.disabled = true
    check()
   })
})

const check=()=>{
    for(let win of winner){
        let val1=boxes[win[0]].innerText;
        let val2=boxes[win[1]].innerText;
        let val3=boxes[win[2]].innerText;

    if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 && val2=== val3){
        console.log("winner")
        end.style.display = "block";
        end.innerText = "Congratulations! Winner is " + val1;
        endnow()
        }
    }
    }
    
}

const endnow=()=>{
    for(let box of boxes){
        box.disabled=true
}}

btn.addEventListener("click",()=>{
    resetgame()
})

const resetgame=()=>{
    turnO= true
    enablegame()
}

const enablegame=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
        end.style.display = "none";
}}

