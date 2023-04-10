localStorage.getItem("conv-appleseed")
  ? (document.getElementById("conv-appleseed").innerHTML = localStorage.getItem("conv-appleseed"))
  : false;

function addNewMessageAppleseed() {
  const inputText = document.getElementById("inputText").value;
  var date = new Date().toLocaleDateString();
  newMessage = document.createElement("div");
  newMessage.classList.add("user-conversation-message");
  newMessage.innerHTML = `<div class="message-time">${date}</div>${inputText}`;
  document.getElementById("conv-appleseed").appendChild(newMessage);
  let conv = document.getElementById("conv-appleseed").innerHTML;
  localStorage.setItem("conv-appleseed", conv);
}
