
// When the user scrolls the page, execute myFunction
window.onscroll = ()=>{stick()};

// Get the navbar
var navbar = document.getElementById("topnavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
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
  var divs = document.getElementsByClassName("text_div");
  for (j in divs){
    try{
      if (divs[j].id == id+"_div"){
        divs[j].classList.add("flex");
        divs[j].classList.remove("none");
      }
      else{
        divs[j].classList.add("none");
        divs[j].classList.remove("flex");
      }
    }
    catch(err){}
  }

}
window.onload = ()=>{
  change("summary");
}