// Mood Tracker
function logMood(mood) {
    const result = document.getElementById('mood-result');
    result.textContent = `Your mood today: ${mood}`;

    // Save mood history
    let moods = JSON.parse(localStorage.getItem('moodLog') || "[]");
    moods.push(mood);
    localStorage.setItem('moodLog', JSON.stringify(moods));

    updateProgress();
}

// Journaling
function saveJournal() {
    const entry = document.getElementById('journal-entry').value;
    if(entry.trim() === "") {
        alert("Please write something!");
        return;
    }

    // Save journal history
    let journals = JSON.parse(localStorage.getItem('journalLog') || "[]");
    journals.push(entry);
    localStorage.setItem('journalLog', JSON.stringify(journals));

    document.getElementById('journal-result').textContent = "Journal saved!";
    document.getElementById('journal-entry').value = "";

    updateProgress();
}

// Gamified Micro-Tasks
function randomTask() {
    const tasks = [
        "Take a 5-minute walk",
        "Drink a glass of water",
        "Write one positive thing today"
    ];
    const task = tasks[Math.floor(Math.random()*tasks.length)];
    document.getElementById('random-task-result').textContent = `Try this now: ${task}`;
}

// AI Chat (simple predefined responses)
function getAIResponse() {
    const userMsg = document.getElementById('user-message').value.toLowerCase();
    const chatBox = document.getElementById('chat-box');

    let response = "I’m here to listen. Tell me more.";

    if(userMsg.includes("sad") || userMsg.includes("down")) {
        response = "It’s okay to feel sad. Try taking a short walk or breathing exercise.";
    } else if(userMsg.includes("happy") || userMsg.includes("good")) {
        response = "Great! Keep up your positive streak today!";
    } else if(userMsg.includes("stressed") || userMsg.includes("anxious")) {
        response = "Take a deep breath. You can also try writing down what’s on your mind.";
    }

    const userDiv = document.createElement('div');
    userDiv.textContent = "You: " + userMsg;
    userDiv.style.fontWeight = "bold";

    const botDiv = document.createElement('div');
    botDiv.textContent = "SakhaAI: " + response;
    botDiv.style.marginBottom = "10px";

    chatBox.appendChild(userDiv);
    chatBox.appendChild(botDiv);

    document.getElementById('user-message').value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Progress & Insights
function updateProgress() {
    let moods = JSON.parse(localStorage.getItem('moodLog') || "[]");
    let journals = JSON.parse(localStorage.getItem('journalLog') || "[]");

    document.getElementById('mood-count').textContent = `Total moods logged: ${moods.length}`;
    document.getElementById('journal-count').textContent = `Total journal entries: ${journals.length}`;
}

// Call updateProgress on page load
window.onload = updateProgress;
