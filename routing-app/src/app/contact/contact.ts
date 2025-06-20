import { Component } from '@angular/core';
import { Welcome } from '../../services/welcome';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(public contactSrv:Welcome){

  }
}
