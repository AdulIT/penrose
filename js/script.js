const dropDownBtn = document.querySelector('.menu__dropdown_btn'),
      dropDownList = document.querySelector('.menu__dropdown_list'),
      dropDownListItems = dropDownList.querySelectorAll('.menu__dropdown_list-item'),
      hamburger  = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu__active');
    menuClose.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu__active');
    menuClose.classList.remove('active');
});


dropDownBtn.addEventListener('click', () => {
    dropDownList.classList.toggle('menu__dropdown_list--visible');
});

dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownList.classList.remove('menu__dropdown_list--visible');
    });
});

document.addEventListener('click', (e) =>  {
    if (e.target !== document.querySelector('.menu__dropdown_btn')) {
        dropDownList.classList.remove('menu__dropdown_list--visible');
    }
});

document.addEventListener('keydown', (e) => {
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

// async function getResponse() {
//     let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
//     let data = await res.json();

//     console.log(data);
// }

// getResponse();