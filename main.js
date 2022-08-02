(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
 }());

const burgerMN = document.querySelector(".header__burger")
const headerNav = document.querySelector(".menu")
const menuLink = document.querySelector(".menu__item-link")

burgerMN.addEventListener("click",function(){
    if(headerNav.classList.contains("open")){
        headerNav.classList.remove("open");
        burgerMN.classList.remove("active");
        menuLink.classList.remove("btn-red")
    }else{
        headerNav.classList.add("open");
        burgerMN.classList.add("active");
    }
})