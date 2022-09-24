import { Injectable } from '@angular/core';
import {Task} from '../task_interface';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// const httpOptions ={
//   headers : new HttpHeaders({
//     "Content-Type":"application/json"
//   })
// }

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  // local server uri
  _url = "http://localhost:3000";

  constructor(
    private http:HttpClient
  ) { }

  // Get all the tasks
  getTasks():Observable<Task[]>{
    //return mock tasks as observable
    return this.http.get<Task[]>(`${this._url}/Tasks`);
  }

  // service method for deleting task
  deleteTaskById(taskId:number):any{
    return this.http.delete(`${this._url}/Tasks/${taskId}`);
  }

  //Toggling reminder for a task, setting reminder true or false
  toggleReminderOfTask(task:Task):Observable<any>{
    return this.http.put(`${this._url}/Tasks/${task.id}`,task);
  }

  // adding new Task
  addTask(task:Task):Observable<any>{
    return this.http.post(`${this._url}/Tasks`,task);
  }
}
