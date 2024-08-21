let spiller = 1;
function reset() {
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
  document.getElementById("score").innerHTML = "";
}

function makeMove(felt) {
  if (
    document.getElementById(felt).value == "X" ||
    document.getElementById(felt).value == "O"
  )
    return;
  else if (spiller == 1) {
    document.getElementById(felt).value = "X";
    spiller = 0;
  } else {
    document.getElementById(felt).value = "O";
    spiller = 1;
  }
  checkScore();
}

function checkScore() {
  let b1 = document.getElementById("b1").value;
  let b2 = document.getElementById("b2").value;
  let b3 = document.getElementById("b3").value;
  let b4 = document.getElementById("b4").value;
  let b5 = document.getElementById("b5").value;
  let b6 = document.getElementById("b6").value;
  let b7 = document.getElementById("b7").value;
  let b8 = document.getElementById("b8").value;
  let b9 = document.getElementById("b9").value;

  /* 
    b1 b2 b3
    b4 b5 b6
    b7 b8 b9
    */

  // Alle tilfeller hvor X vinner.
  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }
  if (b7 == "X" && b5 == "X" && b3 == "X") {
    document.getElementById("score").innerHTML = `X vinner`;
  }

  // Alle tilfeller hvor O vinner.

  if (b1 == "O" && b2 == "O" && b3 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b4 == "O" && b5 == "O" && b6 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b7 == "O" && b8 == "O" && b9 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b1 == "O" && b4 == "O" && b7 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b2 == "O" && b5 == "O" && b8 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b3 == "O" && b6 == "O" && b9 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b1 == "O" && b5 == "O" && b9 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
  if (b7 == "O" && b5 == "O" && b3 == "O") {
    document.getElementById("score").innerHTML = `O vinner`;
  }
}
