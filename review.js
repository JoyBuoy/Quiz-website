var questions = JSON.parse(localStorage.getItem('questions'));
var userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
var correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
var currentQuestion = 0;

function updateReview() {
    document.getElementById('questionHeader').textContent = 'Question ' + (currentQuestion + 1);
    for (var i = 1; i <= 4; i++) {
        var option = document.getElementById('option' + i);
        option.textContent = questions[currentQuestion].options[i - 1];
        option.style.backgroundColor = '#007BFF'; // Reset color
        if (i - 1 === questions[currentQuestion].correctAnswer) {
            option.style.backgroundColor = 'green'; // Correct answer
        }
        if (i - 1 === userAnswers[currentQuestion]) {
            option.style.backgroundColor = userAnswers[currentQuestion] === correctAnswers[currentQuestion] ? 'green' : 'red'; // User's answer
        }
    }
}

document.getElementById('next').addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateReview();
    } else {
        document.getElementById('review').style.display = 'none';
        document.getElementById('score').textContent = correctAnswers.length;
        document.getElementById('correctAnswers').textContent = correctAnswers.join(', ');
        document.getElementById('incorrectAnswers').textContent = incorrectAnswers.join(', ');
        document.getElementById('results').style.display = 'block';
    }
});

document.getElementById('back').addEventListener('click', function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateReview();
    }
});

updateReview();