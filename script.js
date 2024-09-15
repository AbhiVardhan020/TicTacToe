
let newgame = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
let boxes = document.querySelectorAll(".but")
let x = document.querySelector(".X");
let o = document.querySelector(".O");
let winner = document.querySelector(".winner")
let winText = document.querySelector("#winText")
let start = document.querySelector(".start")
let startButton = document.querySelector("#start")

let turnO = true;

let count=0;


let arr=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


startButton.addEventListener("click", ()=>{
    start.style.display="none";
    document.querySelector(".container").style.display="flex";
    document.querySelector(".resetCont").style.display="flex";
    document.querySelector(".home").style.marginTop="20px";
})

reset.addEventListener('click', ()=>{
    func();
})


let check = ()=>{
    for(let pos of arr){
        if(boxes[pos[0]].innerText!='' && boxes[pos[1]].innerText!='' && boxes[pos[2]].innerText!=''){
            if(boxes[pos[0]].innerText===boxes[pos[1]].innerText && boxes[pos[1]].innerText===boxes[pos[2]].innerText){
                console.log(`winner ${boxes[pos[0]].innerText}`);
                winner.style.display="flex";
                winText.innerText=`WINNER : ${boxes[pos[0]].innerText}`;
                boxes[pos[0]].style.border="7px solid #DEC69A";
                boxes[pos[1]].style.border="7px solid #DEC69A";
                boxes[pos[2]].style.border="7px solid #DEC69A";
                o.style.opacity="1";
                x.style.opacity="1";
                for(let box of boxes)   box.disabled=true
                reset.disabled=true;
                count=0;
                return; 
            }      
        }
    }
    if(count===9){
        winner.style.display="flex";
        winText.innerText="MATCH TIED";
        count=0;
        o.style.opacity="1";
        x.style.opacity="1";
        return;
    }
}

for(let box of boxes){
    box.addEventListener('click', ()=>{
        count+=1;
        if(turnO){
            box.innerText="O";
            box.style.color="#1e90ff";
            x.classList.add("Xturn");
            o.classList.remove("Oturn");
            turnO=false;
        }
        else{
            box.innerText='X';
            box.style.color="#ffff00";
            x.classList.remove("Xturn");
            o.classList.add("Oturn");
            turnO=true;
        }
        box.disabled=true;
        check();
    })
}


newgame.addEventListener("click", ()=>{
    winner.style.display="none";
    func();
    reset.disabled=false;
})

let func = ()=>{
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        turnO=true;
        for(box of boxes) box.style.border="none";
        o.classList.add("Oturn");
        x.classList.remove("Xturn");
    }
}