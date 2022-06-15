class player {
    constructor(name){
        this.hand = [];
        this.name = name;
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
    prepCards() {
        return this.hand.join(', ')
    }
}

let human = new player('human');
let computer = new player('computer');


//All game logic below
//--------------------------------------------------------

function playGame(){
    human.drawStartCards();
    computer.drawStartCards();
    displayCards(human);
    displayCards(computer);
}

playGame();

function displayCards(playerObj) {
    let newCards = document.createElement('p');
    let newTotal = document.createElement('p');
    let total = playerObj.calculateCards();
    newCards.textContent = `Cards: ${playerObj.prepCards()}`;
    newTotal.textContent = `Total: ${total.handTotal}`;
    document.getElementById(playerObj.name).appendChild(newCards);
    document.getElementById(playerObj.name).appendChild(newTotal);
}








