const btnOpen = document.querySelector('.header__burgerbtn')
const burger = document.querySelector('.header__burger')
const btnClose = document.querySelector('.header__burger-close')

function Open() {
    burger.style.display = 'block';
    btnOpen.style.display = 'none';
}

function Close() {
    burger.style.display = 'none'
    btnOpen.style.display = 'block';
}

btnOpen.onclick = Open;
btnClose.onclick = Close;