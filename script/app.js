
const wraperContent = document.getElementById('wraperContent');
let button = document.getElementById('gepaButton');
let imageId = 0;
let imageNum = 9;
let left = document.getElementById('left');
let right = document.getElementById('right');
let carouselImg = document.getElementById('carouselImg');
let quantityMargins = 0;
let lengthImages = document.querySelectorAll('.imageIcon').length;
let colImagSwap = (lengthImages - 4)* 150;
let res = [];






left.addEventListener('click', ()=>{
  quantityMargins -= 150;
  Math.abs(quantityMargins) > colImagSwap ? quantityMargins+=150 : swapCarousel();
  console.log('left')

})




right.addEventListener('click', ()=>{
  quantityMargins += 150;
  quantityMargins > 0 ? quantityMargins-=150 : swapCarousel();


})


function swapCarousel (){


 let carouselMargin= carouselImg.style.margin = `0 0 0 ${quantityMargins}px`;

  return carouselMargin

}



button.addEventListener('click', async function EventButton(){

    let fetches = await fetch('https://jsonplaceholder.typicode.com/photos');
    let jsone = await fetches.json();

    printImageFromSite(imageId, imageNum,jsone)
    imageId+=10;
    imageNum+=10
    lengthImages = document.querySelectorAll('.imageIcon').length;
    colImagSwap = (lengthImages - 4)* 150;
  }
//   () => {
//
//   fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((response) => {
//       return response.json();
//     })
//     .then(data => {
//
//       printImageFromSite(imageId, imageNum,data)
//       imageId+=10;
//       imageNum+=10
//
//
//     });
//
// }
);

// window.addEventListener('scroll', () => {
//   fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
//
//       // если пользователь прокрутил достаточно далеко (< 25px до конца)
//       if (windowRelativeBottom < document.documentElement.clientHeight + 25) {
//         // добавим больше данных
//
//         check(imageId, imageNum, data)
//
//       }
//     });
//
// });


// function check (imageId, imageNum, data) {
//  for (imageId; imageId <= imageNum; imageId++) {
//
//     wraperContent.insertAdjacentHTML('beforeend', `
//         <div class="data[imageId].id">
//         <p>${data[imageId].id}</p>
//         <img src="${data[imageId].thumbnailUrl}">
//         </div>
//         `);
//
//
//   }
//
//
// }

function printImageFromSite (imageId, imageNum, data) {
 for (imageId; imageId <= imageNum; imageId++) {

   carouselImg.insertAdjacentHTML('beforeend', `
        <div class="imageIcon">
                <img src="${data[imageId].thumbnailUrl}">
        </div>
        `);




  }


}
