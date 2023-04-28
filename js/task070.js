/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/

function calculateScore(word) {
  // Calculates the score of a word.
  let score = 0
  for (let i = 0; i < word.length; i++) {
    score += word.charCodeAt(i) - 96
  }
  return score
}

function highestScoringWord(str) {
  // Splits the input string into a list of words.
  const words = str.split(' ')

  let highestScoringWord = ''
  let highestScore = 0

  // Calculates the score of each word and keeps track of the highest-scoring word and its score.
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const score = calculateScore(word)
    if (score > highestScore) {
      highestScoringWord = word
      highestScore = score
    }
  }

  // Returns the highest-scoring word.
  return highestScoringWord
}

console.log(highestScoringWord('man i need a taxi up to ubud')) // 'taxi'
console.log(highestScoringWord('what time are we climbing up the volcano')) //'volcano',
console.log(highestScoringWord('take me to semynak')) // 'semynak'
console.log(highestScoringWord('aa b')) // 'aa'
console.log(highestScoringWord('b aa')) // 'b'
console.log(highestScoringWord('bb d')) // 'bb'
console.log(highestScoringWord('d bb')) // 'd'
console.log(highestScoringWord('aaa b')) // 'aaa'
