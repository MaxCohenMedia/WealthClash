// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function () {
  $('#cancel').click(function(){
    window.location.href = '../../index.html';
  });

  $('#login').click(function(){
    //gets the inputed email and password
    var email = $("#emailId").val();
    var password = $("#pwdId").val();

    //checks that both fields are filled in
    if(email == '' || password == ''){
      alert("Please fill in all fields!");
      return false;
    }
    //sends the email and password information to setUser.php, which sets said user to be "active".
    //Then validaotr.php, which is validate that there is an active user
    $.ajax({
      type: 'POST',
      url: 'logInResources/setUser.php',
      data: { email: email, pwd: password },
      success: function(response) {
        window.location.href = 'logInResources/validator.php';
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
    return false;
  });
});