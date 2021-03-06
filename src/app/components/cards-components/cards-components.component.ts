import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service"
import {Student} from "../../models/student"

@Component({
  selector: 'app-cards-components',
  templateUrl: './cards-components.component.html',
  styleUrls: ['./cards-components.component.css']
})
export class CardsComponentsComponent implements OnInit {

  allStudents : Student[] = []


  constructor(private studentService: StudentService){

  }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent(){
    this.studentService.getAllStudents().subscribe(
      response => {
        console.log(response)
        this.allStudents = response
      }
    )
  }

}
