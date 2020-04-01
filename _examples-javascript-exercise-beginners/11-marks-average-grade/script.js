console.log('11-marks-average-grade');

// approach 1

/* const MARKSARRAY = [55, 85, 55, 65];

function calculateAverageGrade(currentMarks) {
  let totalMarks = 0;
  let averageMarks = 0;
  let grade;

  for(let mark of currentMarks) {
    totalMarks += mark;
  }
  // console.log('totalMarks:', totalMarks);
  averageMarks = (totalMarks/currentMarks.length);
  // console.log('averageMarks:', averageMarks);

  if(averageMarks < 70) return grade = 'D'; 
  if(averageMarks < 80) return grade = 'C';
  if(averageMarks < 90) return grade = 'B';
  if(averageMarks <= 100) return grade = 'A';
}

console.log('Grade:', calculateAverageGrade(MARKSARRAY)); */

// approach 2 - create two different functions with single responsibility principle

const MARKSARRAY = [55, 85, 55, 65];

function calculateAverage(currentArray) {
  let total = 0;
  for (let curValue of currentArray) {
    total += curValue;
  }
  // console.log('total:', total);
  return (total/currentArray.length);
}

// console.log(calculateAverage(MARKSARRAY));

function calculateGrades(_currentArray) { 
  const average = calculateAverage(_currentArray);
  // console.log('average:', average);

  if(average < 70) return grade = 'D'; 
  if(average < 80) return grade = 'C';
  if(average < 90) return grade = 'B';
  if(average <= 100) return grade = 'A';
}

console.log('Grade:',calculateGrades(MARKSARRAY));