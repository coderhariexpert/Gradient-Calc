function clearScreen() {
    document.getElementById("answer").value = "";
}

function deleteLastChar() {
    let current = document.getElementById("answer").value;
    document.getElementById("answer").value = current.slice(0, -1);
}

function appendValue(val) {
    document.getElementById("answer").value += val;
}

function calculateResult() {
    let expression = document.getElementById("answer").value;
    try {
        document.getElementById("answer").value = eval(expression);
    } catch (e) {
        document.getElementById("answer").value = "Error";
    }
}