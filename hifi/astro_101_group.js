localStorage.getItem("message-button-astro-101")
  ? (document.getElementById("message-button-astro-101").innerHTML = localStorage.getItem("message-button-astro-101"))
  : false;

function changeStatus() {
  let button = document.getElementsByClassName("message-button-astro-101")[0];
  let text = button.textContent;
  console.log(text);
  if (text == "Request Leave Group") {
    document.getElementsByClassName("message-button-astro-101")[0].textContent = "Undo Request";
    let new_button = "Undo Request";
    localStorage.setItem("message-button-astro-101", new_button);
    alert("You have requested to leave this group, to undo this action press Undo Request");
  } else {
    alert("You have sucesfully undone your request to leave this group");
    document.getElementsByClassName("message-button-astro-101")[0].textContent = "Request Leave Group";
    let new_button = "Request Leave Group";
    localStorage.setItem("message-button-astro-101", new_button);
    //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}