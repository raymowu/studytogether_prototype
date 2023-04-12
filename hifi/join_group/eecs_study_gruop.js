localStorage.getItem("eecs-study")
  ? (document.getElementById("eecs-study").innerHTML = localStorage.getItem("eecs-study"))
  : false;


function changeStatusJoin() {
  let button = document.getElementsByClassName("eecs-study")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Join Group") {
    document.getElementsByClassName("eecs-study")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("eecs-study", new_button);
    alert("You have requested to join this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to join this group");
    document.getElementsByClassName("eecs-study")[0].textContent = "Request Join Group";
    let new_button = "Request Join Group";
    localStorage.setItem("eecs-study", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}
