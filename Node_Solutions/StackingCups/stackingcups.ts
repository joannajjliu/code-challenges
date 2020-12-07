const commonFunctionsStackingCups = require('../commonFunctions'); 
const convertInputToStringArrayStackingCups = commonFunctionsStackingCups.convertInputToStringArray;
const outputResultToConsoleStackingCups = commonFunctionsStackingCups.outputResultToConsole;

function Cup(color: string, radius: number) {
  this.color = color;
  this.radius = radius;
};

function stackingCups(inputStringArray: string[]): string[] {
  let numberCups: number = 0;
  const cupsArray: any[] = [];

  inputStringArray.map((input: string) => {
    if (numberCups === 0) {
      //assign numberCups
      numberCups = parseInt(input);
    } else {
      const cupInput = input.split(" ");
      let newCup: any;
      if (isNaN(parseInt(cupInput[0]))) {//first value is color
        newCup = new Cup(cupInput[0], parseInt(cupInput[1]));
      } else {//first value is diameter
        newCup = new Cup(cupInput[1], parseInt(cupInput[0]) / 2);
      }
      cupsArray.push(newCup);
    }
  });
  cupsArray.sort((cupOne, cupTwo) => (cupOne.radius > cupTwo.radius) ? 1 : -1);
  // console.log("cupsArray after sort:", cupsArray);
  const outputArray = cupsArray.map(cup => {return cup.color;})
  return outputArray;

}

async function runAllStackingCups() {
  const inputArray = await convertInputToStringArrayStackingCups(true);
  const outputStringArray = stackingCups(inputArray);
  const outputHasFirstLine = false;
  outputResultToConsoleStackingCups(outputHasFirstLine, outputStringArray);
}

runAllStackingCups();