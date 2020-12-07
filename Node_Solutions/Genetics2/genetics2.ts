const readlineGenetics2 = require("readline");

const rlGenetics2 = readlineGenetics2.createInterface({
  input: process.stdin,
  output: process.stdout
});
const commonFunctionsGenetics2 = require('../commonFunctions'); 

const outputResultToConsoleGenetics2 = commonFunctionsGenetics2.outputResultToConsole;

function convertInputToStringArrayGenetics2(): Promise<string[]> {
    let expectedNextLines = 0;
    const outputStringArray: string[] = [];
    let numLinesRead = 0;
  
    return new Promise(resolve =>
        rlGenetics2.on('line', (line: string) => {
            outputStringArray.push(line);
            if (expectedNextLines === 0) {
                const firstLine = line.split(" ");
                expectedNextLines = parseInt(firstLine[0]);
            } else {
                numLinesRead += 1;
            }
            if (numLinesRead === expectedNextLines) {
                rlGenetics2.close();
                resolve(outputStringArray);
            }
      })
    )
}

//-------

let line;
let dnaSeq = [];
let dnaObjArray = [];
let N = 0;
let M;
let K;

let isOnlyAOrC = true;
let dnaIndex01 = 1;

function printVillainIndex(option1: number, option2: number, comparisonIndex: number) {
    let numCharsDifferent = 0;
    for (let i = 0; i < M; i++) {
        if (dnaSeq[comparisonIndex][i] !== dnaSeq[option1][i]){
            numCharsDifferent += 1;
        }
    }
    if (numCharsDifferent === K){
        console.log(dnaObjArray[option1].index);
    } else {
        console.log(dnaObjArray[option2].index);
    }
}

function genetics2(inputStringArray: string[]): string[] {
    
    inputStringArray.map((line: string) => {
        if (N === 0) {
            const firstLine = line.split(" ");
            N = parseInt(firstLine[0]);
            M = parseInt(firstLine[1]);
            K = parseInt(firstLine[2]);
        } else {
            const dnaInstance = line.split("");
            dnaSeq.push(dnaInstance);
            const newObj = { index: dnaIndex01, dna: dnaInstance };

            dnaIndex01 += 1;
            dnaObjArray.push(newObj);
            // ex. [
            //     { index: 1, dna: [ 'A', 'C', 'C' ] },
            //     { index: 2, dna: [ 'C', 'C', 'A' ] },
            //     { index: 3, dna: [ 'A', 'C', 'A' ] },
            //     { index: 4, dna: [ 'A', 'A', 'A' ] }
            //   ]
        }
    })
    // dnaObjArray.sort((a, b) => (a.value > b.value) ? 1 : -1);
    console.log("dnaObjArray", dnaObjArray);
    
    // dnaObjArray.map(dna => dnaSeq.push(dna.value.split("")));
    console.log("dnaSeq", dnaSeq); //ex. [[ 'A', 'A', 'A' ], [ 'A', 'C', 'A' ], ...]
    
    let objArrayLen = dnaObjArray.length;
  
    while (objArrayLen > 0) {
        let myNewArr = [];
        const comparisonDNA = dnaObjArray[0];
        for (let i = 1; i < objArrayLen; i++) {
            let numDifferences = 0;
            for (let j = 0; j < M; j++) {
                if (comparisonDNA['dna'][j] !== dnaObjArray[i]['dna'][j]) {
                    numDifferences += 1;
                }
            }
            if (numDifferences === K) {
                myNewArr.push(dnaObjArray[i]);
            }
            if (myNewArr.length === objArrayLen - 1) {//current dna meets criteria with all other dna strands
                // eslint-disable-next-line
                console.log(comparisonDNA['index']);
                return;
            }
        }
        dnaObjArray = myNewArr; //reassign
        objArrayLen = myNewArr.length;
        console.log("dnaObjArray", dnaObjArray);
        if (objArrayLen === 1) {
            console.log(myNewArr[0]['index']);
            return
        }
    }
    // {
    //     let answerFound = false;

    //     for (let i = 0; i < N; i++) {//loop through DNA sequence
    //         for (let j = 0; j < N; j++) {//compare values to singular DNA at i
    //             if (j === i) { //continue j loop because is the same number
    //                 continue;
    //             }
    //             let numCharsDifferent = 0;
    //             for (let k = 0; k < M; k++) {//difference count
    //                 if (dnaSeq[i][k] !== dnaSeq[j][k]){
    //                     numCharsDifferent += 1;
    //                 }
    //             }
    //             // console.log("i", i);
    //             // console.log("j", j);
    //             // console.log("numCharsDifferent", numCharsDifferent);
    
    //             if (numCharsDifferent !== K) {// break j loop, back to i loop
    //                 break;
    //             }
                
    //             if ((i === N - 1 && j === N - 2) || j === N - 1) {// reached end of loop
    //                 answerFound = true;
    //                 console.log(i + 1); //return the correct answer
    //                 return;
    //             }
    //         }
    //     }
    // }
}

async function runAllGenetics2() {
    const inputArray = await convertInputToStringArrayGenetics2();
    console.log("inputArray:", inputArray);
    const outputStringArray = genetics2(inputArray);
    // const outputHasFirstLine = false;
    // outputResultToConsoleGenetics2(outputHasFirstLine, outputStringArray);
}
  
runAllGenetics2();