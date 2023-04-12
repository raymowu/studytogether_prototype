localStorage.getItem("eecs-101")
  ? (document.getElementById("eecs-101").innerHTML = localStorage.getItem("eecs-101"))
  : false;

function changeStatus() {
  let button = document.getElementsByClassName("eecs-101")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Leave Group") {
    document.getElementsByClassName("eecs-101")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("eecs-101", new_button);
    alert("You have requested to leave this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to leave this group");
    document.getElementsByClassName("eecs-101")[0].textContent = "Request Leave Group";
    let new_button = "Request Leave Group";
    localStorage.setItem("eecs-101", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}