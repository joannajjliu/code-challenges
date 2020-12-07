const commonFunctionsTransitWoes = require('../commonFunctions');
const convertInputToStringArrayTransitWoes = commonFunctionsTransitWoes.convertInputToStringArray;
const outputResultToConsoleTransitWoes = commonFunctionsTransitWoes.outputResultToConsole;
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
//# sourceMappingURL=transitwoes.js.map