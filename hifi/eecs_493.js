localStorage.getItem("eecs-493")
  ? (document.getElementById("eecs-493").innerHTML = localStorage.getItem("eecs-493"))
  : false;

function changeStatus() {
  let button = document.getElementsByClassName("eecs-493")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Leave Group") {
    document.getElementsByClassName("eecs-493")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("eecs-493", new_button);
    alert("You have requested to leave this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to leave this group");
    document.getElementsByClassName("eecs-493")[0].textContent = "Request Leave Group";
    let new_button = "Request Leave Group";
    localStorage.setItem("eecs-493", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}