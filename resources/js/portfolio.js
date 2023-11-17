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

function displayProjects(){
  change("projects");
  var projects = document.getElementById("projects_div");
  projects.innerHTML = "";
  // let loadingIcon = document.createElement("iconify-icon");
  // loadingIcon.setAttribute("icon", "eos-icons:bubble-loading");
  // loadingIcon.setAttribute("width", "200");
  // loadingIcon.setAttribute("height", "200");
  // projects.appendChild(loadingIcon);
  class Project{
    constructor(title, description, link, githubLink, image){
      this.title = title;
      this.description = description;
      this.link = link;
      this.githubLink = githubLink;
      this.image = image;
    }
  }
  let projectsList = [];

  let portfolio = new Project("Portfolio", "This website", "https://clint-simiyu.onrender.com" , "https://github.com/Clint171/clint171.github.io" , "./resources/img/portfolio.png");
  let todo = new Project("Todo App", "A simple todo app", "https://clints-todo.onrender.com" ,"https://clint171.github.io/todo-js/" , "./resources/img/todo.png");
  let fileServer = new Project("File Server", "A simple file server", "https://file-server-xp39.onrender.com" , "https://github.com/Clint171/Javascript-File-Server" , "./resources/img/fileserver.png");
  let welfare = new Project("Welfare" , "Landing page for DKUT welfare", "https://clint171.github.io/welfare" , "https://github.com/Clint171/welfare" , "./resources/img/welfare.png");

  projectsList.push(portfolio);
  projectsList.push(todo);
  projectsList.push(fileServer);
  projectsList.push(welfare);

  for (let i = 0; i < projectsList.length; i++){
    let project = projectsList[i];
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("card");
    projectDiv.classList.add("hover-expand");
    let projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.classList.add("card-img-top");
    projectDiv.appendChild(projectImage);
    let projectTitle = document.createElement("h2");
    projectTitle.innerHTML = project.title;
    projectTitle.classList.add("card-title");
    projectDiv.appendChild(projectTitle);
    let projectDescription = document.createElement("p");
    projectDescription.innerHTML = project.description;
    projectDescription.classList.add("card-text");
    projectDiv.appendChild(projectDescription);
    let projectLinks = document.createElement("section");
    projectLinks.classList.add("projectLinks");
    let projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.innerHTML = "View";
    projectLink.classList.add("card-link");
    projectLinks.appendChild(projectLink);
    let githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.innerHTML = "Github";
    githubLink.classList.add("card-link");
    projectLinks.appendChild(githubLink);
    projectDiv.appendChild(projectLinks);
    projects.appendChild(projectDiv);
  
  }
}

//memes
let memeLinks = new Promise((resolve, reject)=>{
  fetch("https://meme-api.com/gimme").then((response)=>{
    resolve(response.json());
    reject("Failed to load memes");
  });
});
memeLinks.then((response)=>{
  var meme = document.getElementById("memeImg");
  meme.src = response.url;
  meme.alt = response.title;
  meme.title = response.title;
  meme.addEventListener("click", ()=>{
    window.open(response.postLink, "_blank");
  });
});
setInterval(()=>{
  let memeLinks = new Promise((resolve, reject)=>{
    fetch("https://meme-api.com/gimme").then((response)=>{
      resolve(response.json());
      reject("Failed to load memes");
    });
  });
  memeLinks.then((response)=>{
    let meme = document.getElementById("memeImg");
    meme.src = response.url;
    meme.alt = response.title;
    meme.title = response.title;
    meme.addEventListener("click", ()=>{
      window.open(response.postLink, "_blank");
    });
  });
}, 12000);


//quotes
fetch("https://api.quotable.io/quotes/random/").then((response)=>{
      response.json().then(data=>{
        data = data[0];
        let quote = document.getElementById("randomQuote");
      quote.innerHTML = data.content+"<br><center>~"+data.author+"</center>";
      });
});

setInterval(()=>{
  fetch("https://api.quotable.io/quotes/random/").then((response)=>{
    response.json().then(data=>{
      data = data[0];
      let quote = document.getElementById("randomQuote");
    quote.innerHTML = data.content+"<br><center>~"+data.author+"</center>";
    });
  });

}, 20000);