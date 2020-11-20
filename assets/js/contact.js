$('#book-btn').on('click', function () {
    $('#formModal').modal('show');    
});

$('#myForm').on('submit', function (email) {
$('#emailModal').modal('show');
    email.preventDefault();
});
