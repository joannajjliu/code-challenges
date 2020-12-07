let line;
let firstLine;
let secondLine;
let numLinesRead = 0;

while (line = readline()) {
    if (numLinesRead === 0) {
       firstLine = line.split(" ");
       numLinesRead += 1;
    } else if (numLinesRead === 1) {
        secondLine = line.split(" ");
        numLinesRead += 1;
    }
}

const a = parseInt(firstLine[0]);
const b = parseInt(firstLine[1]);
const m = parseInt(secondLine[0]);
const omega = parseInt(secondLine[1]);

if (a >= b) {
    print(a * (m - 1) + b);
} else if (a < b) {
    if (omega > m) {
        print(a*(omega-m) + b*(2*m - omega));
    } else if (omega <= m) {
        print(a + b *(Math.max(2*m - omega, m - 1)));
    }
}
