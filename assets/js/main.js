/*============== Search ============*/
let searchForm = document.querySelector('.search_form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    menuBar.classList.remove('active');
}

/*============= Cart ============*/
let shoppingCart = document.querySelector('.shopping_cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    menuBar.classList.remove('active');
}

/*============= Login ============*/
// let loginForm = document.querySelector('.login_form');

// document.querySelector('#login-btn').onclick = () => {
//     loginForm.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     menuBar.classList.remove('active');
// }

/*============= Menu ============*/
let menuBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    menuBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}
// Remove active on scroll
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menuBar.classList.remove('active');
}

/*================ PRODUCT SWIPER ==============*/
var swiper = new Swiper(".product_slider",{
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

/*============== REVIEW SWIPER ===============*/
var swiper = new Swiper(".review_slider",{
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});