function checkLogin() {
    let username = document.getElementsByClassName("inputField")[0].value;
    let password = document.getElementsByClassName("input2field")[0].value;
    if(username != "pears@umich.edu"){
        alert("Username or password is incorrect, please try again")
    }
    else if(password != "password"){
        alert("Username or password is incorrect, please try again")
    }
    else{
        window.location.href = "index.html";
    }

  }