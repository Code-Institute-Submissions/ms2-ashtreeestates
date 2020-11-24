//text changer on homepage


var areas = ["Clifton","Redland"," the City Centre","Cotham","Hotwells"];
var currentProperty= 0;
var property = document.getElementById('property-locations')
function ChangeText(){
    document.getElementById('property-locations').innerHTML = areas[currentProperty];          
            
        if(currentProperty < areas.length -1)
            {        
                currentProperty++;
            }
        else
            {
                currentProperty = 0;
            }
            setTimeout("ChangeText();",2000);
    }        
ChangeText();

//see more section hidden when page loads
$(document).ready(function () {
$("#see-more").addClass("hidden");
});

//button to see more properties

$("#see-more-btn").click(function(){
    $("#see-more").fadeIn();
    $("#see-more-btn").addClass("hidden")
});

$("#see-less-btn").click(function(){
    $("#see-more").fadeOut();
    $("#see-more-btn").removeClass("hidden")
});

//back to top function:

mybutton = document.getElementById("topBtn");

// When the user scrolls down 300px from the top of the document, show the button. also includes sticky navbar function
window.onscroll = function() {
    scrollFunction();
    stickyFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//sticky nav function

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

