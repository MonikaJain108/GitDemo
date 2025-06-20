import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Welcome {
  welcomeMsg(){
    alert("Welocme to Angular Services");
  }
  welcomeContact(){
    alert("Your are in Contact page");
  }
  constructor() { }
}
