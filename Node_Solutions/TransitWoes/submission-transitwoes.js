const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const convertInputToStringArrayTransitWoes = (hasFirstLine, numberOfLines) => {
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
const outputResultToConsoleTransitWoes =  (hasFirstLine, outputArray)=> {
    outputArray.map((output, index) => {
        if (hasFirstLine && index === 0) {
            console.log(parseInt(output));
        }
        else {
            console.log(output);
        }
    });
}
function transitWoes(inputStringArray) {
const firstLine = inputStringArray[0].split(" ");
const secondLine = inputStringArray[1].split(" ");
const thirdLine = inputStringArray[2].split(" ");
const fourthLine = inputStringArray[3].split(" ");
const timeLeftHouse = parseInt(firstLine[0]);
const timeClassStarts = parseInt(firstLine[1]);
const maxAllowedTime = timeClassStarts;
const numberTransitRoutes = parseInt(firstLine[2]);
let totalTimeTaken = 0;
let numStopsCalculated = 0;
while (numStopsCalculated <= numberTransitRoutes) {
    if (numStopsCalculated === 0) {
        const startAndWalkTime = timeLeftHouse + +secondLine[numStopsCalculated];
        const busIntervalTime = +fourthLine[numStopsCalculated];
        totalTimeTaken += startAndWalkTime + (busIntervalTime - (startAndWalkTime % busIntervalTime));
    }
    else if (numStopsCalculated === numberTransitRoutes) {
        totalTimeTaken += +secondLine[numStopsCalculated] + +thirdLine[numStopsCalculated - 1];
    }
    else {
        const busAndWalkTime = +secondLine[numStopsCalculated] + +thirdLine[numStopsCalculated - 1];
        const busIntervalTime = +fourthLine[numStopsCalculated];
        totalTimeTaken += busAndWalkTime;
        const timePastBusInterval = totalTimeTaken % busIntervalTime;
        totalTimeTaken += timePastBusInterval > 0 ? (busIntervalTime - timePastBusInterval) : 0;
    }
    if (totalTimeTaken > maxAllowedTime) {
        break;
    }
    numStopsCalculated += 1;
}
if (totalTimeTaken > maxAllowedTime) {
    return ['no'];
}
return ['yes'];
}
async function runAllTransitWoes() {
const inputArray = await convertInputToStringArrayTransitWoes(false, 4);
const outputStringArray = transitWoes(inputArray);
const outputHasFirstLine = false;
outputResultToConsoleTransitWoes(outputHasFirstLine, outputStringArray);
}
runAllTransitWoes();