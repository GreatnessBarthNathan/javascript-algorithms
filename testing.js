function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(3))
// console.log(recursiveFibonacci(6))

function iterativeFibonacci(n) {
  let fib = [0, 1]

  if (n < 2) {
    return n
  }

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib[n]
}

console.log(iterativeFibonacci(0))
console.log(iterativeFibonacci(1))
console.log(iterativeFibonacci(3))
console.log(iterativeFibonacci(6))
