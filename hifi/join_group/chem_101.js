localStorage.getItem("chem")
  ? (document.getElementById("chem").innerHTML = localStorage.getItem("chem"))
  : false;


function changeStatusJoin() {
  let button = document.getElementsByClassName("chem")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Join Group") {
    document.getElementsByClassName("chem")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("chem", new_button);
    alert("You have requested to join this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to join this group");
    document.getElementsByClassName("chem")[0].textContent = "Request Join Group";
    let new_button = "Request Join Group";
    localStorage.setItem("chem", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}
