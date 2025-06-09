var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let i=coins.length;i>=0;i--){
        for(let j=1;j<=amount;j++){
            let take = Infinity;
            let notake = Infinity;
            if(j-coins[i] >= 0 && coins[i]>0){
                take = dp[j-coins[i]];
                if (take != Infinity){
                    take++;
                }
                if (i+1<coins.length){
                    notake = dp[j];
                }
                dp[j] = Math.min(take,notake);
            }
        }
    }
    return dp[amount] != Infinity ? dp[amount] : -1;
};