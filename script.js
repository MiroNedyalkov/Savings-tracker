document.addEventListener('DOMContentLoaded', (event) => {
    loadProgress();
});

const defaultGoal = 100000; // Default goal

// Load goal from localStorage or set to default
let goalAmount = Number(localStorage.getItem('goalAmount')) || defaultGoal;
document.getElementById('goalInput').value = goalAmount; // Set the goal input to the current goal

function updateGoal() {
    goalAmount = Number(document.getElementById('goalInput').value);
    localStorage.setItem('goalAmount', goalAmount); // Save the new goal to localStorage
    loadProgress(); // Recalculate progress with the new goal
}

function updateProgress() {
    const amountAdded = Number(document.getElementById('amountInput').value);
    updateTotalSaved(amountAdded);
}

function spendMoney() {
    const amountSpent = Number(document.getElementById('amountInput').value);
    updateTotalSaved(-amountSpent); // Subtracting the spent amount
}

function resetProgress() {
    localStorage.setItem('totalSaved', 0);
    loadProgress();
}

function updateTotalSaved(amount) {
    let totalSaved = Number(localStorage.getItem('totalSaved')) || 0;
    totalSaved += amount;
    totalSaved = Math.max(totalSaved, 0); // Ensure totalSaved doesn't go below 0
    localStorage.setItem('totalSaved', totalSaved);
    updateProgressBar(totalSaved);
}

function loadProgress() {
    let totalSaved = Number(localStorage.getItem('totalSaved')) || 0;
    goalAmount = Number(localStorage.getItem('goalAmount')) || defaultGoal; // Update goal from localStorage
    document.getElementById('goalInput').value = goalAmount; // Update the goal input field
    updateProgressBar(totalSaved);
}

function updateProgressBar(totalSaved) {
    const progressPercentage = (totalSaved / goalAmount) * 100;
    document.getElementById('progressBar').style.width = `${progressPercentage}%`;
    document.getElementById('progressText').innerText = `${progressPercentage.toFixed(2)}%`;
}
