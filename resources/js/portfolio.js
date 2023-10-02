
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
