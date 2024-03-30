

/*************************************************************
 * This is the script for the homepage of Blue_Stuff
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// PRELOADER

const preloader = document.querySelector('.preloader_class');

window.addEventListener('load' , () => {
    preloader.style.display = "none";
    document.body.classList.remove('off_Flow');
    document.body.classList.add('on_Flow');
});