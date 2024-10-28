let gameseq = [];
let userseq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game Started");
        started = true;
    }

    levelup();
});

function gameflash (btn){
     btn.classList.add("flash");
     setTimeout( function (){
        btn.classList.remove("flash");
     },1000);
}
function userflash (btn){
    btn.classList.add("userflash");
    setTimeout( function (){
       btn.classList.remove("userflash");
    },1000);
}
function levelup () {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //Rendom button choose
    let randidx = Math.floor(Math.random()*4); 
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);
    // console.log(randidx);
    // console.log(randcol);
    // console.log(randbtn);
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans (idx){
    if(userseq[idx] == gameseq[idx]){
       if(userseq.length == gameseq.length){
          setTimeout(levelup , 1000)
       }
    }else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press Any Key To Start`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
    }
}
function btnpress (){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" , btnpress);
}

function reset () {
    level = 0;
    gameseq = [];
    sarted = false;
    userseq = [];
}