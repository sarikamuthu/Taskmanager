import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Task } from './task';
import { IntegerType } from 'mongodb';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:9191/";

  constructor(private http: HttpClient) { }

  public addTask(task:any){
    return this.http.post("http://localhost:9191/addTask",task,{responseType:'text' as 'json'})
  }

  public viewTask(){
    return this.http.get("http://localhost:9191/tasks")
  }

  public deleteTask(id:IntegerType): Observable<any[]> {
   
   return this.http.delete<any[]>(`http://localhost:9191/delete/${id}`);
  }
 
  }

