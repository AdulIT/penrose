const dropDownBtn = document.querySelector('.menu__dropdown_btn');
const dropDownList = document.querySelector('.menu__dropdown_list');
const dropDownListItems = dropDownList.querySelectorAll('.menu__dropdown_list-item');


dropDownBtn.addEventListener('click', function() {
    dropDownList.classList.toggle('menu__dropdown_list--visible');
});

dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownList.classList.remove('menu__dropdown_list--visible');
    });
});

document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.menu__dropdown_btn')) {
        dropDownList.classList.remove('menu__dropdown_list--visible');
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownList.classList.remove('menu__dropdown_list--visible');
    }
});

new Swiper('.main__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
});

async function getResponse() {
    let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
    let data = await res.json();

    console.log(data);
}

getResponse();