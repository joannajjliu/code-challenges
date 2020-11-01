const commonFunctions = require('../commonFunctions');
const convertInputToStringArray = commonFunctions.convertInputToStringArray;
const outputResultToConsole = commonFunctions.outputResultToConsole;
;
function Friend(name, priority, birthday) {
    this.name = name;
    this.priority = priority;
    this.birthday = birthday;
}
;
function birthdayMemorization(inputStringArray) {
    let numberOfFriends = 0;
    let numberOfFriendsRead = 0;
    const listOfFriends = [];
    const outputStringArray = [];
    inputStringArray.map((input) => {
        if (numberOfFriends === 0) {
            //assign numberOfFriends
            numberOfFriends = parseInt(input);
        }
        else {
            numberOfFriendsRead += 1;
            const friendInput = input.split(" ");
            const newFriend = new Friend(friendInput[0], parseInt(friendInput[1]), friendInput[2]);
            if (listOfFriends.length === 0) {
                listOfFriends.push(newFriend);
            }
            else {
                let friendAdded = false;
                for (let i = 0; i < listOfFriends.length; i++) {
                    if (listOfFriends[i].birthday === newFriend.birthday) {
                        friendAdded = true;
                        if (newFriend.priority > listOfFriends[i].priority) {
                            listOfFriends.splice(i, 1, newFriend);
                        }
                        else {
                            break; //end for loop
                        }
                    }
                }
                if (friendAdded === false) {
                    listOfFriends.push(newFriend);
                }
            }
            if (numberOfFriendsRead === numberOfFriends) {
                const namesOutput = listOfFriends.map(friend => {
                    return friend.name;
                });
                namesOutput.sort();
                outputStringArray.push(namesOutput.length.toString());
                namesOutput.map(name => {
                    outputStringArray.push(name);
                });
            }
        }
    });
    return outputStringArray;
}
;
async function runAll() {
    const inputArray = await convertInputToStringArray();
    const outputStringArray = birthdayMemorization(inputArray);
    outputResultToConsole(outputStringArray);
}
runAll();
module.exports = birthdayMemorization;
export {};
//# sourceMappingURL=birthdaymem.js.map