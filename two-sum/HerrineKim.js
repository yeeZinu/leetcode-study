// 시간 복잡도 : O(n)
// 공간 복잡도 : O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      
      if (numMap.has(complement)) {
          return [numMap.get(complement), i];
      }
      
      numMap.set(nums[i], i);
  }
};
