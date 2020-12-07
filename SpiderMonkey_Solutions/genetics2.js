let line;
let dnaSeq = [];
let dnaObjArray = [];
let N = 0;
let M;
let K;

let dnaIndex01 = 1;

while (line = readline()) {
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
}

let answerFound = false;
let objArrayLen = dnaObjArray.length;

while (objArrayLen > 0 && answerFound === false) {
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
            print(comparisonDNA['index']);
            answerFound = true;
        }
    }
    dnaObjArray = myNewArr; //reassign
    objArrayLen = myNewArr.length;
    if (objArrayLen === 1) {
        print(myNewArr[0]['index']);
        answerFound = true
    }
}
