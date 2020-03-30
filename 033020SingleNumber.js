const singleNumber = function(nums) { // time: O(n), space: O(n)
  const history = {}
  for (let i = 0; i < nums.length; i++) {
      if (history[nums[i]]) delete history[nums[i]]
      else history[nums[i]] = 1
  }
  return Object.keys(history)[0]
};
