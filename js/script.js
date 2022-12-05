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