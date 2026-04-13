// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let missingNumber = function(nums){
    let n = nums.length;
    let totalSum = n * (n+1)/2;

    let partialSum = 0 ;
    for(let i = 0; i< n; i++){
        partialSum = partialSum + nums[i]
    }
    return totalSum - partialSum;
}


// Example 1
console.log(missingNumber([3,0,1])); // Output: 2

// Example 2
console.log(missingNumber([0,1])); // Output: 2

// Example 3
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8