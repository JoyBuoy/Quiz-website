var userAnswers = [];

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


var questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 2
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 2
    },
    {
        question: 'What is the smallest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Mercury'],
        correctAnswer: 3
    },
    {
        question: 'What is the capital of Spain?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 3
    },
    {
        question: 'What is 3 + 3?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 3
    },
    {
        question: 'What is the second largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 3
    },
    {
        question: 'What is the second smallest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Mercury'],
        correctAnswer: 1
    },
    {
        question: 'What is the capital of Germany?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 1
    },
    {
        question: 'What is 4 + 4?',
        options: ['3', '4', '5', '8'],
        correctAnswer: 3
    },
    {
        question: 'What is the third largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1
    },
    {
        question: 'What is the third smallest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Mercury'],
        correctAnswer: 2
    },
    {
        question: 'What is the capital of Italy?',
        options: ['London', 'Berlin', 'Paris', 'Rome'],
        correctAnswer: 3
    }
    // Your questions here, each one should be an object with properties: question, options, correctAnswer
];
questions = shuffle(questions);


var currentQuestion = 0;
var score = 0;
var correctAnswers = [];
function updateQuestion() {
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    document.getElementById('question').textContent = questions[currentQuestion].question;
    for (var i = 1; i <= 4; i++) {
        document.getElementById('option' + i).textContent = questions[currentQuestion].options[i - 1];
    }
}
document.getElementById('next').addEventListener('click', function() {
    currentQuestion++;



    
    if (currentQuestion < questions.length) {
        updateQuestion();
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('score').textContent = score;
        document.getElementById('totalQuestions').textContent = questions.length;
        document.getElementById('results').style.display = 'block';

        localStorage.setItem('questions', JSON.stringify(questions));
        console.log(localStorage.getItem('questions'));
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        console.log(userAnswers);
        localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));

    }
});
for (var i = 1; i <= 4; i++) {
    (function(i) {
    document.getElementById('option' + i).addEventListener('click', function() {
        
        userAnswers.push(i - 1);

        if (this.textContent === questions[currentQuestion].options[questions[currentQuestion].correctAnswer]) {
            score++;
            correctAnswers.push(this.textContent);
        }
        // Move to the next question automatically
        document.getElementById('next').click();
    });
})(i);

}
updateQuestion();

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
});

document.getElementById('back').addEventListener('click', function () {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
    }
})
document.getElementById('reviewButton').addEventListener('click', function() {
    window.location.href = 'review.html';
});



