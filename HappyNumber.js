// REVISION ---------- ----------

const isHappy = function(n) { // time: O(a * b), space: O(a) where a is the number of iterations before resolving at a 1 or in a loop
  const sumSquaresOfDigits = (n) => { // time: O(b) where b is the number of digits, space: O(1)
      let sum = 0
      while (n > 0) {
          const currentDigit = n % 10
          sum += currentDigit * currentDigit // Math.pow(num, exponent)
          n = Math.floor(n / 10)
      }
      return sum
  }

  if (n <= 0) return false
  const history = []
  while (!history.includes(n)) {
      if (n === 1) return true
      history.push(n)
      n = sumSquaresOfDigits(n)
  }
  return false
};

// ORIGINAL ---------- ----------

const isHappy = function(n) { // time: O(a * b), space: O(a) where a is the number of iterations before resolving at a 1 or in a loop
  const sumSquaresOfDigits = (n) => { // time: O(b) where b is the number of digits, space: O(1)
      let sum = 0
      const numStr = n.toString()
      for (let i = 0; i < numStr.length; i++) {
          const digit = parseInt(numStr[i])
          sum += digit * digit // Math.pow(base, exponent)
      }
      return sum
  }

  if (n <= 0) return false
  const history = []
  while (!history.includes(n)) {
      if (n === 1) return true
      history.push(n)
      n = sumSquaresOfDigits(n)
  }
  return false
};
