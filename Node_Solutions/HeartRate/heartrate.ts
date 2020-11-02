const commonFunctions = require('../commonFunctions'); 
const convertInputToStringArray = commonFunctions.convertInputToStringArray;
const outputResultToConsole = commonFunctions.outputResultToConsole;

function Case(beats: number, seconds: number) {
  this.beats = beats;
  this.seconds = seconds;
};

function ReturnCase(minimumABPM: string, calculatedABPM: string, maximumABPM: string) {
  this.minimumABPM = minimumABPM;
  this.calculatedABPM = calculatedABPM;
  this.maximumABPM = maximumABPM;
};

function abpmCalculation(beats: number, seconds: number): string {
  return (60 * beats / seconds).toFixed(4);
}

function heartRate(inputStringArray: string[]): string[] {
  let numberOfCases: number = 0;
  let numberOfCasesRead: number = 0;
  const outputStringArray: string[] = [];

  inputStringArray.map((input: string) => {
    if (numberOfCases === 0) {
      //assign numberOfCases
      numberOfCases = parseInt(input);
    } else {
      numberOfCasesRead += 1;
      const caseInput = input.split(" ");
      const newCase = new Case(parseInt(caseInput[0]), parseFloat(caseInput[1]));
      const beats = newCase.beats;
      const seconds = newCase.seconds;

      const returnCase = new ReturnCase(
        abpmCalculation(beats - 1, seconds),
        abpmCalculation(beats, seconds),
        abpmCalculation(beats + 1, seconds)
      )
      
      outputStringArray.push(`${returnCase.minimumABPM} ${returnCase.calculatedABPM} ${returnCase.maximumABPM}`);
    }
  });

  return outputStringArray;
}

async function runAll() {
  const inputArray = await convertInputToStringArray();
  const outputStringArray = heartRate(inputArray);
  const outputHasFirstLine = false;
  outputResultToConsole(outputHasFirstLine, outputStringArray);
}

runAll();

module.exports = heartRate;