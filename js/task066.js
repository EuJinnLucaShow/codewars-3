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
