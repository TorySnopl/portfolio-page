const nextScreen = document.querySelector('.submit');
const wrapper = document.querySelector('.openWrapper');

function addAnimate(){  
    wrapper.classList.add('animate__animated animate__fadeOutLeft animate__slow');
};



nextScreen.addEventListener(onclick, function(event){
    event.preventDefault();
    addAnimate({once: true});
    



})