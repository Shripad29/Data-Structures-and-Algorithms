// Rotate Array


// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


var rotate = function(nums, k) {
    let size = nums.length;

  k = k % size;-

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
};

console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1,2,3,4,5,6,7]));