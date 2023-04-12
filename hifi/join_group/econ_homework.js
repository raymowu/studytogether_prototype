localStorage.getItem("econ")
  ? (document.getElementById("econ").innerHTML = localStorage.getItem("econ"))
  : false;


function changeStatusJoin() {
  let button = document.getElementsByClassName("econ")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Join Group") {
    document.getElementsByClassName("econ")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("econ", new_button);
    alert("You have requested to join this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to join this group");
    document.getElementsByClassName("econ")[0].textContent = "Request Join Group";
    let new_button = "Request Join Group";
    localStorage.setItem("econ", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}
