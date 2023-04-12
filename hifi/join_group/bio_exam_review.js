localStorage.getItem("message-button-2")
  ? (document.getElementById("message-button-2").innerHTML =
      localStorage.getItem("message-button-2"))
  : false;

function changeStatusJoin2() {
  let button = document.getElementsByClassName("message-button-2")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Join Group") {
    document.getElementsByClassName("message-button-2")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("message-button-2", new_button);
    alert("You have requested to join this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to join this group");
    document.getElementsByClassName("message-button-2")[0].textContent = "Request Join Group";
    let new_button = "Request Join Group";
    localStorage.setItem("message-button-2", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}
