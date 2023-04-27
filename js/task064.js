function lastPetalsPhrase(n) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]
  const index = (n - 1) % phrases.length
  return phrases[index]
}

console.log(lastPetalsPhrase(12))
console.log(lastPetalsPhrase(10))
console.log(lastPetalsPhrase(13))
