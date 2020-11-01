const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = {
  convertInputToStringArray: function(): Promise<string[]> {
    const inputStringArray: string[] = [];
    let expectedNextLines: number = 0;
    let numberOfExpectedLinesInputted: number = 0;
  
    return new Promise(resolve =>
      rl.on('line', (input: string) => {
        if (expectedNextLines === 0) {
          inputStringArray.push(input);
          expectedNextLines = parseInt(input);
        } else {
          numberOfExpectedLinesInputted += 1;
          inputStringArray.push(input);
          if (numberOfExpectedLinesInputted === expectedNextLines) {
            rl.close();
            resolve(inputStringArray);
          }
        }
      })
    )
  },
  
  outputResultToConsole: function(outputArray: string[]) {
    outputArray.map((output, index: number) => {
      if (index === 0) { 
        console.log(parseInt(output));
      } else {
        console.log(output);
      }
    })
  }
}
