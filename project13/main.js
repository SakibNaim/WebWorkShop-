const menuBtn=document.getElementById('menu-btn');
const navLink=document.getElementById('nav-link');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click',(e) => {
    navLink.classList.toggle('open');

    const isOpen = navLink.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen? 'ri-close-line':'ri-menu-line');


});

navLink.addEventListener('click', (e )=>{
    navLink.classList.remove('open');
    menuBtnIcon.setAttribute('class','ri-menu-line');

});

// animation throgh js
const scrollRevealOption = {
    distance:"60px",
    origin:"bottom",
    duration:1000,

};

ScrollReveal().reveal('.header_container img', {
    ...scrollRevealOption,
});
ScrollReveal().reveal('.header_container h1', {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.header_container p', {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal('.header_btn', {
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal('.project_card', {
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal('.experience_list li', {
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal('.footer_container h2', {
    ...scrollRevealOption,
    
});
ScrollReveal().reveal('.footer_container p', {
    ...scrollRevealOption,
    delay:500,
    
});
ScrollReveal().reveal('.footer_container .mail_to', {
    ...scrollRevealOption,
    delay:1000,
    
});
ScrollReveal().reveal('.footer_socials', {
    ...scrollRevealOption,
    delay:1500,
    
});








