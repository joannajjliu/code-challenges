let line;
let N;
let i = 1;
let books = {};

let numLinesRead = 0;

while (line = readline()) {
    if (!N) {
       N = parseInt(line);
    } else if (N > 0) {
        books[`${i}`] = line.split(" ");
        i += 1;
        N -= 1;
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }

    constructor(head = null) {
        this.head = head
    }
}

const borrowTimeBooks = [];

let Fi = [];

Fi = books["1"][1];

while (borrowTimeBooks.length < N) {

    while (Fi > 0) {
        for (let i = 0; i < Fi; i++) {
            books[`${2 + i}`]
        }
    }
}

