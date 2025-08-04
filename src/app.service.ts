import { Injectable } from '@nestjs/common';
export interface Istudent {
  name: string;
  age: number;
}
@Injectable()
export class AppService {
  private students: Istudent[] = [
    {
      name: 'Bob',
      age: 20,
    },
    { name: 'John', age: 18 },
  ];
  getStudents(): object {
    return this.students;
  }
  getStudentsByAge(age: number): Istudent | undefined {
    const student: Istudent | undefined = this.students.find(
      (student) => student.age == age,
    );
    return student;
  }

  addStudent(student: Istudent) {
    this.students.push(student);
    return this.students;
  }

  updateStudent(age: number, studentNew: Istudent) {
    const studentIndex = this.students.findIndex(
      (student) => student.age === age,
    );
    this.students[studentIndex] = studentNew;
    return this.students;
  }
  deleteStudent(age: number) {
    const studentIndex = this.students.findIndex(
      (student) => student.age === age,
    );
    this.students.splice(studentIndex, 1);
    return this.students;
  }
}
