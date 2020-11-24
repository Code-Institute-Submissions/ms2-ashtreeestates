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

//modal pop up for book viewing button

$('#book-btn').on('click', function () {
    $('#formModal').modal('show');    
});


