
const wraperContent = document.getElementById('wraperContent');
let button = document.getElementById('gepaButton');
let imageId = 1;
let imageNum = 10;
let id1 = document.getElementById('1');
let id2 = document.getElementById('2');
let id3 = document.getElementById('3');
let id4 = document.getElementById('4');
let left = document.getElementById('left');
let right = document.getElementById('right');
let carouselImg = document.getElementById('carouselImg');
let quantityMargins = 0;
let lengthImages = document.querySelectorAll('img').length;
let colImagSwap = (lengthImages - 4)* 150;

left.addEventListener('click', ()=>{
  quantityMargins -= 150;
  Math.abs(quantityMargins) > colImagSwap ? quantityMargins+=150 : swapCarousel();

})

right.addEventListener('click', ()=>{
  quantityMargins += 150;
  quantityMargins > 0 ? quantityMargins-=150 : swapCarousel();


})



function swapCarousel (){


  let carouselMargin= carouselImg.style.margin = `0 0 0 ${quantityMargins}px`;


}




button.addEventListener('click', () => {

  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      check(imageId, imageNum,data)

    });

});

window.addEventListener('scroll', () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

      // если пользователь прокрутил достаточно далеко (< 100px до конца)
      if (windowRelativeBottom < document.documentElement.clientHeight + 25) {
        // добавим больше данных

        check(imageId, imageNum, data)

      }
    });

});


function check (imageId, imageNum, data) {
 for (imageId; imageId <= imageNum; imageId++) {

    wraperContent.insertAdjacentHTML('beforeend', `
        <div>
        <img src="${data[imageId].thumbnailUrl}">
        </div>
        `);

  }


}
