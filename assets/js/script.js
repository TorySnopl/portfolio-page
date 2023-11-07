const nextScreen = document.querySelector('.submit');
const wrapper = document.querySelector('.openWrapper');


function addAnimate(){  
   
    wrapper.classList.add('animate__animated');
    wrapper.classList.add('animate__fadeOutLeft');
    wrapper.classList.add('animate__fast');
   
   
    console.log('classes added');
};




nextScreen.addEventListener('click', function(event){

    event.preventDefault();

    addAnimate({once: true});

    window.location.replace('./views/directory.html');
    

});