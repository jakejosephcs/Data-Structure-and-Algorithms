// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.

// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

// Sample Input
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output
// [-1, 11] // the numbers could be in reverse order

// Solution 1: O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for(let i = 0; i < array.length - 1; i++) {
    let curr = array[i]
    for(let j = i + 1; j<array.length; j++) {
      let next = array[j]
      if (curr + next === targetSum) {
        return [curr, next]
      }
    }
  }
  return []
}

// Solution 2: O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}


// Solution 3: O(nlong(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a,b) => a - b)
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    }
    if (currentSum < targetSum) {
      left++;
    }
    if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}