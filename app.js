var deck = [];
var player1 = [];
// var player2 = [];
var discardPile = [];
var drawnCard;

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
    // player2 = [];
    discardPile = [];
    drawnCard = null;
    
    // Creates a deck of cards from 1 to 60
    for (i = 1; i <= numCards; i += 1) {
        deck.push(i);
    }
    
    // Shuffles the deck (array)
    shuffle(deck);
    
    // Deal 10 cards to each player, alternating between each one.  Takes top number off of deck array.
    for (i = 0; i < numHand; i += 1) {
        player1.push(deck.shift());
        // player2.push(deck.shift());
    }
    
    discardPile.push(deck.shift()); // Add starting card to discard pile
    
    document.getElementById("player1").innerHTML = player1;
    // document.getElementById("player2").innerHTML = player2;
    document.getElementById("discard").innerHTML = discardPile;
    document.getElementById("drawn").innerHTML = drawnCard;
};

var drawCard = function () {
    "use strict";
    drawnCard = deck.shift();
    document.getElementById("drawn").innerHTML = drawnCard;
};

var drawDiscard = function () {
    "use strict";
    drawnCard = discardPile.pop();
    document.getElementById("drawn").innerHTML = drawnCard;
    document.getElementById("discard").innerHTML = discardPile[discardPile.length - 1];
    
    // Input number that they want to replace in their hand
        // Iterate thru hand to check for number to replace:
            // set new card to replaced card 
            // place replaced card in discard pile
};

var discardDrawn = function () {
    "use strict";
    discardPile.push(drawnCard);
    drawnCard = null;
    document.getElementById("discard").innerHTML = discardPile[discardPile.length - 1];
    document.getElementById("drawn").innerHTML = drawnCard;
};

var keep_or_discard = function () {
    "use strict";
    // Input number that they want to replace in their hand
    var card_to_replace = document.getElementById("replace").value, i;
    // Iterate thru hand to check for number to replace:
    for (i = 0; i < player1.length; i += 1) {
        if (player1[i] == card_to_replace) {
            // set new card to replaced card 
            player1[i] = drawnCard;
            drawnCard = null;
            // place replaced card in discard pile
            discardPile.push(card_to_replace);
            document.getElementById("discard").innerHTML = discardPile[discardPile.length - 1];
            document.getElementById("drawn").innerHTML = drawnCard;
            document.getElementById("player1").innerHTML = player1;
            document.getElementById("replace").value = null;
        }
    }
    // Check for errors.  
        // If card not found in hand, try again
        // 
};
