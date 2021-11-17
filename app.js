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
    'The symbol used for the assignment operator is?":',
  answers: ["-", "+", "=", ">"],
  correctAnswer: 1,
};
let question5 = {
  question:
    'Which is not a JavaScript variable?":',
  answers: ["let", "net", "var", "const"],
  correctAnswer: 1,
};
let question6 = {
  question:
    'Hyper Text Markup Language Stands For?":',
  answers: ["JavaScript", "CSS", "Java", "HTML"],
  correctAnswer: 3,
};
let question7 = {
  question:
    'In JavaScript can you use a number as an identifer (name)":',
  answers: ["True", "False"],
  correctAnswer: 1,
};
let question8 = {
  question:
    'Does a boolean only do true statements?":',
  answers: ["True", "False", "Both", "Truthy"],
  correctAnswer: 2,
};
let question9 = {
  question:
    'What is a NaN property in JavaScript?":',
  answers: ["Not-a-Nemo", "Not-a-Number", "Nor-a-Number", "Number-a-Note"],
  correctAnswer: 0,
};
let question10 = {
  question:
    'What symbol does an array use?":',
  answers: ["()", "{}", "[]", "<>"],
  correctAnswer: 2,
};


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
