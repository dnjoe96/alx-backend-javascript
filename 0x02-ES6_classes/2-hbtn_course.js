export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') throw 'Not a string';
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') throw 'Not a number';
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (typeof students !== 'object') throw 'Not an object';
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
