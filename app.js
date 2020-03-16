var activePlayer, scores, roundScore, gamePlaying, lastDice, winningScore;
var startingDice1, startingDice2;


init();


function init(){
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    gamePlaying = true;
    lastDice1 = 0;
    lastDice2 = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    

    winningScore = prompt('Add the winning score.')
    while(isNaN(winningScore)){
    winningScore = prompt('You have to input a number!');
    }
}
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);
    var diceDOM1 = document.querySelector('.dice1');
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    
    //add score if dice NOT one
    if(dice1 === 6 && lastDice1 === 6){
        scores[activePlayer] === 0; 
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }else if(dice2 === 6 && lastDice2 === 6){
        scores[activePlayer] === 0; 
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }else if(dice1 !== 1 && dice2 !== 1){
        var roll = dice1 + dice2;
        roundScore += roll;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        nextPlayer();
    }
    }
    lastDice1 = dice1;
    lastDice2 = dice2;
    
    });

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >=winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else{
        nextPlayer();
    }
    }
    
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    lastDice = 0;
    

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}