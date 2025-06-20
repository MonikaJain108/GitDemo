import { Component, OnInit } from '@angular/core';
import { Students } from '../../../services/students';
import { StudentRecordInterface } from '../../../models/student-record-interface';

@Component({
  selector: 'app-student-reg',
  standalone: false,
  templateUrl: './student-reg.html',
  styleUrl: './student-reg.css'
})
export class StudentReg implements OnInit{
  student:{sid,sName,sEmail,sContact,sFee}
  constructor(public srv:Students){

  }
  ngOnInit(): void {
   this.student={
    sid:'',
    sName:'',
    sEmail:'',
    sContact:'',
    sFee:''
   }

  }
  register(){
    this.srv.reg(this.student)
    alert("Registration succesful")
  }
}
