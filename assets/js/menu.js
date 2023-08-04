$(document).ready(function(){
    $(".nav").on("click",function(){

        $("header nav ul").toggleClass("open");

    });


});

function myFunction (imgs) {
    let expandImg = document.getElementById('expandedImg');
   
    expandImg.src = imgs.src;
    
    expandImg.parentElement.style.display = 'block';
}