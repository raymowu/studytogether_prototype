localStorage.getItem("conv-daniels")
  ? (document.getElementById("conv-daniels").innerHTML = localStorage.getItem("conv-daniels"))
  : false;

function enterKeyPressed(event) {
  event.key === "Enter" && addNewMessageDaniels();
}

function addNewMessageDaniels() {
  const inputText = document.getElementById("inputText").value;
  var date = new Date().toLocaleDateString();
  newMessage = document.createElement("div");
  newMessage.classList.add("user-conversation-message");
  newMessage.innerHTML = `<div class="message-time">${date}</div>${inputText}`;
  document.getElementById("conv-daniels").appendChild(newMessage);
  let conv = document.getElementById("conv-daniels").innerHTML;
  localStorage.setItem("conv-daniels", conv);
  document.getElementById("inputText").value = "";
}
