'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var count = 0;
    var sum = 0;
    var aTail = 0;
    var array = s.split('');
    var sumEnter = (n - n % array.length) / array.length;
    var tail = n - (sumEnter * array.length);
    console.log('sumEnter ' + sumEnter);
    console.log('tail ' + tail);

    for (var i = 0; i < array.length; i++) {
        if ('a' == array[i]) {
            count++;
        }
    }

    if (n % array.length == 0) {
        sum = count * (n / array.length);
    } else {
        tail = s.substring(0, tail).split('');
        console.log('qwerty' + tail);
        tail.forEach(element => {
            if (element === 'a') {
                aTail++;
            }
        });
        sum = count * sumEnter + aTail;
    }
    console.log('sum ' + sum);
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
