const passInput = document.querySelector('#pass-input');/*---*/
const togglePasswordVisibility = document.querySelector('#toggle-password-visibility');
 
 togglePasswordVisibility.addEventListener('click', function (e){
     const type = (passInput.getAttribute('type') === 'password') ? 'text' : 'password'; 

     passInput.setAttribute('type', type);
 });


 $(document).ready(function () {
    // Evenimentul de logare si modificare a paginii
  
    $("#btnlogin").click(function () {
            if (
        $("#email").val() == "mail@example.com" &&
        $(passInput).val() == "parola"
      ) {
                window.location.href = "user.html";
      } else {
        alert($("#email").val() + " " + $(passInput).val());
      }
    });
  
    // Evenimentul de completare a datelor personale in pagina de utilizator
  });