'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }

    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}

const len = 40;
for(let i = 0; i <= len; i++) {
    console.log(i, ":", fib(i));
}

/*
len = 40の場合
real	0m0.044s
user	0m0.030s
sys	0m0.015s
*/

// 自分で実装したもの
// const len = process.argv[2];

// let fib = [];
// fib[0] = 0;
// fib[1] = 1;

// function fib2(n) {
//     if(n === 0 || n === 1) {
//         return fib[n];
//     }
//     for(let i = 2; i <= n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }

//     return fib[n];
// }

// fib2(len);
// for(let i = 0; i <= len; i++) {
//     console.log(i, ":", fib[i]);
// }

/*
fib2を実行
time node app.js 40
real	0m0.051s
user	0m0.039s
sys	0m0.011s

time node app.js 100
real	0m0.074s
user	0m0.042s
sys	0m0.013s
*/