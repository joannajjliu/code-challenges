const commonFunctionsNinetyNine = require('../commonFunctions');
const convertInputToStringArrayNinetyNine = commonFunctionsNinetyNine.convertInputToStringArray;
const outputResultToConsoleNinetyNine = commonFunctionsNinetyNine.outputResultToConsole;
function ninetyNine(inputStringArray) {
}
async function runAllNinetyNine() {
    const inputArray = await convertInputToStringArrayNinetyNine();
    const outputStringArray = ninetyNine(inputArray);
    const outputHasFirstLine = false;
    outputResultToConsoleNinetyNine(outputHasFirstLine, outputStringArray);
}
// runAllNinetyNine();
module.exports = ninetyNine;
//# sourceMappingURL=ninetynine.js.map