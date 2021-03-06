// Students score, total possible score
// 15 / 20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const getGrade = function(score, total = 100) {
    if (typeof score !== 'number' || typeof total !== 'number') {
        throw Error('Argument is not of expected type')
    }
    const percentage = (score / total) * 100
    let grade = ''
    console.log('percentage', percentage);

    switch(true) {
        case (percentage >= 90 && percentage <= 100):
        grade = 'A';
        break;
        case (percentage >= 80 && percentage <= 89):
        grade = 'B';
        break;
        case (percentage >= 70 && percentage <= 79):
        grade = 'C';
        break;
        case (percentage >= 60 && percentage <= 69):
        grade = 'D';
        break;
        case (percentage >= 0 && percentage <= 59):
        grade = 'F';
        break;
    }
    return `${score} / ${total} -> You got a ${grade} (${percentage}%)!`;
}

try {
    console.log(getGrade(16, true));
} catch (e) {
    console.log(e.message);
}