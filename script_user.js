const imgDiv = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadPhoto = document.querySelector("#upload-photo");
const btnSave = document.querySelector("#btn-save");/*buton*/

$(document).ready(function () {
    btnSave.addEventListener("click", function(){
        $("#p1").text("Name: " + $("#firstName").val() + " " + $("#lastName").val());
        $("#p2").text("Country: " + $("#country").val());
        $("#p3").text($("#floatingTextarea").val());
    });
  });

file.addEventListener("change", function(){ 
    const choosedFile = this.files[0];

    if(choosedFile) {
        const reader = new FileReader();

        reader.addEventListener("load", function(){
            img.setAttribute("src", reader.result);
            uploadPhoto.style.display ="none";
        });

        reader.readAsDataURL(choosedFile);
    }
});




  