const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const convertInputToStringArrayArrangement = (numberOfLines) => {
    const inputStringArray = [];
    let numberOfExpectedLinesInputted = 0;
    return new Promise(resolve => rl.on('line', (input) => {
        numberOfExpectedLinesInputted += 1;
        inputStringArray.push(input);
        if (numberOfExpectedLinesInputted === numberOfLines) {
            rl.close();
            resolve(inputStringArray);
        }
    }));
}

const outputResultToConsoleArrangement =  (outputArray)=> {
    // console.log("outputArray:");
    outputArray.map((output, index) => {
        console.log(output);
    });
}

function arrangement(inputStringArray) {
    let rooms;
    let teams;
    let numLinesRead = 0;
    const outputArray = [];
    inputStringArray.map((input) => {
        if (numLinesRead === 0) {
            rooms = parseInt(input); //'1'
            numLinesRead += 1;
         } else if (numLinesRead === 1) {
             teams = parseInt(input); //'5'
             numLinesRead += 1;
         }
    });
    // console.log("rooms", rooms);
    // console.log("teams", teams);
    let baseTeamsPerRoom = Math.floor(teams / rooms);
    let numRoomsWithAdditionalTeams = teams % baseTeamsPerRoom;
    let numRoomsWithBaseTeams = rooms - numRoomsWithAdditionalTeams;

    for (let i = 0; i < rooms; i++) {
        // console.log("for loop reached");
        if (numRoomsWithAdditionalTeams > 0) {
            outputArray.push(('*').repeat(baseTeamsPerRoom + 1));
            numRoomsWithAdditionalTeams -= 1;
        } else {
            outputArray.push(('*').repeat(baseTeamsPerRoom));
        }
    }
    return outputArray;
}
async function runAllArrangement() {
    const inputArray = await convertInputToStringArrayArrangement(2);
    const outputStringArray = arrangement(inputArray);
    outputResultToConsoleArrangement(outputStringArray);
}
runAllArrangement();