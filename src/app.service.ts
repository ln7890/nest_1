import { Injectable } from '@nestjs/common';
interface Istudent {
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
}
