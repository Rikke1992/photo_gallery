
const wraperContent = document.getElementById('wraperContent');
let button = document.getElementById('gepaButton');
let ferstVariable = 1;
let secondVariable = 10;



button.addEventListener('click', () => {

  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      check(ferstVariable, secondVariable,data)

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

        check(ferstVariable, secondVariable, data)

      }
    });

});


function check (ferstVariable, secondVariable, data) {
 for (ferstVariable; ferstVariable <= secondVariable; ferstVariable++) {

    wraperContent.insertAdjacentHTML('beforeend', `
        <div>
        <img src="${data[ferstVariable].thumbnailUrl}">
        </div>
        `);

  }
  secondVariable = secondVariable + 1;
console.log(secondVariable, ferstVariable )
}
