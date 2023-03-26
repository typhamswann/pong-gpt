// scripts.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 3;

let paddleHeight = 100;
let paddleWidth = 10;
let paddleY = (canvas.height - paddleHeight) / 2;

canvas.addEventListener('mousemove', function (event) {
    paddleY = event.clientY - canvas.getBoundingClientRect().top - (paddleHeight / 2);
});

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(0, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX < 0) {
        if (ballY > paddleY && ballY < paddleY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            ballX = canvas.width / 2;
            ballY = canvas.height / 2;
            ballSpeedX = 5;
        }
    } else if (ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY < 0 || ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}

setInterval(draw, 1000 / 60);
