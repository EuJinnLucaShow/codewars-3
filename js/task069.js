function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const lowercaseString = string.toLowerCase()
  for (let i = 0; i < alphabet.length; i++) {
    if (lowercaseString.indexOf(alphabet[i]) === -1) {
      return false
    }
  }
  return true
}
