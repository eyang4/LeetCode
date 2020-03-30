const getIntersectionNode = function(headA, headB) { // time: O(m + n), space: O(m + n) where m and n are the number of elements in each list
  const listA = []
  while (headA !== null) {
      listA.push(headA)
      headA = headA.next
  }

  const listB = []
  while (headB !== null) {
      listB.push(headB)
      headB = headB.next
  }

  const minLength = Math.min(listA.length, listB.length)
  for (let i = 0; i < minLength; i++) {
      if (listA[listA.length - i - 1] !== listB[listB.length - i - 1]){
          if (i === 0) return null
          return listA[listA.length - i]
      }
  }
  if (minLength === listA.length) return listA[0]
  else return listB[0]
};
