function addNewMessage() {
    const inputText = document.getElementById("inputText").value;
    var date = new Date().toLocaleDateString()
    newMessage = document.createElement("div");
    newMessage.classList.add("user-conversation-message");
    newMessage.innerHTML = `<div class="message-time">${date}</div>${inputText}`;
    document.getElementById("conversation").appendChild(newMessage);
}