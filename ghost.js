let canMove = true;
let keyPress = 0;
let lives = 4;
// addEventListeners();

function detectKey(e) {
  if (canMove) {
    let posLeft = document.getElementById("spooky").offsetLeft;
    e = e || window.event;

    if (e.keyCode == "37") {
      document.getElementById("spooky").style.marginLeft = posLeft + 38 + "px";
      keyPress -= 1;
    } else if (e.keyCode == "39") {
      document.getElementById("spooky").style.marginLeft = posLeft - 38 + "px";
      keyPress++;
    }

    console.log(keyPress);

    posPrompt();
  }
}

function change() {
  let hotbod = document.getElementById("hotbod");
  let btn = document.getElementById("startButton");
  document.onkeydown = detectKey;
  if (btn.value == "Enter the Dungeon") {
    // hotbod.style.overflow = 'hidden'
    canMove = true;
    btn.value = "Exit the Dungeon";
  } else {
    stop();
  }
}

function stop() {
  let hotbod = document.getElementById("hotbod");
  let btn = document.getElementById("startButton");
  if (btn.value == "Exit the Dungeon") {
    btn.value = "Enter the Dungeon";
    hotbod.style.overflow = "auto";
  } else btn.value == "Enter the Dungeon";

  hotbod.style.overflow = "hidden";
  canMove = false;
}

const hearts = [
  document.getElementById("heart1"),
  document.getElementById("heart2"),
  document.getElementById("heart3"),
  document.getElementById("heart4"),
];

function livesCheck() {
  for (i = 0; i < hearts.length; i++) {
    if (lives === 3) {
      hearts[0].remove();
    } else if (lives === 2) {
      hearts[1].remove();
    } else if (lives === 1) {
      hearts[2].remove();
    } else if (lives === 0) {
      hearts[3].remove();
      document.getElementById("gameover").hidden = false;
      // document.getElementById('restart').style.display = 'inline-block';
    } else {
      console.log("nice");
    }
  }
}

function posPrompt() {
  let hotbod = document.getElementById("hotbod");
  if (keyPress === 21) {
    console.log("working");
    showQuestion(question);
    hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    canMove = false;
  } else if (keyPress > 21) {
    document.getElementById("knight").hidden = true;
    canMove = true;
    hotbod.style.overflow = "auto";
  } else if (keyPress < 21) {
    document.getElementById("knight").hidden = true;
    canMove = true;
    hotbod.style.overflow = "auto";
  } else {
    canMove = true;
    hotbod.style.overflow = "auto";
  }
  if (keyPress === 5) {
    console.log("working");
    q2();
    hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    canMove = false;
  }
  if (keyPress === 30) {
    console.log("working");
    q3();
    hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    canMove = false;
  }
  if (keyPress === 45) {
    console.log("working");
    q4();
    hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    canMove = false;
  }
  if (keyPress === 60) {
    console.log("working");
    q5();
    hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    canMove = false;
  }
}

function q2() {
  showQuestion(question2);
}

function q3() {
  showQuestion(question3);
}

function q4() {
  showQuestion(question4);
}

function q5() {
  showQuestion(question5);
}
