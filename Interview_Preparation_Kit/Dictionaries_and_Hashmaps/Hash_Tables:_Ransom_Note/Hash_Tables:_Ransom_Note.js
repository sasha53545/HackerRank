'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    const magazineObj = {};
    const noteObj = {};
    let sum = 0;

    magazine.forEach(element => {
        if (!magazineObj[element]) {
            magazineObj[element] = 1;
        } else magazineObj[element]++;
    });

    note.forEach(element => {
        if (!noteObj[element]) {
            noteObj[element] = 1;
        } else noteObj[element]++;
    });

    for (let key in noteObj) {
        if (noteObj[key] >= magazineObj[key]) {
            sum = sum + 0;
        } else sum = sum + 1;
    }
    return sum === 0 ? console.log('Yes') : console.log('No');
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
