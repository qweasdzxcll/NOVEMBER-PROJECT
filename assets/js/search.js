let input = document.getElementById('input')
let title = document.getElementById('title')
const res = localStorage.getItem('data')
const date = JSON.parse(res)
document.getElementById("img1").src=date.img1
document.getElementById("img2").src=date.img2
document.getElementById("img3").src=date.img3
document.getElementById("img4").src=date.img4
document.getElementById('text').textContent = date.text


function updateTitle(){
    title.textContent = input.value;
}

