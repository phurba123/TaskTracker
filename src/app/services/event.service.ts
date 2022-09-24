import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private showAddTask:boolean = false;

  private addTaskSubject = new Subject<any>();

  constructor() { }

  // toggle add Task
  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    this.addTaskSubject.next(this.showAddTask);
  }

  //on Toggle
  onToggle():Observable<any>{
    return this.addTaskSubject.asObservable();
  }
}
