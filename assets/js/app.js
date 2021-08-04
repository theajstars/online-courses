$(document).ready(() => {
    var scrollBefore = 0
    document.querySelector('body').onscroll = () => {
        const scrolled = window.scrollY;

        if(scrollBefore > scrolled){
            // Scroll Up function
            scrollBefore = scrolled;
            document.querySelector('.nav').classList.remove('nav-none');
        }else{
            // Scroll down function
            scrollBefore = scrolled;
            document.querySelector('.nav').classList.add('nav-none');
        }

    }
})