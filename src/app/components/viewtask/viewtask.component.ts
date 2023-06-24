import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  tasks:any;
  constructor(private service:AppService){}

  public deleteTask(id:number){
    let resp= this.service.deleteTask(id);
    resp.subscribe((data)=>this.tasks=data);
   }

  ngOnInit(): void {
      let resp=this.service.viewTask();
      resp.subscribe((data)=>this.tasks=data);
      
  }
  
}