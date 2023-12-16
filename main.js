// console.log(Math.floor(Math.random()*10)+1);
// const psp="prasanna";
// console.log(psp.charAt(Math.floor(Math.random()*psp.length)))


let playGame=confirm("shall we play rock, paper and scissors?");
if(playGame){
    let playchoice=prompt("please enter rock paper or scissors");
    if(playchoice){
        let player=playchoice.trim().toLowerCase();
        if(
            player==="rock" ||
            player==="paper" ||  
            player==="scissors" 
        ){
            let computerchoice=Math.floor(Math.random()*3 +1);
            let computer=computerchoice===1?"rock":computerchoice===2?"paper":"scissors";
            let result=
            player===computer?"tie game !":
            player==="rock" && computer==="paper"?`player:${player} \n computer:${computer} \n computer wins`:
            player==="paper"&& computer==="scissors"?`player:${player} \n computer:${computer} \n computer wins`:
            player==="scissors"&& computer==="rock"?`player:${player} \n computer:${computer} \n computer wins`:
            `player:${player} \n computer:${computer} \n player  wins`;
            alert(result);
            let playagain =confirm("pllay again?");
            playagain?location.reload():alert("ok thanks for playing");
        }
        else{alert("you didnt enter rock paper or scissors");}

    }
    else{alert("I guess you changed your mindd . Maybe next time");}
}
else{alert("Ok may be next time");}