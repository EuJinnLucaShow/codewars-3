/*Цей код виконає заміну символів '5', '0' та '1' в рядку string на відповідні символи 'S', 'O' та 'I', і поверне результат 'SINGAPORE'. Регулярний вираз /[501]/g шукає всі входження символів '5', '0' та '1' в рядку string. Функція, передана в метод replace, виконує заміну відповідно до значень символів, знайдених регулярним виразом.*/

// function correct(string) {
//   return string.replace(/[501]/g, function (match) {
//     if (match === '5') {
//       return 'S'
//     } else if (match === '0') {
//       return 'O'
//     } else {
//       return 'I'
//     }
//   })
// }

function correct(string) {
  return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
}

console.log(correct('51NGAP0RE'))
