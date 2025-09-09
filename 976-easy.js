var largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = nums.length; i > 0; i--) {
        console.log(nums[i] , nums[i - 1] , nums[i - 2]);
        
        if (nums[i] < (nums[i - 1] + nums[i - 2])) return nums[i] + nums[i - 1] + nums[i - 2]
    }
    return 0
};

let res = largestPerimeter([2, 1, 2])

console.log(res);
