function rotate(nums, k){
    let last = nums.length
    for (index = 0; index < k; index++) {
        last--
        
        nums.unshift(nums[last])
        nums.pop()
    }

    return nums
}

let a = rotate([1,2,3,4,5,6,7], 3)


console.log(a);

