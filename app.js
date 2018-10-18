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


