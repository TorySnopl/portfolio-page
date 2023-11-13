const resume = document.querySelector('.resume');

resume.classList.add('hide');

 function displayText(){
    setTimeout(function(){
        resume.classList.remove('hide');
    },14500);
 }
 
 window.onload = displayText