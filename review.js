document.addEventListener('DOMContentLoaded', function() {
    var questions = JSON.parse(localStorage.getItem('questions'));
    console.log(questions);
    var userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    console.log(userAnswers);
    var correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
    var currentQuestion = 0;

    updateReview();

    function updateReview() {
        document.getElementById('questionNumber').textContent = 'Question ' + (currentQuestion + 1);
        document.getElementById('questionHeader').textContent = questions[currentQuestion].question;
        for (var i = 1; i <= 4; i++) {
            var option = document.getElementById('option' + i);
            option.textContent = questions[currentQuestion].options[i - 1];
            option.style.backgroundColor = '#007BFF'; // Reset color

            if (i - 1 === questions[currentQuestion].correctAnswer) {
                option.style.backgroundColor = 'green'; // Correct answer
            }
            if (i - 1 === userAnswers[currentQuestion] && userAnswers[currentQuestion] != questions[currentQuestion].correctAnswer) {
                option.style.backgroundColor = 'red'; // User's answer is incorrect
            }
    
        }

    }

    document.getElementById('totalQuestions').textContent = questions.length;

    document.getElementById('next').addEventListener('click', function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            updateReview();
        } else {
            document.getElementById('review').style.display = 'none';
            document.getElementById('score').textContent = correctAnswers.length;
            document.getElementById('results').style.display = 'block';
        }
    });
    
    document.getElementById('back').addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            updateReview();
        }
    });
});



