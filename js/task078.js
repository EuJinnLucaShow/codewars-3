// function factorial(n) {
//   if (n < 0 || n > 12) {
//     throw new RangeError('Input must be between 0 and 12')
//   }
//   let result = 1
//   for (let i = 2; i <= n; i++) {
//     result *= i
//   }
//   return result
// }

/*Якщо введене значення менше 0 або більше 12, RangeErrorвидається a.
Якщо введено 0 або 1, функція повертає 1.
В іншому випадку функція обчислює факториал n-1рекурсивно та множить результат на n.*/

function factorial(n) {
  // Check if input is out of range
  if (n < 0 || n > 12) throw new RangeError()

  // Base case: factorial of 0 and 1 is 1
  if (n <= 1) return 1

  // Recursive case: factorial of n is n times the factorial of n-1
  return n * factorial(n - 1)
}

console.log(factorial(5)) // 0
