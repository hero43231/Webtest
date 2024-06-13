document.addEventListener('DOMContentLoaded', function () {
    const mainProductImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail-album img');

    
    window.changeImage = function (thumbnail) {
        mainProductImage.src = thumbnail.src;
    };

    
    window.changeColor = function (color) {
       
    };
});

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.ads-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}


function changeSize(size) {
    document.getElementById('size').value = size;
}

const products = [
    { name: 'Хар Гутал', size: '38', color: 'Black' },
    { name: 'Улаан Гутал', size: '39', color: 'Red' },
    { name: 'Цагаан Гутал', size: '40', color: 'White' },
    { name: 'Цэнхэр Гутал', size: '41', color: 'Blue' },
    // Add more products as needed
];





