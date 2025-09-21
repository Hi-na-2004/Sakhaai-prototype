// Mood Tracker
function logMood(mood) {
    const result = document.getElementById('mood-result');
    result.textContent = `Your mood today: ${mood}`;
    result.style.transform = "scale(1.3)";
    setTimeout(() => { result.style.transform = "scale(1)"; }, 300);
}

// Journaling
function saveJournal() {
    const entry = document.getElementById('journal-entry').value;
    if(entry.trim() === "") {
        alert("Please write something!");
        return;
    }
    localStorage.setItem('journalEntry', entry);
    document.getElementById('journal-result').textContent = "Journal saved!";
    document.getElementById('journal-entry').value = "";
}

// Daily Self-Care Tasks
const tasks = [
    "Take a 5-minute walk",
    "Drink a glass of water",
    "Write one positive thing today",
    "Do a quick stretch",
    "Listen to your favorite song"
];

function showTask() {
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    document.getElementById('task-result').textContent = `Try this now: ${task}`;
}

// AI Chat (predefined simple responses)
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

