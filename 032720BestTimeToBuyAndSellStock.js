const maxProfit = function(prices) { // time: O(n) where n is the number of elements in the array, space: O(1)
  let max = prices[prices.length - 1]
  let greatestProfit = 0
  for (let i = prices.length - 2; i >= 0; i--) {
      const currentPrice = prices[i]
      if (currentPrice > max) max = currentPrice
      else {
          const currentProfit = max - currentPrice
          if (currentProfit > greatestProfit) greatestProfit = currentProfit
      }
  }
  return greatestProfit
};
