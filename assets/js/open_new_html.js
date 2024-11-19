const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'
let input = document.getElementById('input')
let title = document.querySelector('h1')
let submit = document.getElementById('submit')
let text = document.querySelector('.main__text')
let f

const Open = async (id) => {
    await fetch(url)
        .then(data => data.json())
        .then(response => DataRes = response[id])
    localStorage.setItem('data', JSON.stringify(DataRes))
    window.location.href = 'search_attr.html'
}

const search = () => {
    url.forEach(element => {
        if (element == input.value) {
            
        }
    });
}


function updateTitle() {
    title.textContent = input.value;
}





// function open() {
//     window.location.href = 'search_attr.html'
// }

// card.forEach(card => {
//     card.addEventListener('click', function() {
//         const cardId = card.id
//     })
// })

// function updateTitle(){
//     title.textContent = input.value;
// }









    // document.getElementById("img1").src=f[img1]
    // document.getElementById("img2").src=f[img2]
    // document.getElementById("img3").src=f[img3]
    // document.getElementById("img4").src=f[img4]
    // text.textContent = f['text']















// const card1 = document.getElementById('card1')
// const card2 = document.getElementById('card2')
// const card3 = document.getElementById('card3')
// const card4 = document.getElementById('card4')
// const card5 = document.getElementById('card5')
// const card6 = document.getElementById('card6')
// const card7 = document.getElementById('card7')
// const card8 = document.getElementById('card8')
// const card9 = document.getElementById('card9')
// const card10 = document.getElementById('card10')
// const card11 = document.getElementById('card11')
// const card12 = document.getElementById('card12')
// const card13 = document.getElementById('card13')
// const card14 = document.getElementById('card14')
// const card15 = document.getElementById('card15')
// const card16 = document.getElementById('card16')
// const card17 = document.getElementById('card17')
// const card18 = document.getElementById('card18')
// const card19 = document.getElementById('card19')
// const card20 = document.getElementById('card20')
// const card21 = document.getElementById('card21')
// const card22 = document.getElementById('card22')
// const card23 = document.getElementById('card23')
// const card24 = document.getElementById('card24')




// const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'
// const text = document.getElementById('abc')
// const input = document.getElementById('input')
// let xhr = new XMLHttpRequest();

// text.textContent = input.value
// // if (search == 3) {
// //     axios.get(url)
// //     .then(response => console.log(response.data[2]))
// // }

// axios.get(url)
// .then(response => console.log(response.data[0]))




// if (input.value == 'Christ the Redeemer Statue') {
//     document.getElementById("img1").src="https://s.iimg.su/s/10/AjHexbHRVVNOJFgHM2g8CIjVoqqeUDACQ1x6SsLa.png";
//     document.getElementById("img2").src="https://s.iimg.su/s/10/o0Sy8v3TD8XyyxQJ1M316ouMWU0SnBC4yAHnH30e.png";
//     document.getElementById("img3").src="https://s.iimg.su/s/10/38UVhiuKNqozGJyKWLFsqITxjTbvAlHkw5d7U8Ow.png";
//     document.getElementById("img4").src="https://s.iimg.su/s/10/xHVEcxK7RzFf4TpVFJUhFeSny9L9z48DSqJE3G6p.png";
//     text.textContent = 'Важнейший символ города, почитаемый не только жителями, но и гостями города — это 38-метровый монумент Спасителя, расположенный на самой вершине горы Корковадо.Ежегодно миллионы туристов совершают восхождение на гору высотой более 700 метров к подножию монумента.'
// }


// document.getElementById('input').addEventListener(submit, function(event) {
//     event.preventDefault();
//     title.textContent = input.value
// });

// console.log(input.value)









// if (search == True) {
//     xhr.open('GET', url, true);
//     xhr.send();
// }
