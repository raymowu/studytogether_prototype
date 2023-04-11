localStorage.getItem("message-button")
  ? (document.getElementById("message-button").innerHTML = localStorage.getItem("message-button"))
  : false;

function changeStatus() {
    let button = document.getElementsByClassName("message-button")[0];
    let text = button.textContent 
    console.log(text)
    if(text == "Request Leave Group"){
        document.getElementsByClassName("message-button")[0].textContent = "Undo Request"
        let new_button = "Undo Request"
        localStorage.setItem("message-button", new_button);
        alert("You have requested to leave this group, to undo this action press Undo Request")
    }
    else{
        alert("You have sucesfully undone your request to leave this group")
        document.getElementsByClassName("message-button")[0].textContent = "Request Leave Group"
        let new_button = "Request Leave Group"
        localStorage.setItem("message-button", new_button);
        //alert("You have requested to leave this group, to undo this action press Undo Request")
    }
  }

  function changeStatusJoin() {
    let button = document.getElementsByClassName("message-button")[0];
    let text = button.textContent 
    console.log(text)
    if(text == "Request Join Group"){
        document.getElementsByClassName("message-button")[0].textContent = "Undo Request"
        let new_button = "Undo Request"
        localStorage.setItem("message-button", new_button);
        alert("You have requested to join this group, to undo this action press Undo Request")
    }
    else{
        alert("You have sucesfully undone your request to join this group")
        document.getElementsByClassName("message-button")[0].textContent = "Request Join Group"
        let new_button = "Request Join Group"
        localStorage.setItem("message-button", new_button);
        //alert("You have requested to leave this group, to undo this action press Undo Request")
    }
  }