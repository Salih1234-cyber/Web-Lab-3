export function calculateClassAverage(students, courseId) {

  const scores = students
    .flatMap(student => student.courses)         
    .filter(course => course.courseId === courseId) 
    .map(course => course.grade);               

  if (scores.length === 0) return 0;

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;

}