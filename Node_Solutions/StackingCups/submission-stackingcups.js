const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const convertInputToStringArrayStackingCups = (hasFirstLine, numberOfLines) => {
    const inputStringArray = [];
    let expectedNextLines = numberOfLines || 0;
    let numberOfExpectedLinesInputted = 0;
    return new Promise(resolve => rl.on('line', (input) => {
        if (expectedNextLines === 0 && hasFirstLine === true) {
            inputStringArray.push(input);
            expectedNextLines = parseInt(input);
        }
        else {
            numberOfExpectedLinesInputted += 1;
            inputStringArray.push(input);
            if (numberOfExpectedLinesInputted === expectedNextLines) {
                rl.close();
                resolve(inputStringArray);
            }
        }
    }));
}
const outputResultToConsoleStackingCups =  (hasFirstLine, outputArray)=> {
    outputArray.map((output, index) => {
        if (hasFirstLine && index === 0) {
            console.log(parseInt(output));
        }
        else {
            console.log(output);
        }
    });
}

function Cup(color, radius) {
    this.color = color;
    this.radius = radius;
}
;
function stackingCups(inputStringArray) {
    let numberCups = 0;
    const cupsArray = [];
    inputStringArray.map((input) => {
        if (numberCups === 0) {
            //assign numberCups
            numberCups = parseInt(input);
        }
        else {
            const cupInput = input.split(" ");
            let newCup;
            if (isNaN(parseInt(cupInput[0]))) { //first value is color
                newCup = new Cup(cupInput[0], parseInt(cupInput[1]));
            }
            else { //first value is diameter
                newCup = new Cup(cupInput[1], parseInt(cupInput[0]) / 2);
            }
            cupsArray.push(newCup);
        }
    });
    cupsArray.sort((cupOne, cupTwo) => (cupOne.radius > cupTwo.radius) ? 1 : -1);
    // console.log("cupsArray after sort:", cupsArray);
    const outputArray = cupsArray.map(cup => { return cup.color; });
    return outputArray;
}
async function runAllStackingCups() {
    const inputArray = await convertInputToStringArrayStackingCups(true);
    const outputStringArray = stackingCups(inputArray);
    const outputHasFirstLine = false;
    outputResultToConsoleStackingCups(outputHasFirstLine, outputStringArray);
}
runAllStackingCups();
//# sourceMappingURL=stackingcups.js.map