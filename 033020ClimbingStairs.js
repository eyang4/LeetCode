const climbStairs = function(n) { // time: O(n), space: O(n)
  const steps = [1, 2]
  if (n === 0) return 0
  if (n <= 2) return steps[n - 1]
  else {
      while (!steps[n - 1]) {
          steps.push(steps[steps.length - 2] + steps[steps.length -1])
      }
      return steps[n - 1]
  }
};
