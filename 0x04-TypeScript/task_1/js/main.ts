interface Teacher {
  firstName: string,
  lastName: string,
  yearsOfExperience?: number,
  location: string,
  [anything]: any,
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}
