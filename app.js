'use strict';

function fib(n) {
    if(n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fib(n-1) + fib(n-2);
    }
}

const len = 40;
for(let i = 0; i <= len; i++) {
    console.log(i, ":", fib(i));
}

/*
time node app.js
n = 40の場合
real	0m3.885s
user	0m3.871s
sys	0m0.013s

n = 100の場合
"おそらく皆さんが 1 日待っても終わらないのではないかと思います"
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