import { Component } from '@angular/core';
import { Students } from '../../../services/students';

@Component({
  selector: 'app-student-display',
  standalone: false,
  templateUrl: './student-display.html',
  styleUrl: './student-display.css'
})
export class StudentDisplay {
  constructor(public objsService:Students){

  }
}
