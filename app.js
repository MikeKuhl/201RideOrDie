//questions

let question = {
  title: "gato",
  answers: ["dog", "cat", "bird", "fish"],
  correctAnswer: 1,
};

function showQuestion(q) {
  let titleDiv = document.getElementById("title");
  titleDiv.textContent = q.title;

  let alts = document.querySelectorAll(".alternative");

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
