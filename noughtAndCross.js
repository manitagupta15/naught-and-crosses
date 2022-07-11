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

const buttons = document.querySelectorAll("button");
let count = 0;
// X is Odd
//O is even

function handleButtonClick(event) {
  //  let clickedButton = event.target.id;
  if (event.target.innerText !== "X" && event.target.innerText !== "O") {
    if (count % 2 !== 0) {
      //if odd
      count++;

      event.target.innerText = "X";
    } else {
      event.target.innerText = "O";
      count++;
    }
    event.disabled = true;

    const flag = checkForWinner();

    let myFlag = true;

    if (flag === 1) {
      winStatus.innerText = "Its a Win for " + event.target.innerText;

      console.log(event.target.innerText, "wins");

      for (let i = 0; i < 9; i++) {
        buttons[i].disabled = true;
        console.dir(buttons[i]);
      }
    }

    for (let i = 0; i < 9; i++) {
      if (buttons[i].disabled !== true) {
        myFlag = false;
      }
    }
    console.log(myFlag, "<===myflag");
    if (flag === 0 && myFlag === true) {
      console.log("Its a tie");
      winStatus.innerText = "Its a Tie";
    }
  }
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

  //for checking diagnols

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
