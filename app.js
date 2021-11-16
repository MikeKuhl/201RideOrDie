//questions

let question = {
  question: "gato",
  answers: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

function showQuestion(q) {
  let questionDiv = document.getElementById("question");
  questionDiv.textContent = q.question;

  let alts = document.querySelectorAll(".answers");

  alts.forEach(function (element, index) {
    element.textContent = q.answers[index];

    element.addEventListener("click", function () {
      if (q.correctAnswer == index) {
        console.log("Correct Answer!");
      } else {
        console.log("Wrong Answer!");
      }
    });
  });
}

showQuestion(question);
