document.querySelectorAll(".quiz").forEach(function (quiz) {
  quiz.addEventListener("submit", function (event) {
    event.preventDefault();
    var questions = Array.from(quiz.querySelectorAll(".question"));
    var unanswered = questions.filter(function (question) {
      return !question.querySelector("input:checked");
    });
    var result = quiz.querySelector(".quiz-result");

    if (unanswered.length) {
      result.textContent = "Odpovedz ešte na " + unanswered.length + (unanswered.length === 1 ? " otázku." : " otázok.");
      result.dataset.state = "error";
      unanswered[0].querySelector("input").focus();
      return;
    }

    var score = 0;
    questions.forEach(function (question) {
      var selected = question.querySelector("input:checked");
      var correct = selected.value === question.dataset.answer;
      var feedback = question.querySelector(".feedback");
      var correctOption = question.querySelector('input[value="' + question.dataset.answer + '"]');
      var correctLabel = correctOption.closest("label").textContent.trim();

      if (correct) {
        score += 1;
      }
      feedback.textContent = correct
        ? "Správne. " + question.dataset.explanation
        : "Nesprávne. Správna odpoveď: " + correctLabel + ". " + question.dataset.explanation;
      feedback.classList.toggle("correct", correct);
      feedback.classList.toggle("incorrect", !correct);
    });

    var percentage = Math.round(score / questions.length * 100);
    result.textContent = "Výsledok: " + score + " z " + questions.length + " (" + percentage + " %).";
    result.dataset.state = score === questions.length ? "ok" : "";
  });

  quiz.addEventListener("reset", function () {
    window.setTimeout(function () {
      quiz.querySelectorAll(".feedback").forEach(function (feedback) {
        feedback.textContent = "";
        feedback.classList.remove("correct", "incorrect");
      });
      var result = quiz.querySelector(".quiz-result");
      result.textContent = "";
      result.removeAttribute("data-state");
    }, 0);
  });
});
