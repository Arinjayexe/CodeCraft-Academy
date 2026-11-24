
console.log("JavaScript Connected!");


// =====================================
// 1. INTERACTIVE QUIZ
// =====================================

const submitQuiz = document.getElementById("submitQuiz");
const resetQuiz = document.getElementById("resetQuiz");
const quizResult = document.getElementById("quizResult");

const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "a",
    q5: "b"
};

if (submitQuiz && quizResult) {

    submitQuiz.addEventListener("click", function () {

        let score = 0;
        let unanswered = 0;

        for (let question in correctAnswers) {

            const selected = document.querySelector(
                `input[name="${question}"]:checked`
            );

            if (!selected) {
                unanswered++;
            }
            else if (selected.value === correctAnswers[question]) {
                score++;
            }
        }

        if (unanswered > 0) {
            quizResult.textContent =
                `Please answer all questions. ${unanswered} question(s) are unanswered.`;
            return;
        }

        quizResult.textContent =
            `You scored ${score} out of 5! ` +
            (score === 5
                ? "Excellent work! All answers are correct."
                : "Good try! Review the lessons and try again.");

    });
}

if (resetQuiz && quizResult) {

    resetQuiz.addEventListener("click", function () {

        document.querySelectorAll(
            '#quiz input[type="radio"]'
        ).forEach(function (input) {
            input.checked = false;
        });

        quizResult.textContent = "Your result will appear here.";

    });
}


// =====================================
// 2. LIVE HTML PREVIEW
// =====================================

const htmlCode = document.getElementById("htmlCode");
const runCode = document.getElementById("runCode");
const htmlPreview = document.getElementById("htmlPreview");

function updatePreview() {

    if (htmlCode && htmlPreview) {
        htmlPreview.srcdoc = htmlCode.value;
    }

}

if (runCode) {
    runCode.addEventListener("click", updatePreview);
}

updatePreview();


// =====================================
// 3. SHOW / HIDE ANSWERS
// =====================================

const answerButtons = document.querySelectorAll(".answer-toggle");

answerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const targetId = button.dataset.target;
        const answer = document.getElementById(targetId);

        if (answer) {

            const isHidden = answer.hidden;

            answer.hidden = !isHidden;

            button.textContent = isHidden
                ? "Hide Answer"
                : "Show Answer";

            button.setAttribute(
                "aria-expanded",
                String(isHidden)
            );

        }

    });

});


// =====================================
// 4. STUDENT FORM VALIDATION
// =====================================

const registrationForm =
    document.getElementById("registrationForm");

const formMessage =
    document.getElementById("formMessage");

if (registrationForm && formMessage) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();

        const email = document.getElementById("emailAddress").value.trim();

        const course = document.getElementById("courseName").value;

        if (name === "") {
            formMessage.textContent = "Please enter your full name.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        if (course === "") {
            formMessage.textContent = "Please select a course.";
            return;
        }

        formMessage.textContent =
            `Thank you, ${name}! Your ${course} practice registration is complete.`;

        registrationForm.reset();

    });

}

console.log("All Practice Zone features loaded!");
