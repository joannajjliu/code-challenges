let line;
let rooms;
let teams;
let numLinesRead = 0;

while (line = readline()) {
    if (numLinesRead === 0) {
       rooms = parseInt(line); //'1'
       numLinesRead += 1;
    } else if (numLinesRead === 1) {
        teams = parseInt(line); //'5'
        numLinesRead += 1;
    }
}

let baseTeamsPerRoom = Math.floor(teams / rooms);
let numRoomsWithAdditionalTeams = teams % baseTeamsPerRoom;
let numRoomsWithBaseTeams = rooms - numRoomsWithAdditionalTeams;

for (let i = 0; i < rooms; i++) {
    if (numRoomsWithAdditionalTeams > 0) {
        print(('*').repeat(baseTeamsPerRoom + 1));
        numRoomsWithAdditionalTeams -= 1;
    } else {
        print(('*').repeat(baseTeamsPerRoom));
    }
}
