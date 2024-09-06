let userGuess = null;

function setUserGuess(guess) {
    userGuess = guess;
    document.getElementById('user-box').textContent = guess;
}
function submitGuess() {
    if (userGuess === null) {
        alert("Please select a number first!");
        return;
    }
    const computerGuess = Math.floor(Math.random() * 10);
    document.getElementById('computer-box').textContent = computerGuess;
    if (userGuess === computerGuess) {
        showModal("Congratulations! You have won!");
    } else {
        showModal("Oops! You Can do better.");
    }
}
function showModal(message) {
    document.getElementById('result-message').textContent = message;
    document.getElementById('result-modal').style.display = 'block';
}

function resetGame() {
    userGuess = null;
    document.getElementById('user-box').textContent = '';
    document.getElementById('computer-box').textContent = '';
    document.getElementById('result-modal').style.display = 'none';
}
