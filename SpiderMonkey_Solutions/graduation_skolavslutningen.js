let line;
let numberLines;
let numberColumns;
let numberClasses;
let firstLine;
const rowArray;

let numLinesRead = 0;

while (line = readline()) {
    if (numLinesRead === 0) {
        firstLine = line.split(" ");
        numberLines = parseInt(firstLine[0]);
        numberColumns = parseInt(firstLine[1]);
        numberClasses = parseInt(firstLine[2]);
        numLinesRead += 1;
    } else {
        rowArray.push(line); //rowArray: ['AAB','ABB']
    }
}

const alphabetArray = []; //['A','B','C']

