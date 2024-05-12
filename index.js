var timer;
var timeLimit = 30; // Time limit for each question in seconds

function startTimer() {
    var timeLeft = timeLimit;
    document.getElementById('timer').textContent = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Move to the next question when time is up
            document.getElementById('next').click();
        }
    }, 1000);
}

document.getElementById('next').addEventListener('click', function() {
    clearInterval(timer); // Stop the current timer
    var timeLeft = timeLimit;
    document.getElementById('timer').textContent = timeLeft;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateQuestion();
        startTimer(); // Start a new timer
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('score').textContent = score;
        document.getElementById('totalQuestions').textContent = questions.length;
        document.getElementById('results').style.display = 'block';
    }
});

// Start the first timer
startTimer();


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

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
    clearInterval(timer); // Stop the current timer
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateQuestion();
        startTimer(); // Start a new timer
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('score').textContent = score;
        document.getElementById('correctAnswers').textContent = correctAnswers.join(', ');
        document.getElementById('totalQuestions').textContent = questions.length;
        document.getElementById('results').style.display = 'block';
    }
});
for (var i = 1; i <= 4; i++) {
    document.getElementById('option' + i).addEventListener('click', function() {
        if (this.textContent === questions[currentQuestion].options[questions[currentQuestion].correctAnswer]) {
            score++;
            correctAnswers.push(this.textContent);
        }
        // Move to the next question automatically
        document.getElementById('next').click();
    });
}
updateQuestion();

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    startTimer(); // Start the first timer
});