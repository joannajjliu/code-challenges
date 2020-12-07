// submission works

let line;

while (line = readline()) {
    var nums = line.split(' ');
    var sweet = parseInt(nums[0]);
    var sour = parseInt(nums[1]);
    var sum = sweet + sour;
    var difference = sweet - sour;
    if (sweet === 0 && sour === 0) {
        print("");
    } else if (sum === 13) {
        print("Never speak again.");
    } else if (difference === 0) {
        print ("Undecided.");
    } else if (difference > 0) {
        print ("To the convention.");
    } else if (difference < 0) {
        print ("Left beehind.");
    }
}