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

// https://s.iimg.su/s/11/6l1YGOA4UTtqmY86cCFeqYMuJkFrUf7X4iM97rse.png - крестик
// https://s.iimg.su/s/11/2i1tCX6V0atlpzxmoJE4STXIuSYfGd3QHoWXeeKy.png - бургер
// https://s.iimg.su/s/11/wo5IbRGRNOT62l4LzZvIXpZYwx0xqTmjbSU70iP7.png - вправо
// https://s.iimg.su/s/11/xnkSRhEHMRW6hkZtGmE3SVBuGI54B69xYZ9YOxyN.png - влево
// https://s.iimg.su/s/11/iJ4U9lMEYr2vCWzsHus5oJa92FT6ac2ueJs0LwgS.jpg - contact