// CREATE POST
let createpostForm = document.getElementById("createpost-container");
createpostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = "Sally Pear";
  let groupname = document.getElementById("createpost-groupname").value;
  let classname = document.getElementById("createpost-class").value;
  let body = document.getElementById("createpost-body").value;
  if (groupname === "" || classname === "") {
    alert("Please enter a group name and class");
    return;
  } else {
    let newPost = document.createElement("li");
    newPost.innerHTML = `<li><div class="post"><p class="post-meta"><span>${classname} </span>&#x2022 posted by ${username}</p>\
<h4>${groupname}</h4><p>${body}</p></div></li>`;
    let newPosts = newPost.innerHTML + localStorage.getItem("posts");
    localStorage.setItem("posts", newPosts);
    window.location.href = "search.html";
  }
});
