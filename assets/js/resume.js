const resume = document.querySelector('.resume');

resume.classList.add('hide');

 function displayText(){
    setTimeout(function(){
        resume.classList.remove('hide');
    },14000);
 }
 
 window.onload = displayText