document.addEventListener('DOMContentLoaded', (event) => {
    loadProgress();
});

const goalAmount = 100000; // Your savings goal

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

function updateProgressBar(totalSaved) {
    const progressPercentage = Math.min((totalSaved / goalAmount) * 100, 100);
    document.getElementById('progressBar').style.width = progressPercentage + '%';
    document.getElementById('progressText').innerText = progressPercentage.toFixed(2) + '%';
}

function loadProgress() {
    let totalSaved = Number(localStorage.getItem('totalSaved')) || 0;
    updateProgressBar(totalSaved);
}
