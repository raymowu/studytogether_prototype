localStorage.getItem("conv-smith") ? (document.getElementById("conv-smith").innerHTML = localStorage.getItem("conv-smith")) : false;

function addNewMessageSmith() {
  const inputText = document.getElementById("inputText").value;
  var date = new Date().toLocaleDateString();
  newMessage = document.createElement("div");
  newMessage.classList.add("user-conversation-message");
  newMessage.innerHTML = `<div class="message-time">${date}</div>${inputText}`;
  document.getElementById("conv-smith").appendChild(newMessage);
  let conv = document.getElementById("conv-smith").innerHTML;
  localStorage.setItem("conv-smith", conv);
}
