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
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>EECS 101 </span>&#x2022 posted by Bob Joe</p>\
  <h4>EECS Study Group</h4>\
    <p>\
      No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting\
      occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried\
      known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing\
      it inquiry.\
    </p>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>ASTRO 101 </span>&#x2022 posted by John Smith</p>\
  <h4>Astronomy Review</h4>\
    <p>\
      Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable\
      be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr\
      account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade\
      her minutes. Ready how but truth son new under.\
    </p>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>BIO 202 </span>&#x2022 posted by Jane Doe</p>\
  <h4>Bio Final Exam Review</h4>\
    <p>\
      Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am\
      of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she\
      roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.\
    </p>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>MATH 101 </span>&#x2022 posted by Rachel White</p>\
  <h4>Calculus Hw HELP</h4>\
    <p>\
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto officiis tempora commodi veritatis, nulla\
      laboriosam earum soluta cum eligendi nostrum error excepturi explicabo, corrupti temporibus perspiciatis ab blanditiis.\
      Voluptatem!\
    </p>\
  </div>\
</li>\
<li>\
  <div class="post">\
  <p class="post-meta"><span>CHEM 101 </span>&#x2022 posted by Sam Johnson</p>\
  <h4>Periodic Table Trivia Group</h4>\
    <p>\
      Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he\
      commanded believing dejection in by. On no am winding chicken so behaved. Its preserved enjoyment new way behaviour.\
      Him yet devonshire celebrated especially. Unfeeling one provision are smallness resembled repulsive.\
    </p>\
  </div>\
</li>';
document.getElementById("search-results").innerHTML = posts;
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

//
