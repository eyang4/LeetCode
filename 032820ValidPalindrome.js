const isPalindrome = function(s) { // time: O(n) + l, space: O(1) where n is the length of the string and l is the O() for the toLowerCase function
  const lowercase = s.toLowerCase()
  const allowed = 'abcdefghjiklmnopqrstuvwxyz0123456789'
  let filter = ""
  for (let i = 0; i < lowercase.length; i++) {
      if (allowed.includes(lowercase[i])) filter += lowercase[i]
  }
  let left = 0
  let right = filter.length - 1
  while (left < right) {
      if (filter[left] !== filter[right]) return false
      left++
      right--
  }
  return true
};
