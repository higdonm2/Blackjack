//Global Variables
//----------------------------------------------------------------
let playerCards = [];
let computerCards = [];

//Main Game Logic
//----------------------------------------------------------------

document.getElementById('hit').addEventListener('click', () => {
    hit(playerCards)
});

drawStartCards();
displayCards(playerCards,'human');
displayCards(computerCards,'computer');











//Functions 
//----------------------------------------------------------------

function drawCard(player) {
    let card = Math.floor(Math.random() * 13);
    if (card > 10){
        player.push(10);
    } else if (card === 1){
        player.push(11);
    }else {
        player.push(card);
    }
}

function drawStartCards(){
    for(let i = 0; i < 2;i++) {
        drawCard(playerCards);
        drawCard(computerCards);
    }    

    let pHand = calculateCards(playerCards);
    let dHand = calculateCards(computerCards);


    if (pHand.handTotal === 21 && dHand.handTotal != 21){
        alert('Blackjack! You win!');
    }else if (pHand.handTotal != 21 && dHand.handTotal === 21){
        alert('Dealer Blackjack! You lost!');
    } else if (pHand.handTotal === 21 && dHand.handTotal === 21){
        alert('');
    }
}

function calculateCards(hand){
    let handTotal = hand.reduce((previousValue, currentValue) => previousValue + currentValue);
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
}

function hit(cards){
    drawCard(playerCards);
    let hand = calculateCards(cards);
    if (hand.bust){
        displayCards();
        stay();
    } else {
        displayCards();
    }
}

function stay(){
    document.getElementById('hit').removeEventListener('click', hit);
}

function prepCards(hand) {
    return hand.join(', ')
};

function displayCards(hand,name) {
    
    let id = name + 'Cards';
    let total = calculateCards(hand);
    //Remove old div
    let oldCards = document.getElementById(id)
    if (oldCards){
        oldCards.parentNode.removeChild(oldCards)
    }

    //Create new div and append to playerobj.name
    let newDiv = document.createElement('div');
    newDiv.id = id;
    document.getElementById(name).appendChild(newDiv);

    //Create the text for the DIV and append 
    let newCards = document.createElement('p');
    let newTotal = document.createElement('p');
    newCards.textContent = `Cards: ${prepCards(hand)}`;
    newTotal.textContent = `Total: ${total.handTotal}`;
    document.getElementById(id).appendChild(newCards);
    document.getElementById(id).appendChild(newTotal);
};
