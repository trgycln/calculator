let equation = "";
let screen = document.getElementById("screen");

function addToScreen(value) {
  equation += value;
  screen.value = equation;
}

function clearScreen() {
  equation = "";
  screen.value = "";
}

function calculate() {
  try {
    equation = eval(equation);
    screen.value = equation;
  } catch (err) {
    screen.value = "Hata!";
  }
}