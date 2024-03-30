document.addEventListener('DOMContentLoaded', function(){
    var myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(event) {
event.preventDefault();
alert("Form submitted successfully")
});
});