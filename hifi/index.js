// POSTS GLOBAL VAR
let posts =
  '<li> \
  <div class="post"> \
  <p class="post-meta"><span>ECON 101 </span>&#x2022 posted by Johnny Appleseed</p>\
  <h4>ECON HOMEWORK HELP</h4>\
    <p>\
      Hey everyone I need help with the ECON 101 homework about supply and demand. Would anyone be interested in teaming up to\
      go over the daily homeworks together? I really need help with understanding supply and how it relates to demand as well\
      as how the supply demands the economy to reach points of certain marginal growth for businesses to fully operate on an\
      efficient scale with returns favorable in the long run. I would be down to meet Mondays and Wednesdays at the library in\
      room 1111.\
    </p>\
    <a href="join_group/econ_homework_help.html"><button class="message-button-group">Go To Group</button></a>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>EECS 101 </span>&#x2022 posted by Bob Joe</p>\
  <h4>EECS Study Group</h4>\
    <p>\
    Hello everyone! I am looking for a group of individuals who want to \
    form a study group for tests and assigments in EECS 101. I am free \
    mostly in the evenings and open to meet at other times. I would prefer to meet \
    on zoom but can meet in person but open to meeting in person.\
    </p>\
    <a href="join_group/eecs_study_group.html"><button class="message-button-group">Go To Group</button></a>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>ASTRO 101 </span>&#x2022 posted by John Smith</p>\
  <h4>Astronomy Review</h4>\
    <p>\
      Hello everybody! I am looking for a few people to review for our upcoming exam and to work on the current homework\
      assignments together. I am free every Monday, Wednesday, and Friday and am pretty flexible. Send me a message \
      if you are interested. Thanks!\
    </p>\
    <a href="join_group/astro_review.html"><button class="message-button-group">Go To Group</button></a>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>BIO 202 </span>&#x2022 posted by Jane Doe</p>\
  <h4>Bio Final Exam Review</h4>\
    <p>\
    Hello! I am looking to form a group of individuals who want to study \
    together for the upcoming final exam in BIO 202. My avaliability is \
    mostly in the afternoons although I am flexible. I would prefer to meet in\
    person in the Shapiro library.</p>\
    <a href="join_group/bio_exam_review.html"><button class="message-button-group">Go To Group</button></a>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>MATH 101 </span>&#x2022 posted by Rachel White</p>\
  <h4>Calculus Hw HELP</h4>\
    <p>\
    Hello! I am looking to form a group of individuals who want to study \
    together for the homework asssignments in MATH 101. My avaliability is \
    mostly in the evenings although I am flexible. I would prefer to meet in\
    person in the Hatcher library.\
    </p>\
    <a href="join_group/calc_hw_help.html"><button class="message-button-group">Go To Group</button></a>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>CHEM 101 </span>&#x2022 posted by Sam Johnson</p>\
  <h4>Periodic Table Trivia Group</h4>\
    <p>\
    Hi! I am looking for a group of individuals who want to \
    work together for the Periodic Table Trivia assignment in CHEM 101. I am free \
    mostly in the evenings and unfortunately cannot meet at other times. I would prefer to meet \
    on zoom but can meet in person but open to meeting in person.\
    </p>\
    <a href="join_group/chem_101.html"><button class="message-button-group">Go To Group</button></a>\
  </div>\
</li>';
let defaultPosts = localStorage.getItem("posts");

if (null === defaultPosts) {
  localStorage.setItem("posts", posts);
}

// console.log(localStorage.getItem("posts"));

localStorage.getItem("posts") && document.getElementById("search-results")
  ? (document.getElementById("search-results").innerHTML = localStorage.getItem("posts"))
  : false;

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
    p = li[i].getElementsByTagName("span")[0];
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
    p = li[i].getElementsByTagName("p")[1];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

const searchCommunities = () => {
  let input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("communities-search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("groups-list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("a")[0];

    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};