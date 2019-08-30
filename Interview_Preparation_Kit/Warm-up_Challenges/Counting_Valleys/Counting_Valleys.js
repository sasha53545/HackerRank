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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    var valleys = 0;
    var isInValleys = false;
    var array = [];
    var level = 0;

    array = s.split('');
    for (var i = 0; i < array.length; i++) {

        if (array[i] === 'D' && level === 0 && !isInValleys) {
            level--;
            isInValleys = true;
            valleys++;
        } else {
            if (array[i] === 'D') {
                level--;
            }
            if (array[i] === 'U') {
                level++;
            }
        }
        if (array[i] === 'U' && isInValleys && level === 0) {
            isInValleys = false;
        }
        console.log(level);
    }
    return valleys;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
