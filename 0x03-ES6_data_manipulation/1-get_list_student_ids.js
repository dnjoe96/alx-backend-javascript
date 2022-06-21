export default function getListStudentIds(arrList) {
  console.log(arrList);
  if (typeof arrList === 'object') {
    return arrList.map((obj) => obj.id);
  }
  return [];
}
