// write the function isAnagram
function isAnagram(test, original) {
  const test2 = test.toLowerCase().split('').sort().join('')
  const original2 = original.toLowerCase().split('').sort().join('')
  return test2 === original2 ? true : false
}

console.log(isAnagram('foefet', 'toffee'))
