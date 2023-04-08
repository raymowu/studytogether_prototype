// SEARCH FUNCTIONALITY

const searchGroup = () => {
  let input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("groupname-search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-results");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("h4")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
const searchClass = () => {
  let input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("class-search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-results");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[1];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
const searchKeyWords = () => {
  let input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("keywords-search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-results");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[2];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
