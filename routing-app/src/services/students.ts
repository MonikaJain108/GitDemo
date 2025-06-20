import { Injectable } from '@angular/core';
import { StudentRecordInterface } from '../models/student-record-interface';

 interface StudentsRecord {
  sid: number;
  sName: string;
  sEmail: string;
  sContact: string;
  sFee: number;
}

@Injectable({
  providedIn: 'root'
})
export class Students {

  constructor() { }

     studentRec=
    [
      {sid:1,sName:'Monika',sEmail:'monika.108@gmail.com',sContact:'1111',sFee:1000},
      {sid:2,sName:'Pradeep',sEmail:'pradeep.108@gmail.com',sContact:'2222',sFee:2000},
      {sid:3,sName:'Rahul',sEmail:'rahul.108@gmail.com',sContact:'3333',sFee:3000},
      {sid:4,sName:'Himank',sEmail:'himank.108@gmail.com',sContact:'4444',sFee:4000},
      {sid:5,sName:'Khushansh',sEmail:'khushansh.108@gmail.com',sContact:'5555',sFee:5000},
    ]
  
  public getStudents():Array<{sid,sName,sEmail,sContact,sFee}>{
    return this.studentRec;
  }
  public reg(student:{sid,sName,sEmail,sContact,sFee}){
    this.studentRec.push(student);
  }
}
