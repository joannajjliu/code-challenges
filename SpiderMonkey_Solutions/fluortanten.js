let line;
let numberChildren;
let childHappinessArray;
let numLinesRead = 0;
let isIncreasing = false;
let isDecreasing = false;

while (line = readline()) {
    if (numLinesRead === 0) {
       numberChildren = parseInt(line); //3
       numLinesRead += 1;
    } else if (numLinesRead === 1) {
        childHappinessArray = line.split(' '); //['1', '0', '-2']
        numLinesRead += 1;
    }
}

let firstCopyChildHappinessArray = [...childHappinessArray];
let indexOfBjorn = firstCopyChildHappinessArray.indexOf('0'); //1
firstCopyChildHappinessArray.splice(indexOfBjorn, 1); //remove Bjorn from array

let maxHappinessSoFar = 1 * parseInt(firstCopyChildHappinessArray[0]);
for (let i = 1; i < (numberChildren - 1); i++) { //one less child cause no Bjorn
    maxHappinessSoFar += ((i + 1) * parseInt(firstCopyChildHappinessArray[i]));
}

let tempHappiness = maxHappinessSoFar; //a number
for (let i = numberChildren - 2; i > -1; i--) {
    tempHappiness += (parseInt(firstCopyChildHappinessArray[i]));
    maxHappinessSoFar = Math.max(tempHappiness, maxHappinessSoFar);
}

print(maxHappinessSoFar);

/* BRUTE FORCE approach: works */
// let maxHappinessSoFar = 1 * parseInt(childHappinessArray[0]);
// for (let i = 1; i < numberChildren; i++) {
//     maxHappinessSoFar += ((i + 1) * parseInt(childHappinessArray[i]));
// }

// let indexOfBjorn = childHappinessArray.indexOf('0'); //1
// childHappinessArray.splice(indexOfBjorn, 1); //remove Bjorn from array
// let currIndexOfBjorn = 0; //brute-forcing


// while (currIndexOfBjorn < numberChildren){
//     let childHappinessArrayCopy = [...childHappinessArray];
//     childHappinessArrayCopy.splice(currIndexOfBjorn, 0, '0');
//     let currHappiness = 1 * parseInt(childHappinessArrayCopy[0]);
//     for (let i = 1; i < childHappinessArrayCopy.length; i++) {
//         currHappiness += ((i + 1) * parseInt(childHappinessArrayCopy[i]));
//     }
//     maxHappinessSoFar = Math.max(currHappiness, maxHappinessSoFar);
//     currIndexOfBjorn += 1;
// };

// print(maxHappinessSoFar);
