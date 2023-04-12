localStorage.getItem("bio-exam")
  ? (document.getElementById("bio-exam").innerHTML = localStorage.getItem("bio-exam"))
  : false;


function changeStatusJoin() {
  let button = document.getElementsByClassName("bio-exam")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Join Group") {
    document.getElementsByClassName("bio-exam")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("bio-exam", new_button);
    alert("You have requested to join this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to join this group");
    document.getElementsByClassName("bio-exam")[0].textContent = "Request Join Group";
    let new_button = "Request Join Group";
    localStorage.setItem("bio-exam", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}
