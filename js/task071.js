const rps = (player1, player2) => {
  if (player1 === player2) {
    return 'Draw!'
  } else if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'paper' && player2 === 'rock') ||
    (player1 === 'scissors' && player2 === 'paper')
  ) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
}

console.log(rps('rock', 'scissors')) // getMsg(1)
console.log(rps('scissors', 'paper')) // getMsg(1)
console.log(rps('paper', 'rock')) // getMsg(1)
