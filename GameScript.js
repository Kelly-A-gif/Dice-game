'use strict';

// const players = document.querySelectorAll(".player");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
player1.classList.remove("remove-active-player");


const winner_player = document.getElementById("winner-player");
const player_name_1 =document.querySelector(".player-name-1");
const player_name_2 =document.querySelector(".player-name-2");



const image = document.getElementById("image");
const current_score_1 = document.querySelector(".current-score-1");
const current_score_2 = document.querySelector(".current-score-2");
const row_dice_button = document.querySelector(".row-dice-button");
const hold_button = document.querySelector(".hold-button");
const total_score_1 = document.querySelector(".total-score-1");
const total_score_2 = document.querySelector(".total-score-2");
const restart_button = document.querySelector(".restart-button");


let score = 0;
let winner_reach_number = 100;


row_dice_button.addEventListener('click',function(){
    
    const dice_number = (Math.floor(Math.random() * 6) );
    // console.log(dice_number);
    // score = 0;
    if( !player1.classList.contains("remove-active-player")){
     
        getDiceNumber(player1,player2,dice_number,current_score_1);
                 
    }else if(!player2.classList.contains("remove-active-player")){
        // score = 0;
        getDiceNumber(player2,player1,dice_number,current_score_2);
 
    }
    
})

// handling the dice 1 number condition
function getDiceNumber(elt1,elt2,dice_number,current_score){
        // console.log(difference);
    if( dice_number == 0){
        current_score.textContent = 0;
        current_score.textContent = 0;
        score = 0;
        image.src = "out.png";
        elt2.classList.remove("remove-active-player");
        elt1.classList.add("remove-active-player");
            
    }else{
        incrementCurrentScore(dice_number,current_score);
    }
}


// displaying dice number in current score.
function incrementCurrentScore(dice_number,current_score){

    current_score.textContent = 0;
    if(dice_number == 1){
        image.src = "dice1.jpg";

    }else if(dice_number == 2){
        image.src = "dice2.jpg";
          
    
    }else if(dice_number == 3){
        image.src = "dice3.jpg";
          
    
    }else if(dice_number == 4){
        image.src = "dice4.jpg";
          
    }else if(dice_number == 5){
        image.src = "dice5.jpg";
          
    }else if(dice_number == 6){
        image.src = "dice6.jpg";
          
    } 
    score += dice_number;
    current_score.textContent = score;

}



// Holding the current number...Putting it to the total score.

hold_button.addEventListener('click', function(){
    if( !player1.classList.contains("remove-active-player")){

        getWinner(player1,player2,total_score_1,current_score_1,player_name_1.innerHTML);
        
    }else if(!player2.classList.contains("remove-active-player")){
        
        getWinner(player2,player1,total_score_2,current_score_2,player_name_2.innerHTML);
        
    }
    // Putting score to zero so that the current score
    // of the active player won't be added to the 
    // score of inactive player.
    score = 0;
})


// acknoledging winner with respect to the winner-reach-number.
function getWinner(elt1,elt2,total_score,current_score,PLAYER){
    let calc_total_score = parseInt(total_score.textContent) + parseInt(current_score.textContent);
            
    
    if(calc_total_score == winner_reach_number){
        total_score.textContent = calc_total_score;
        current_score.textContent = 0;

        winner_player.style.visibility = "visible";
        winner_player.textContent = `🎁😃${PLAYER} wins🎁`;

        disableButton(row_dice_button);
        disableButton(hold_button);
        // alert("player winner");

    }else if(total_score.textContent < winner_reach_number && calc_total_score < winner_reach_number ){
       total_score.textContent = calc_total_score;
        current_score.textContent = 0;
        
        elt2.classList.remove("remove-active-player");
        elt1.classList.add("remove-active-player");

    }else if(total_score.textContent < winner_reach_number && calc_total_score > winner_reach_number){
        // alert("stop for you until your nuber adds up to 20 ")
    
        current_score.textContent= 0;
        elt2.classList.remove("remove-active-player");
        elt1.classList.add("remove-active-player");
    
        // return total_score_1.textContent;
    }
}

// restart game
restart_button.addEventListener('click', function(){
    location.reload();
})
// disable buttons after a player wins
const disableButton = (hold_button) =>{
    hold_button.disabled = true;
}

// displaying the notice
const cross_button = document.querySelector(".cross-button");
const buttons = document.querySelectorAll(".blur");
const notice_div = document.querySelector(".notice-div");
const main_container = document.querySelector(".main-container");

window.addEventListener('DOMContentLoaded',()=>{
    main_container.classList.add("blur");
    notice_div.classList.add("visible-note");
})

cross_button.addEventListener('click',()=>{
    main_container.classList.remove("blur");
    notice_div.style.visibility = "hidden";
    buttons.forEach(elt =>{
        elt.classList.remove("blur");
    })
})
