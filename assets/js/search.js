const input = document.getElementById('input');
const title = document.getElementById('title');
const res = localStorage.getItem('data');
const date = JSON.parse(res);


document.getElementById("img1").src=date.img1;
document.getElementById("img2").src=date.img2;
document.getElementById("img3").src=date.img3;
document.getElementById("img4").src=date.img4;
document.getElementById('text').textContent = date.text;
document.getElementById('title').textContent = date.title;
const map = document.getElementById('map').innerHTML += `<iframe src='${date.map}' width="822" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
