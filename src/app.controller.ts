import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import * as appService_1 from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: appService_1.AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getStudents();
  }
  @Get(':age')
  getStudentByAge(
    @Param('age') age: number,
  ): appService_1.Istudent | undefined {
    return this.appService.getStudentsByAge(age);
  }
  @Post()
  postStudent(@Body() student: appService_1.Istudent) {
    return this.appService.addStudent(student);
  }
  @Patch(':age')
  updateStudent(
    @Param('age') age: number,
    @Body() newStudent: appService_1.Istudent,
  ) {
    return this.appService.updateStudent(+age, newStudent);
  }

  @Delete(':age')
  deleteStudent(@Param('age') age: number) {
    return this.appService.deleteStudent(+age);
  }
}
