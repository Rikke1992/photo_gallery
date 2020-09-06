
// var request = new XMLHttpRequest ()
// console.log (request.open (
//   'GET',
//   'https://jsonplaceholder.typicode.com/users'
// ))
const inputEl = document.getElementById('file-selector');
const wraperContent = document.getElementById('wraperContent');
let gepaButton = document.getElementById('gepaButton');
let gepaImage = document.getElementById('gepaImage');
let n = 1;
let ten = 10;

window.addEventListener('scroll', ()=>{
  populate()

} )

gepaButton.addEventListener('click', ()=>{

  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>{
      return response.json();})
    .then(data=>{
      populate()
      for (n; n<= ten ; n++) {
        console.log(data[n].thumbnailUrl)
        wraperContent.insertAdjacentHTML('beforeend', `
        <div>
        <img src="${data[n].thumbnailUrl}">
        </div>
        `)

      }
      ten = ten +10
    })

})

window.addEventListener('scroll', ()=>{
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>{
      return response.json();})
    .then((data)=>{
      for (n; n<= ten ; n++) {
        wraperContent.insertAdjacentHTML('beforeend', `
      <div>
        <img src="${data[1].thumbnailUrl}">
        </div>
      `)
      }
      ten = ten +10
    })

})








function populate() {


    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    // если пользователь прокрутил достаточно далеко (< 100px до конца)
    if (windowRelativeBottom < document.documentElement.clientHeight + 25) {
      // добавим больше данных
      console.log('opaa')

  }
}
