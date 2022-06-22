interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Joseph',
  lastName: 'Emmanuel',
  age: 25,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Victor',
  lastName: 'Fallas',
  age: 26,
  location: 'Costa Rica',
};

const studentsList = new Array(student1, student2);
