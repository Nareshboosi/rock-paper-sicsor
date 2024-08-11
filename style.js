let choices=document.querySelectorAll(".choice");
userScore=0;
compScore=0;
let userscore=document.querySelector(".user-score");
let compscore=document.querySelector(".comp-score");
let msg=document.querySelector("#msg");
const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        userscore.innerText=userScore;
        msg.innerText="you Win";
        msg.style.backgroundColor="green";
        
        userScore=userScore++;
    }
    else{
        compScore++;
        compscore.innerText=compScore;
        msg.innerText="You loose!";
        msg.style.backgroundColor="red";
        compScore=compScore++;
    }
};


const gameDraw=()=>{
  console.log("Game was draw!");
  msg.innerText="Game was draw!";
  msg.style.backgroundColor="blue";
};
const compchoice=()=>{
    const options=["rock","paper","Sissor"]
    const idx=Math.floor(Math.random()*3);
    return options[idx];
    
    
}

const palyGame=(userchoice)=>{
  
  const compChoice=compchoice();
  
  if(userchoice===compChoice){
    gameDraw();
  }
  else{
    let userwin=true;
    if(userchoice==="rock"){
       userwin= compChoice==="paper"?false:true;
       
    }
    else if (userchoice==="paper") {
       userwin= compChoice==="Scissor"?false:true;
        
    } else {
       userwin= compChoice==="rock"?false:true;
    }
    showWinner(userwin);
  }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
        palyGame(userchoice);
    });
});