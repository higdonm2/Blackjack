class player {
    constructor(name){
        this.hand = [];
        this.name = name;
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
    };
    displayCards() {
        let id = this.name + 'Cards';
        let total = this.calculateCards();
        //Remove old div
        let oldCards = document.getElementById(id)
        if (oldCards){
            oldCards.parentNode.removeChild(oldCards)
        }
    
        //Create new div and append to playerobj.name
        let newDiv = document.createElement('div');
        newDiv.id = id;
        document.getElementById(this.name).appendChild(newDiv);
    
        //Create the text for the DIV and append 
        let newCards = document.createElement('p');
        let newTotal = document.createElement('p');
        newCards.textContent = `Cards: ${this.prepCards()}`;
        newTotal.textContent = `Total: ${total.handTotal}`;
        document.getElementById(id).appendChild(newCards);
        document.getElementById(id).appendChild(newTotal);
    };
    stay(){
        document.getElementById('hit').removeEventListener('click', human.hit);
    };
    hit(){
        this.drawCard();
        let hand = this.calculateCards();
        if (hand){
            this.displayCards();
            this.stay();
        } else {
            this.displayCards();
        }
        
    };
    
}


let human = new player('human');
let computer = new player('computer');

function playGame(){
    human.drawStartCards();
    computer.drawStartCards();
    human.displayCards();
    computer.displayCards();
    
}

document.getElementById('hit').addEventListener('click', human.hit);

playGame();

