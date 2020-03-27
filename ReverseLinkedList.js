// [https://leetcode.com/problems/reverse-linked-list/]
// REVISED ITERATIVE ---------- ----------

const reverseList = function(head) { // time: O(n) where n is the number of elements in the list, space: O(1)
  if (head === null) return head
  let newNext = null
  let oldNext = head.next
  while (head.next !== null) {
      head.next = newNext
      newNext = head
      head = oldNext
      oldNext = head.next
  }
  head.next = newNext
  return head
};

// ORIGINAL ITERATIVE ---------- ----------

const reverseList = function(head) { // time: O(n), space: O(n) where n is the number of elements in the list
  if (head === null) return head

  const nodes = [head]
  while (head.next !== null) {
      nodes.push(head.next)
      head = head.next
  }

  const newHead = head

  while (nodes.length > 0) {
      head.next = nodes.pop()
      head = head.next
  }
  head.next = null

  return newHead
};

// REVISED RECURSIVE ---------- ----------

const reverseList = function(head) { // time: O(n) where n is the number of elements in the list, space: O(1)
  if (head === null) return head
  let newNext = null
  let oldNext = head.next
  while (head.next !== null) {
      head.next = newNext
      newNext = head
      head = oldNext
      oldNext = head.next
  }
  head.next = newNext
  return head
};

// ORIGINAL RECURSIVE ---------- ----------

const reverseList = function(head) { // time: O(n), space: O(n) where n is the number of elements in the list
  if (head === null) return head
  const recursiveReverseList = function(head, next) {
      if (head.next === null) {
          head.next = next
          return head
      }
      const nextNode = head.next
      head.next = next
      return recursiveReverseList(nextNode, head)
  }
  return recursiveReverseList(head, null)
};
