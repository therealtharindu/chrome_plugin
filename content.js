const inputFile = document.getElementById("inputFile");
const image_preview_container = document.getElementById("image_preview");
const image = image_preview_container.querySelector(".image");
const default_text = image_preview_container.querySelector(".default_text");

inputFile.addEventListener("change",function() {
    const file = this.files[0];
    
    if(file){
        const reader = new FileReader();

        default_text.style.display = "none";
        image.style.display = "block";

        reader.addEventListener("load", function(){
            image.setAttribute("src", this.result);
        })

        reader.readAsDataURL(file);

    }else{
        default_text.style.display = null;
        image.style.display = null;
        image.setAttribute("src", "");
    }
});



$(document).ready(function(){
    $('#login').click(function(){
        chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
            // Use the token.
          });
    })

});
