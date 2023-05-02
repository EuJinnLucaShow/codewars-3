/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/

function capitals(word) {
  const arrs = word.split('')
  let newArr = []
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] === arrs[i].toUpperCase()) {
      newArr.push(i)
    }
  }
  return newArr
}

console.log(capitals('CodEWaRs'))
