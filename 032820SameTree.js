const isSameTree = function(p, q) { // time: O(n), space: O(h) where n is the smaller of the total nodes of the two trees and h is the smaller of the heights of the two trees
  const m = p === null
  const n = q === null
  if ((j || k) && !(j && k)) return false // xor logic
  if (m && n) return true
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
