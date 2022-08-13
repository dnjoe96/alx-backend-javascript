const fs = require('fs');

async function countStudents(path) {
  let data;
  const fields = {};
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const ddata = data.split('\n').slice(1, -1);
  // console.log(ddata);
  console.log(`Number of students: ${ddata.length}`);

  for (const student of ddata) {
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
