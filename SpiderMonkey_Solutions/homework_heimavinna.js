//works
let line2;

while (line2 = readline()) {
    let questionSets2 = line2.split(';'); //[1-3,5,7,10-13]
    let totalProblems = 0;
    for (let i = 0; i < questionSets2.length; i++) {
        const question = questionSets2[i].split('-');
        if (question.length === 1) {
            totalProblems += 1;
        } else if (question.length === 2) {
            totalProblems += (question[1] - question[0] + 1);
        }
    }
    print (totalProblems);
}