import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Nav } from './nav/nav';
import { Contact } from './contact/contact';
import { StudentReg } from './students/student-reg/student-reg';
import { StudentDisplay } from './students/student-display/student-display';

const routes: Routes = [
  {path: "", component:Home},
  {path: "about", component:About},
  {path: "nav", component:Nav},
  {path: "contact", component:Contact},
  {path: "reg", component:StudentReg},
  {path: "display", component:StudentDisplay}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
