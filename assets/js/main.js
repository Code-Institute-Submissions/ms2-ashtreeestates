//text changer on homepage

var properties = ["Clifton","Redland"," the City Centre","Cotham","Hotwells"];
var currentProperty= 0;
var property = document.getElementById('property-locations')
function ChangeText(){
    document.getElementById('property-locations').innerHTML = properties[currentProperty];          
            
        if(currentProperty < properties.length -1)
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

//send email with emailJS

function sendMail(contactForm){
    emailjs.send("adamdelancey", "ash-tree-email", {
        "from_name": contactForm.inputName.value,        
        "from_email": contactForm.inputEmail.value,
        "from-number": contactForm.inputPhone.value,
        "project_request": contactForm.projectSummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
};

// Modal pop up when form submitted

$('#myForm').on('submit', function (email) {
    $('#emailModal').modal('show');
    email.preventDefault();
});