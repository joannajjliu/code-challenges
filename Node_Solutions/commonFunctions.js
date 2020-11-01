const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
module.exports = {
    convertInputToStringArray: function () {
        const inputStringArray = [];
        let expectedNextLines = 0;
        let numberOfExpectedLinesInputted = 0;
        return new Promise(resolve => rl.on('line', (input) => {
            if (expectedNextLines === 0) {
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
    },
    outputResultToConsole: function (hasFirstLine, outputArray) {
        outputArray.map((output, index) => {
            if (hasFirstLine && index === 0) {
                console.log(parseInt(output));
            }
            else {
                console.log(output);
            }
        });
    }
};
//# sourceMappingURL=commonFunctions.js.map