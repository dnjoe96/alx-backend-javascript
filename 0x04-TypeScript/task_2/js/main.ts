// Interfaces
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// End of interfaces

class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from home';
	}
	getToWork() {
		return 'Getting a coffee break';
	}
	workDirectorTasks() {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return 'Cannot work from home';
	}
	getCoffeeBreak() {
		return 'Cannot have a break';
	}
	workTeacherTasks() {
		return 'Getting to work'
	}
}

function createEmployee (salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

function isDirector(employee: Teacher | Director) {
	return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
	if (employee instanceof Director) return employee.workDirectorTasks();
	if (employee instanceof Teacher) return employee.workTeacherTasks();
}

type Subjects = ( 'Math' | 'History' );

function teachClass(todayClass: Subjects) {
	if (todayClass === 'Math') return 'Teaching Math';
	if (todayClass === 'History') return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
