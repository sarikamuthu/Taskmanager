import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(task: Task){
    return this.http.post<Task>(`${this.url}add`, task)
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'tasks')
  }

  // Get User by Id - Read
  getUserById(id: number): Observable<Task>{
    return this.http.get<Task>(`${this.url}task/${id}`)
  }

  // Update User - Update
  updateUser(id?: number ,user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, user)
  }

  // Delete User - Delete
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}