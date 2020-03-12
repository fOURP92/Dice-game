var activePlayer, scores, roundScore, gamePlaying, lastDice, winningScore;


init();


function init(){
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    gamePlaying = true;
    lastDice = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    winningScore = prompt('Add the winning score.')
    if(isNaN(winningScore)){
    winningScore = prompt('You have to input a number!');
    }else{
    return winningScore;
    }
}
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice = Math.floor((Math.random() * 6) + 1);
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //add score if dice NOT one
    if(dice === 6 && lastDice === 6){
        scores[activePlayer] === 0; 
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }else if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        nextPlayer();
    }
    }
    lastDice = dice;
      
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >=winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
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