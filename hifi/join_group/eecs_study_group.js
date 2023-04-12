localStorage.getItem("message-button-6")
? (document.getElementById("message-button-6").innerHTML = localStorage.getItem("message-button-6"))
: false;

function changeStatusJoin6() {
  let button = document.getElementsByClassName("message-button-6")[0];
  let text = button.textContent 
  console.log(text)
  if(text == "Request Join Group"){
      document.getElementsByClassName("message-button-6")[0].textContent = "Undo Request"
      let new_button = "Undo Request"
      localStorage.setItem("message-button-6", new_button);
      alert("You have requested to join this group, to undo this action press Undo Request")
  }
  else{
      alert("You have sucesfully undone your request to join this group")
      document.getElementsByClassName("message-button-6")[0].textContent = "Request Join Group"
      let new_button = "Request Join Group"
      localStorage.setItem("message-button-6", new_button);
      //alert("You have requested to leave this group, to undo this action press Undo Request")
  }
}