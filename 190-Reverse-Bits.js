function reverseBits(n) {
    let result = ''
    while (n != 0) {
        let digits = n % 2
        console.log(digits);
        
        result += digits
        n = parseInt(n /= 2)
    }
    return result
};

let res = reverseBits(190)

console.log(res);
