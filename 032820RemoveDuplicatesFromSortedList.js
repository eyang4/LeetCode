const deleteDuplicates = function(head) { // time: O(n) where n is the number of elements in the list, space: O(1)
  if (head === null) return head
  let pointer = head
  while (pointer.next !== null) {
      if (pointer.val === pointer.next.val) {
          pointer.next = pointer.next.next
      }
      else pointer = pointer.next
  }
  return head
};
