// Get the navbar
var navbar = document.getElementById("topnavbar");


// Show or hide the navbar
function showNav() {

  if (navbar.classList.contains("hidden")) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
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
    contacts.style.display = "flex";
    contacts.style.opacity = 0.9;
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

let getProjects = new Promise((resolve, reject)=>{
  //Query github api to get repositories and for each repository create a card in the projects section
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/Clint171/repos", true);
  xhr.onload = function(){
    resolve(JSON.parse(this.responseText));
    reject("Failed to load projects");
  }
  xhr.send();
});


function displayProjects(){
  change("projects");
  var projects = document.getElementById("projects_div");
  let loadingIcon = document.createElement("iconify-icon");
  loadingIcon.setAttribute("icon", "eos-icons:bubble-loading");
  loadingIcon.setAttribute("width", "200");
  loadingIcon.setAttribute("height", "200");
  projects.appendChild(loadingIcon);

  setTimeout(()=>{
  getProjects.then((response)=>{
    projects.innerHTML = "";
    var repos = response;
    for (i in repos){
      var repo = repos[i];
      alert(repo);
      //Find image url in the repo by looking in the root directory for a file with the name project_img.png
      var img = "https://raw.githubusercontent.com/Clint171/"+repo.name+"/master/project_img.png";
      //Check if the image exists
      var http = new XMLHttpRequest();
      http.open('HEAD', img, false);
      http.send();
      //If the image does not exist, skip this repo
      if (http.status == 404){
        continue;
      }
      //create image element
      var imgElement = document.createElement("img");
      imgElement.src = img;
      imgElement.classList.add("card-img-top");
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
      card.appendChild(imgElement);
      projects.appendChild(card);

    }
  },
  (error)=>{
    alert("Projects failed to load");
    let failed = document.createElement("p");
    failed.innerHTML = "Failed to load projects";
    projects.appendChild(failed);
    console.log(error);
  });
  }, 10);
}
  async function displaySummary(){

  }
  
  async function displayAbout(){
  
  }
  
  async function displaySkills(){
  
  }
  
  async function displayAcadmics(){
  
  }
  
  async function displayCertificates(){
  
  }
  
  async function displayContacts(){
  
  }