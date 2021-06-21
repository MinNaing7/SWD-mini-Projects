"use strict"

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let getInput = document.querySelector('.guess');
let setMessage = document.querySelector('.message');
let setScore = document.querySelector('.score');
let setNumber = document.querySelector('.number');
let setBody = document.querySelector('body');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let highscore = 0;

checkBtn.addEventListener('click',checkInputNumber);
againBtn.addEventListener('click',gameRestart);

function checkInputNumber() {
	let guessNumber = Number(getInput.value);

	if (guessNumber === secretNumber) {
		gameWin();
		if (score > highscore) highscore = score;
		document.querySelector('.highscore').textContent = highscore;
	} 
	else if (guessNumber > 20 || guessNumber < 1) {
		setMessage.textContent = "Guess between 1 and 20!";
	} 
	else if (guessNumber > secretNumber) {
		setMessage.textContent = "Too High!";
		score--;
		setScore.textContent = score;
		if (score <= 0) gameOver();
	} 
	else if (guessNumber < secretNumber) {
		setMessage.textContent = "Too Low!";
		score--;
		setScore.textContent = score;
		if (score <= 0) gameOver();
	} 
	else {
		setMessage.textContent = "Something is Error!";
	}
}
function gameWin() {
	setNumber.textContent = secretNumber;
	setNumber.style.width = "30rem";
	setBody.style.backgroundColor = "#00A400";
	setMessage.textContent = "Correct Number!";
	checkBtn.style.display = "none";
	setScore.textContent = score;
	againBtn.style.animation = "againBtn 1s infinite alternate";
}
function gameOver() {
	setNumber.textContent = secretNumber;
	setNumber.style.width = "30rem";
	setBody.style.backgroundColor = "#A40000";
	setMessage.textContent = "Game Over!";
	checkBtn.style.display = "none";
	setScore.textContent = 0;
	score = 0;
	againBtn.style.animation = "againBtn 1s infinite alternate";
}
function gameRestart() {
	setNumber.textContent = "?";
	setNumber.style.width = "15rem";
	setBody.style.backgroundColor = "#222";
	setMessage.textContent = "Start guessing..."
	checkBtn.style.display = "block";
	getInput.value = " ";
	setScore.textContent = 20;
	score = 20;
	againBtn.style.animation = "none";
	secretNumber = Math.trunc(Math.random() * 20 + 1);
}

