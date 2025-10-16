function reverse(x) {
    let result = 0
    if (x == 0) return 0
    
    while (x != 0) {
        let digit = (x % 10)
        result = result * 10 + digit
        x = parseInt(x /= 10)
    }
    return result
};

let res = reverse(-129)
console.log(res);
