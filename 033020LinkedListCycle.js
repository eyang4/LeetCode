const hasCycle = function(head) { // time: O(n) where n is the number of elements, or unique elements in the case of a cycle, space: O(1)
  if (head === null) return false
  if (head.next === null) return false
  let slow = head.next
  let fast = head.next.next
  while (slow !== fast) {
      if (fast === null) return false
      if (fast.next === null) return false
      slow = slow.next
      fast = fast.next.next
  }
  return true
};
