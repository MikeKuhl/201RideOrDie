  document.onkeydown = detectKey;
let canMove = true;
let keyPress = 0;
let lives = 4;
let correctAnswers = ['Declaration statements', "Function/Method", "if(a!==null)", '=','let','HTML','net','False','Both',"Not-a-Number","[]" ]
// addEventListeners();
let question = {
    question: "The 'function' and 'var' are known as:",
    answers: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
    correctAnswer: 2,
  };
  
  let question2 = {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    answers: ["Preprocessor", "Triggering Event", "DRMI", "Function/Method"],
    correctAnswer: 3,
  };
  
  let question3 = {
    question:
      'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
    answers: ["if(a!==null)", "if (a!)", "if(a!null)", "if(a!=null)"],
    correctAnswer: 0,
  };
  
  let question4 = {
    question: 'The symbol used for the assignment operator is?":',
    answers: ["-", "+", "=", ">"],
    correctAnswer: 1,
  };
  let question5 = {
    question: 'Which is not a JavaScript variable?":',
    answers: ["let", "net", "var", "const"],
    correctAnswer: 1,
  };
  let question6 = {
    question: 'Hyper Text Markup Language Stands For?":',
    answers: ["JavaScript", "CSS", "Java", "HTML"],
    correctAnswer: 3,
  };
  let question7 = {
    question: 'In JavaScript can you use a number as an identifier (name)":',
    answers: ["True", "False"],
    correctAnswer: 1,
  };
  let question8 = {
    question: 'Does a boolean only do true statements?":',
    answers: ["True", "False", "Both", "Truthy"],
    correctAnswer: 2,
  };
  let question9 = {
    question: 'What is a NaN property in JavaScript?":',
    answers: ["Not-a-Nemo", "Not-a-Number", "Nor-a-Number", "Number-a-Note"],
    correctAnswer: 1,
  };
  let question10 = {
    question: 'What symbol does an array use?":',
    answers: ["()", "{}", "[]", "<>"],
    correctAnswer: 2,
  };
  // function questElem()
  function showQuestion(q) {
    let questionDiv = document.getElementById("question");
    questionDiv.textContent = q.question;
    let answers = document.querySelectorAll(".answers");
  console.log(q);

    answers.forEach(function (element, index) {
        element.setAttribute('id',`${q.answers[index]}`)
      element.textContent = q.answers[index];
  
      element.addEventListener("click", function checkAnswer (e) {
          console.log("target id " , e.target.id)
          console.log("correctanswer " , q.correctAnswer)
          console.log(e.target.text)
          console.log(correctAnswers.includes(e.target.id))
        if (correctAnswers.includes(e.target.id)) {
          canMove = true;
          document.getElementById("knight").hidden = true;
          // console.log("Correct Answer!");
        } else {
          console.log("Wrong Answer!");
          lives -= 1;
          livesCheck();
        //   console.log(lives);
        }
      });
      
    });
  }

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

    // console.log(keyPress);

    posPrompt();
  }
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
    // hotbod.style.overflow = "hidden";
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
  } if (keyPress === 59) {
    console.log("working");
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft = 1450 + 'px';
    showQuestion(question2);
    hotbod.style.overflow = "hidden";
    
    canMove = false;
  }
  if (keyPress === 98) {
    console.log("working");
    showQuestion(question3);
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft = 2820 + 'px';
    canMove = false;
  } 
  if (keyPress === 147) {
    console.log("working");
    showQuestion(question4);
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft =  + 4794 + 'px';
    canMove = false;
  }
  if (keyPress === 191) {
    console.log("working");
    showQuestion(question5);
    // hotbod.style.overflow = "hidden";
    document.getElementById("knight").hidden = false;
    document.getElementById("knight").style.marginLeft =  + 6466 + 'px';
    canMove = false;
  }
}

