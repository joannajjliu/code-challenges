const commonFunctionsTransitWoes = require('../commonFunctions'); 
const convertInputToStringArrayTransitWoes = commonFunctionsTransitWoes.convertInputToStringArray;
const outputResultToConsoleTransitWoes = commonFunctionsTransitWoes.outputResultToConsole;

function transitWoes(inputStringArray: string[]): string[] {
  const firstLine: string[] = inputStringArray[0].split(" ");
  const secondLine: string[] = inputStringArray[1].split(" ");
  const thirdLine: string[] = inputStringArray[2].split(" ");
  const fourthLine: string[] = inputStringArray[3].split(" ");

  const timeLeftHouse: number = parseInt(firstLine[0]);
  const timeClassStarts: number = parseInt(firstLine[1]);
  const maxAllowedTime: number = timeClassStarts;
  const numberTransitRoutes: number = parseInt(firstLine[2]);
  let totalTimeTaken: number = 0;

  let numStopsCalculated: number = 0;
  while (numStopsCalculated <= numberTransitRoutes) {
    if (numStopsCalculated === 0) {
      const startAndWalkTime: number = timeLeftHouse + +secondLine[numStopsCalculated];
      const busIntervalTime: number = +fourthLine[numStopsCalculated];
      totalTimeTaken += startAndWalkTime + (busIntervalTime - (startAndWalkTime % busIntervalTime));
    } else if (numStopsCalculated === numberTransitRoutes) {
      totalTimeTaken += +secondLine[numStopsCalculated] + +thirdLine[numStopsCalculated - 1];
    } else {
      const busAndWalkTime: number = +secondLine[numStopsCalculated] + +thirdLine[numStopsCalculated - 1];
      const busIntervalTime: number = +fourthLine[numStopsCalculated];
      totalTimeTaken += busAndWalkTime;
      const timePastBusInterval: number = totalTimeTaken % busIntervalTime;
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