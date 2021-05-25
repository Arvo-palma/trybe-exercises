const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let totalPoints = 0;

const points = (rightAnswer, studentAnswer) => {
    switch (studentAnswer) {
      case rightAnswer: totalPoints += 1; break;
      case 'N.A': totalPoints = totalPoints; break;
      default: totalPoints -= 0.5; break;
    }
};

// console.log(points(rightAnswers, studentAnswers));

const avaliation = (rightAnswers, studentAnswers, callback) => {
  for (let index = 0; index < rightAnswers.length; index += 1) {
      callback(rightAnswers[index], studentAnswers[index]);
  };
  return totalPoints;
}

console.log(avaliation(rightAnswers, studentAnswers, points));
