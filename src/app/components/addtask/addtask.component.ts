import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Task } from 'src/app/task';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task: Task=new Task("","");
  message:any;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
  
  });
  
  
  constructor(private service:AppService,private router: Router){}
  ngOnInit(): void {
      
  }

   submit(){
      let res=this.service.addTask(this.task);
      res.subscribe((data)=>this.message=data);
      //this.router.navigate(['/view']);
  }
  
  
  
  
  
  
  
  
  
  // constructor(private service: AppService, private router: Router) { }
  // data: any
  
  // form = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   pNo: new FormControl('', [Validators.required]),
  //   address: new FormControl('', [Validators.required])
  // })
  // ngOnInit(): void {
  // }
  // submit(){
  //   this.data = this.form.value
  //   console.log(this.data)

  //   this.service.adduser(this.data).subscribe(data => {
  //     console.log(data)
  //   })
  //   this.router.navigate(['/']);
  // }
}