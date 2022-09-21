import { Component, OnInit } from '@angular/core';
// sinterface for task
import {Task} from '../../task_interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!:Task[] ;

  constructor(
    private taskService:TaskService
  ) 
  { }

  ngOnInit(): void {
    // calling getTasks() method of task service for getting all the task
    this.taskService.getTasks().subscribe((res:Task[])=>{
      this.tasks = res;
    });
  }

}
