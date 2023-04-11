function checkLogin() {
    let username = document.getElementsByClassName("inputField")[0].value;
    let password = document.getElementsByClassName("input2field")[0].value;
    if(username != "spears@umich.edu"){
        alert("Username is incorrect, please try again")
    }
    else if(password != "password"){
        alert("Password is incorrect, please try again")
    }
    else{
        window.location.href = "index.html";
    }

  }