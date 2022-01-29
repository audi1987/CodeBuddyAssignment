// level 2

let getSumOfFibonacci = (n) => {
    let fibNums = [];

    if(n <= 0) {
        return 0;
    } else {
        fibNums[0] = 0;
        fibNums[1] = 1;

        //Initializtion
        let sum = fibNums[0] + fibNums[1];
        
        for (let i = 2; i <= n; i++) {
            fibNums[i] = fibNums[i-1] + fibNums[i-2];
            sum = sum + fibNums[i];
        }

        return sum;

    }

}

console.log(getSumOfFibonacci(6));
