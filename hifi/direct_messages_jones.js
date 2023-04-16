localStorage.getItem("conv-jones")
  ? (document.getElementById("conv-jones").innerHTML = localStorage.getItem("conv-jones"))
  : false;

function enterKeyPressed(event) {
  event.key === "Enter" && addNewMessageJones();
}

function addNewMessageJones() {
  const inputText = document.getElementById("inputText").value;
  var date = new Date().toLocaleDateString();
  newMessage = document.createElement("div");
  newMessage.classList.add("user-conversation-message");
  newMessage.innerHTML = `<div class="message-time">${date}</div>${inputText}`;
  document.getElementById("conv-jones").appendChild(newMessage);
  let conv = document.getElementById("conv-jones").innerHTML;
  localStorage.setItem("conv-jones", conv);
  document.getElementById("inputText").value = "";
}
