import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { AddtaskComponent } from './components/addtask/addtask.component';

const routes: Routes = [

  { path: 'add', component: AddtaskComponent },
  { path:'',component:ViewtaskComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
