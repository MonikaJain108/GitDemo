import { Component } from '@angular/core';
import { Welcome } from '../../services/welcome';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public objService:Welcome){

  }
}
