const dropDownBtn = document.querySelector('.menu__dropdown_btn'),
      dropDownList = document.querySelector('.menu__dropdown_list'),
      dropDownListItems = dropDownList.querySelectorAll('.menu__dropdown_list-item'),
      hamburger  = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close');

// Hamburger 
hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu__active');
    menuClose.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu__active');
    menuClose.classList.remove('active');
});

// dropdown
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


// Swiper JS
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


// Getting the data from dummyjson

document.addEventListener("DOMContentLoaded", () => { 
    async function getResponse() {
        let res = await fetch('https://dummyjson.com/products/');
        let data = await res.json();
        data = data.products;

        let slider = document.querySelector('.main__swiper-wrapper.swiper-wrapper')
    
        for (let key in data) {
            let newData = data[key];
            // console.log(newData)
            if (newData.price <= 50) {
                const priceMoreThanFifty = {
                    title: newData.title,
                    price: newData.price
                };
                console.log(priceMoreThanFifty);
                // console.log(newData.title);
                // console.log(newData.price);
                // for (let value in newData) {
                //     console.log(newData[value])
                // }
                slider.innerHTML += `
                    <div class="main__slide swiper-slide">
                        <div class="main__slider-quote">“</div>
                        <div class="main__slider-name">${priceMoreThanFifty.title}</div>
                        <div class="main__slider-price">${priceMoreThanFifty.price}</div>
                    </div>
                `;
            }
        }
    }
    getResponse();
});



