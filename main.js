const { truncate } = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

class player {
    constructor(){
        this.hand = [];
    };
    gethand(){
        return this.hand.join(' ');
    };
    drawCard() {
        let card = Math.floor(Math.random() * 13);
        if (card > 10){
            this.hand.push(10);
        } else if (card === 1){
            this.hand.push(11);
        }else {
            this.hand.push(card);
        }
    };
    calculateCards(){
        let handTotal = this.hand.reduce((previousValue, currentValue) => previousValue + currentValue);
        if(handTotal > 21){
            return {
                handTotal: handTotal,
                bust: true
            };    
        } else {
            return {
                handTotal: handTotal,
                bust: false
            };
        }
    }; 
    getPlayerTurn(){
        let turn = ''
        rl.question('Hit or Stay?', returnTurn = (answer) => {
        turn = answer;
        
        })
        rl.close();

        return turn;
    };
    drawStartCards(){
        this.drawCard();
        this.drawCard();
        let hand = this.calculateCards();
        if (hand.handTotal === 21){
            console.log('Blackjack! You win!');
        }
    };
}

let player1 = new player();
let computer = new player();


//All game logic below
//--------------------------------------------------------






function playGame(){
    player1.drawStartCards();
    computer.drawStartCards();
    console.log(player1.hand);
    console.log(computer.hand);
}




playGame();







/*function generateRandomCard (){
    let card = Math.floor(Math.random() * 13)
    if (card > 10){
        return 10
    } else if (card === 1){
        return 11;
    }else {
        return card;
    }
} */

/*function calculateCards(hand){
    let handTotal = hand.reduce((previousValue, currentValue) => previousValue + currentValue);
        if(handtotal > 21){
            return {
                handTotal: handTotal,
                playing: false
            };    
        } else {
            return {
                handTotal: handTotal,
                playing: true
            };
        }
    
}*/

/*function getPlayerTurn () {
    
    let turn = ''
    rl.question('Hit or Stay?', returnTurn = (answer) => {
        turn = answer;
        
    })
    rl.close();

    return turn;
    
}*/

/*if (answer.toLowerCase() === 'hit' || answer.toLowerCase() === 'h'){
    player.push(generateRandomCard());
    let cardTotal = calculateCards(player);
    if (cardTotal > 21){
        playing = false;
    }
} */

