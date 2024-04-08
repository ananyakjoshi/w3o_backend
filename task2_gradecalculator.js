
function calculateGrade(scores, customScale = null) {
    
    const defaultScale = {
        A: 90,
        B: 80,
        C: 70,
        D: 60,
        F: 0
    };

    
    const gradingScale = customScale ? customScale : defaultScale;

    
    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;

    
    for (const grade in gradingScale) {
        if (averageScore >= gradingScale[grade]) {
            return grade;
        }
    }
}


const inputScores = [61, 75, 90, 85, 99];


const finalGrade = calculateGrade(inputScores);


console.log("Final Grade:", finalGrade);
