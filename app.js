function square() {
    var input = document.getElementById("userInput").value;
    console.log(input);
    var input_squared = input * input;
    document.getElementById("result").innerHTML = input_squared; 
}


