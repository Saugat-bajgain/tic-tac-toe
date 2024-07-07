let bx=document.querySelectorAll(".box");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let rebtn=document.querySelector(".reset-button");
let newgamebtn=document.querySelector(".new-btn");
let turnO=true;//playerX,Player0
let count=0;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [2,4,6],
    [1,4,7],
    [0,4,8],

];
const resetbtn=()=>{
    msgcontainer.classList.add("hide");
    enableBx();
    count=0;
    turnO=true;
}
bx.forEach((box)=>{  //box represent each indivisual element with in bx 
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
            box.innerText="O";// O is printed in bx
            turnO=false;//make ready for next
        }else{
            box.innerText="X";// X is printed in bx
        turnO="true";//make ready for next
        }
        
        box.disabled=true;
    count++
     checkWinner();
      if(count=== 9){
        gameDraw();
      }
  
    })
})
const gameDraw=()=>{
msg.innerText=`Game was Draw`;
msgcontainer.classList.remove("hide")
disableBx();
}
const disableBx=()=>{
    for(let box of bx){
        box.disabled=true;
    }
}
const enableBx=()=>{
    for(let box of bx){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
msg.innerText=`Winner is ${winner}`
msgcontainer.classList.remove("hide");
disableBx();
}
const checkWinner=()=>{
    for(patten of winpatterns){
        let val1= bx[patten[0]].innerText;
        let val2= bx[patten[1]].innerText;
        let val3= bx[patten[2]].innerText;
        if(val1 !==""&& val2 !==""&& val3 !==""){
            if(val1==val2&& val2==val3){
                console.log("winner",val1)
                showwinner(val1);
                return true;
            }
        }
    }
}
newgamebtn.addEventListener("click", resetbtn);
rebtn.addEventListener("click", resetbtn);//resetbtn is call back of a function