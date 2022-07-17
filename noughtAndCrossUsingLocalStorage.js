const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const winStatus = document.getElementById("winstatus");
const scoreX = document.getElementById("scoreX");
const scoreY = document.getElementById("scoreY");

const buttons = document.querySelectorAll("button");
winStatus.disabled = true;
scoreX.disabled = true;
scoreY.disabled = true;

let count = 0;
scoreX.innerText = Number(localStorage.scoreX);
scoreY.innerText = Number(localStorage.scoreY);

function handleButtonClick(event) {
  if (event.target.innerText !== "X" && event.target.innerText !== "O") {
    if (count % 2 !== 0) {
      //if odd
      count++;
      event.target.innerText = "X";
      winStatus.innerText = "O's Turn Now!!";
    } else {
      event.target.innerText = "O";
      winStatus.innerText = "X's Turn Now!!";
      count++;
    }
    event.target.disabled = true;

    const flag = checkForWinner();

    if (flag === 1) {
      // theres a winner
      if (event.target.innerText === "O") {
        scoreX.innerText = Number(localStorage.scoreX) + 1;
        localStorage.setItem("scoreX", scoreX.innerText);
      } else {
        scoreY.innerText = Number(localStorage.scoreY) + 1;
        localStorage.setItem("scoreY", scoreY.innerText);
      }

      winStatus.innerText = event.target.innerText + " WINS!!";

      if (
        confirm(
          "Its a Win for " +
            event.target.innerText +
            "\nDo you want to play again?"
        )
      ) {
        window.location.reload();
      } else {
        window.alert("Thanks for trying our app!");
        localStorage.setItem("scoreX", "0");
        localStorage.setItem("scoreY", "0");
      }
    }

    if (flag === 0 && areAllButtonsDisabled()) {
      if (confirm("Its a Tie. Do you want to play again?")) {
        window.location.reload();
      } else {
        window.alert("Thanks for trying our app!");
        localStorage.setItem("scoreX", "0");
        localStorage.setItem("scoreY", "0");
      }
    }
  }
}

function areAllButtonsDisabled() {
  if (
    button1.disabled === true &&
    button2.disabled === true &&
    button3.disabled === true &&
    button4.disabled === true &&
    button5.disabled === true &&
    button6.disabled === true &&
    button7.disabled === true &&
    button8.disabled === true &&
    button9.disabled === true
  ) {
    return true;
  }
  return false;
}

function checkForWinner() {
  let flag = 0;

  //for checling rows
  if (
    button1.innerText === button2.innerText &&
    button1.innerText === button3.innerText
  ) {
    flag = 1;
    return flag;
  }
  if (
    button4.innerText === button5.innerText &&
    button4.innerText === button6.innerText
  ) {
    flag = 1;
    return flag;
  }
  if (
    button7.innerText === button8.innerText &&
    button7.innerText === button9.innerText
  ) {
    flag = 1;
    return flag;
  }

  // for checking column
  if (
    button1.innerText === button4.innerText &&
    button1.innerText === button7.innerText
  ) {
    flag = 1;
    return flag;
  }

  if (
    button2.innerText === button5.innerText &&
    button2.innerText === button8.innerText
  ) {
    flag = 1;
    return flag;
  }

  if (
    button3.innerText === button6.innerText &&
    button3.innerText === button9.innerText
  ) {
    flag = 1;
    return flag;
  }

  //for checking diagonals

  if (
    button1.innerText === button5.innerText &&
    button1.innerText === button9.innerText
  ) {
    flag = 1;
    return flag;
  }

  if (
    button3.innerText === button5.innerText &&
    button3.innerText === button7.innerText
  ) {
    flag = 1;
    return flag;
  }

  return flag;
}

button1.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);
button3.addEventListener("click", handleButtonClick);
button4.addEventListener("click", handleButtonClick);
button5.addEventListener("click", handleButtonClick);
button6.addEventListener("click", handleButtonClick);
button7.addEventListener("click", handleButtonClick);
button8.addEventListener("click", handleButtonClick);
button9.addEventListener("click", handleButtonClick);
