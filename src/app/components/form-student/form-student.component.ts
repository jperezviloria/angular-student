import { Component, HostBinding, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from "../../services/student.service"

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {

  @HostBinding('class') class = 'row'

  student: Student = {
    nameStudent : "",
    ageStudent : null
  }

  constructor(
    private studentService : StudentService
  ) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.saveStudent(this.student).subscribe(
      response => {
        console.log(response)
      },
      err => console.error(err)
    )
  }

}
