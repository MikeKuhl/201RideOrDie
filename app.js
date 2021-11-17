//questions

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
  question:
  'The symbol used for the assignment operator is?'
}

function showQuestion(q) {
  let questionDiv = document.getElementById("question");
  questionDiv.textContent = q.question;
 

  let alts = document.querySelectorAll(".answers");

  alts.forEach(function (element, index) {
    element.textContent = q.answers[index];

    element.addEventListener("click", function () {
      if (q.correctAnswer == index) {
        canMove = true;
        document.getElementById('knight').hidden = true;
        // console.log("Correct Answer!");
      } else {
        console.log("Wrong Answer!");
      }
    });
  });
}

showQuestion(question);
