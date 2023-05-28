document.getElementById("submitter").onclick = function() {
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber < 2) {
        document.getElementById("result").innerHTML = "Heads!";
    } else {
        document.getElementById("result").innerHTML = "Tails!";
    }
};
