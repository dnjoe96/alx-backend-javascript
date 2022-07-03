/*
newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.
*/
export default function updateStudentGradeByCity(arrList, city, newGrades) {
  const newlist = [];
  for (let grade of newGrades) {
    let list = arrList.filter((obj) => obj.id === grade.studentId)
      .map((obj) => obj.grade = grade.grade);
    newlist.push(list);
  }
  return newlist;
}
