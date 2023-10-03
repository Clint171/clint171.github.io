
// Get the navbar
var navbar = document.getElementById("topnavbar");


// Show or hide the navbar
function showNav() {

  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
  } else {
    setTimeout(()=>{
    navbar.classList.add("hidden");
    }, 1000);
  }
}

// Flash the contacts div when the contact button is clicked
function flashContacts(){
  var contacts = document.getElementById("footer");
  if (contacts.style.opacity > 0){
    contacts.style.opacity = 0; 
    setTimeout(()=>{  
    contacts.style.display = "none";
    },500);
  }
  else{
    contacts.style.opacity = 0.9;
    contacts.style.display = "flex";
  }

}

function change(id){
  var activeSpans = document.getElementsByClassName("active");
  for (i in activeSpans){
    try{
      activeSpans[i].classList.remove("active");
    }
    catch(err){}
  }
  document.getElementById(id).classList.add("active");

  var activeDivs = document.getElementsByClassName("text_div");
  for (i in activeDivs){
    try{
      activeDivs[i].classList.add("none");
      if (activeDivs[i].id == (id+"_div")){
        activeDivs[i].classList.remove("none");
      }
    }
    catch(err){}
  }
}

window.onload = ()=>{
  change("summary");
}

//Query github api to get repositories and for each repository create a card in the projects section
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/Clint171/repos", true);
xhr.onload = function(){
  var repos = JSON.parse(this.responseText);
  var projects = document.getElementById("projects_div");
  for (i in repos){
    var repo = repos[i];
    var card = document.createElement("div");
    card.classList.add("card");
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = repo.name;
    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = repo.description;
    var cardLink = document.createElement("a");
    cardLink.classList.add("card-link");
    cardLink.innerHTML = "View on Github";
    cardLink.href = repo.html_url;
    cardLink.target = "_blank";
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(cardBody);
    projects.appendChild(card);
  }
}
xhr.send();