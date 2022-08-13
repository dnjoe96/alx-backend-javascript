const fs = require('fs');

function countStudents(filepath) {
  let data = [];
  const fields = {};
  try {
    data = fs.readFileSync(filepath, 'utf-8').split('\n').slice(1, -1);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  // console.log(data)

  console.log(`Number of students: ${data.length}`);

  for (const student of data) {
    const field = student.split(',')[3];
    const name = student.split(',')[0];
    if (field in fields) {
      fields[field].push(name);
    } else {
      fields[field] = [name];
    }
  }
  // console.log(fields);

  for (const field in fields) {
    if (field) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
