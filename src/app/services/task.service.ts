import { Injectable } from '@angular/core';
import {Tasks} from '../task_mock';
import {Task} from '../task_interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // tasks:Task[] = Tasks ;

  constructor() { }

  // Get all the tasks
  getTasks():Observable<Task[]>{
    //return mock tasks as observable
    return of(Tasks);
  }
}
