import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { UpdatetaskComponent } from './components/updatetask/updatetask.component';

const routes: Routes = [
  { path: '', component: ViewtaskComponent },
  { path: 'add', component: AddtaskComponent },
  { path: 'update/:id', component: UpdatetaskComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
