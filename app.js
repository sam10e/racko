function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function startGame() {
    deck = [];
    player1 = [];
    player2 = [];
    numCards = 60;
    numHand = 10;
    for(var i = 1; i <= numCards; i++) {
        deck.push(i);
    }
    shuffle(deck);
    for (var i = 0; i < numHand; i++) {
        player1.push(deck.shift());
        player2.push(deck.shift());
    }
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
    document.getElementById("deck").innerHTML = deck;
}




















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