var deck = [];
var player1 = [];
var player2 = [];
var discardPile = [];

function shuffle(a) {
    "use strict";
    var j, x, i;
    
    for (i = a.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    
    return a;
}

var startGame = function () {
    "use strict";
    var numCards = 60, numHand = 10, i;
    player1 = [];
    player2 = [];
    discardPile = [];
    
    // Creates a deck of cards from 1 to 60
    for (i = 1; i <= numCards; i += 1) {
        deck.push(i);
    }
    
    // Shuffles the deck (array)
    shuffle(deck);
    
    // Deal 10 cards to each player, alternating between each one.  Takes top number off of deck array.
    for (i = 0; i < numHand; i += 1) {
        player1.push(deck.shift());
        player2.push(deck.shift());
    }
    
    discardPile.push(deck.shift()); // Add starting card to discard pile
    
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
    // document.getElementById("deck").innerHTML = deck;
    document.getElementById("discard").innerHTML = discardPile;
};



















/*
    HTML for square function
    <form onsubmit="return square()">
        <label>Input a number to find the square:</label>
        <input type="number" id="userInput">
    </form>
    <input type="submit" onclick="square()">
    <h3>Your number squared is: <span id="result"></span></h3>

// JavaScript for square function
function square() {
    var input = document.getElementById("userInput").value;
    console.log(input);
    var input_squared = input * input;
    document.getElementById("result").innerHTML = input_squared; 
}
*/