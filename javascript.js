/*jshint asi: true, esnext: true, browser: true, node: true, global i*/
let svgs = document.getElementsByTagName("svg"),
    groups = svgs[0].querySelectorAll("g"),
    width = window.innerWidth,
    height = window.innerHeight,
    modals = [],
    spans = [];
const imgContainer = document.getElementById("img-container"),
    skillsContainer = document.getElementById("skills-container"),
    skillsListElements = document.getElementsByClassName("skillsList"),
    skillsListSpanElements = Array.from(document.getElementsByTagName("span")).slice(0, 3),
    titleLong = document.getElementById("title-long")  ;

//things to do if the window width is over 500px
console.log(width)
if(width > 500 && width>height){
  svgs[0].parentNode.removeChild(svgs[0]) // remove first svg
  groups = svgs[0].querySelectorAll("g")  // get gs from current
  initialRender(); //sets off initial title render on gs
  
  let resume = document.getElementById("resumeLink")
  let contact = document.getElementById("contactLink")
  skillsListElements[3].innerHTML = "<span>Data Analysis</span>"    
  skillsContainer.innerHTML = skillsListElements[1].outerHTML + "<br>" + skillsListElements[2].outerHTML + skillsListElements[3].outerHTML + "<div       class='align-right skillsList'><span class='align-right' id='resumeLink'><a href='resume.html'>Resume</a></span></div>" + "<div class='align-right skillsList'><span class='align-right' id='contactLink'><a href='mailto:david.w.thompson@utexas.edu?Subject=Hello%20Dave' target='_top'>Contact</a></span></div>";
  document.getElementById("footer").outerHTML = "";
  setTimeout(function(){
        secondRender();
        Array.from(skillsListElements).forEach(function(element){
            element.classList += " appear"
        });  
      

      
  }, 4200) // makes everything appear on page
  //setTimeout(function(){illuminateElements(skillsListElements, " appear")}, 5500); //sets off skills list appearance
  
    
} else { // do if cell phone
    titleLong.parentNode.removeChild(titleLong);
    setTimeout(function(){illuminateElements(skillsListSpanElements, " colorFade")}, 6000); //sets off skills list item highlights
    setTimeout(function(){illuminateElements(skillsListElements, " fadeIn")}, 5500); //sets off skills list appearance
    setTimeout(function(){secondRender();}, 4200)
}



function initialRender(callback) {
  groups[0].childNodes[0].setAttribute("stroke-dasharray", length)              // changes stroke-dasharray prop
  groups[0].childNodes[0].setAttribute("stroke-dashoffset", length)                 // changes stroke-offset prop
  groups[0].childNodes[0].classList.add("animated")                             // adds a class for the animation

  function triggerDelayedAnimation(time, maxIterations) {
      setTimeout(function() {                                                  // sets a timeout for delay
        let length = groups[i].childNodes[0].getTotalLength();
        groups[i].childNodes[0].setAttribute("stroke-dasharray", length)            // changes stroke-dasharray prop
        groups[i].childNodes[0].setAttribute("stroke-dashoffset", length)           // changes stroke-offset prop
        groups[i].childNodes[0].classList.add("animated")                           // adds a class for the animation
        i+=1;
        if(i < maxIterations) {
          triggerDelayedAnimation(time, maxIterations);
        }
      }, time)
    }

  let i = 1;
  triggerDelayedAnimation(100, 22); // part 1

  setTimeout(function(){ // 2nd line animation
    i = 22;
    triggerDelayedAnimation(200, 28)}, // part 2
    2500);
  }


function secondRender() {
    groups[28].childNodes[0].classList.add("animated");
    imgContainer.className += " appear" //makes picture appear
    skillsListElements.className += " appear";
    skillsContainer.className += " appear";
    skillsListSpanElements.className += " appear";

}

function illuminateElements(elements, className) {
    for (var i=0; i<elements.length; i++) {
        (function(ind) {
            setTimeout(function(){
                elements[ind].className += className //adds fade-in class as timers go off
            }, 1200 * ind);
        })(i);
    }
}

initialRender(); //sets off initial title render

for (i=0; i < 3 ; i++){
    modals.push(document.getElementById("modal-" + i))
    spans.push(document.getElementsByClassName("close")[i]); //this may not work (may need unique id)
}

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
spans.forEach(function(i){
    return i.onclick = function(){
        modals[0].style.display = "none";
        modals[1].style.display = "none";
        modals[2].style.display = "none";
    }
});

// Function to illuminate the modal
modalAction0 = function(num) {
    modals[0].style.display = "block";
},
modalAction1 = function(num) {
    modals[1].style.display = "block";
},
modalAction2 = function(num) {
    modals[2].style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modals[0]) {
        modals[0].style.display = "none";
    } else if (event.target == modals[1]) {
       modals[1].style.display = "none";
    } else if (event.target == modals[2]) {
        modals[2].style.display = "none";
    }
}

