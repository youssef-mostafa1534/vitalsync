const placeHolderResponses = [
    "You should eat healthy 🍏", 
    "Stop eating fast foods 🐔", 
    "Carbs will make you fat 🗿", 
    "You need proteins to build muscles 💪", 
    "Even fructose (the sugar from fruits) is bad for you in large amounts 🍬", 
    "You should exercise in the morning 🏃‍♂️"
];

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        const chatBox = document.getElementById("chat-box");
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.innerText = "You: " + userInput;
        chatBox.appendChild(userMessage);
        
        // Here you can add the logic to send the message to the AI and get a response.
        const botResponse = document.createElement("div");
        botResponse.className = "bot-response";
        const random = Math.floor(Math.random() * placeHolderResponses.length);
        botResponse.innerText = "Bot: " + placeHolderResponses[random];
        chatBox.appendChild(botResponse);
        
        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}


document.getElementById("user-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage()
    }
})