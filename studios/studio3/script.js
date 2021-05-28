(function () {

    'use strict';
    
    let startGame = document.getElementById('startgame');
    let gameControl = document.getElementById('gamecontrol');
    let game = document.getElementById('game');
    let score = document.getElementById('score');
    let actionArea = document.getElementById('actions');
    let p1Score = document.getElementById('p1-score');
    let p2Score = document.getElementById('p2-score');
    let rollPrompt = document.getElementById('roll-prompt');

    const dejaVu = new Audio('media/dv-track.mp3');
    let dejaVuSection = document.getElementById('pink-game');
    const driversLicense = new Audio('media/dl-track.mp3');
    let driversLicenseSection = document.getElementById('blue-game');

    const yay = new Audio('media/yay.mp3');
    const aw = new Audio('media/aw.mp3');


    let gameData = {
        dice: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'],
        players: ['player1', 'player2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 10
    };

    
    startGame.addEventListener('click', function(){
        startGame.innerHTML = '';
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<p2 id = "started-game"> The Game Has Started </p>';
        gameControl.innerHTML += '<button id = "quit"> The Game Has Started, Wanna Quit? </button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
        
    });


    function setUpTurn(){
        game.innerHTML = `<p> Roll the dice for the ${gameData.players[gameData.index]} </p>`;
        actionArea.innerHTML = '<button id = "roll">🎲</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6)+1;
        gameData.roll2 = Math.floor(Math.random() * 6)+1;
        if(gameData.score[0] < 10 && gameData.score[1] < 10){
            game.innerHTML = `<p id="roll-prompt"> Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        }
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;  
        
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        

        if( gameData.rollSum === 2 ){
            game.innerHTML = '';
            game.innerHTML += '<p class = "message"> Oh snap! Snake eyes! </p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
            aw.play();
        }
        else if ( gameData.roll1 === 1 || gameData.roll2 === 1 ){
            game.innerHTML = '';
            console.log("one of the two dice was a one");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p class = "message"> Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
            aw.play();
        }
        else{
            // if neither die is a 1...
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });   
            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] >= gameData.gameEnd) {
            showCurrentScore();
            score.innerHTML = `<h2 id="winner">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            game.innerHTML = '';
            game.innerHTML = `<img id = "trophy" alt = "winner" src = images/spotifygame.png>`;
            document.getElementById('quit').innerHTML = "Had fun? Start a New Game!";
            yay.play()
        }
        else{
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        // score.innerHTML = `<p> The score is currently <strong> ${gameData.players[0]} ${gameData.score[0]} </strong> and <strong> ${gameData.players[1]} ${gameData.score[1]} </strong> </p>`;
        p1Score.innerHTML = `<p id = "one-score"> ${gameData.score[0]} </p>`;
        p2Score.innerHTML = `<p id = "two-score"> ${gameData.score[1]} </p>`;
    }

})();