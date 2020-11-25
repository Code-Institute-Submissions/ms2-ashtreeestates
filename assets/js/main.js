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



