import { Component, OnInit } from '@angular/core';
// sinterface for task
import {Task} from '../../task_interface';
import { TaskService } from '../../services/task.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!:Task[] ;
  showAddTaskForm:boolean = false;

  constructor(
    private taskService:TaskService,
    private _event : EventService
  ) 
  {
    this._event.onToggle().subscribe((val:boolean)=>{
      this.showAddTaskForm = val;
    })
  }

  ngOnInit(): void {
    // calling getTasks() method of task service for getting all the task
    this.taskService.getTasks().subscribe((res:Task[])=>{
      // reverse tasks so that new task will appear at top
      this.tasks = res.reverse();
    });
  };

  deleteTask(task:Task){
    this.taskService.deleteTaskById(Number(task.id)).subscribe((res:any)=>{
      // console.log('res : ', res);

      // filter out deleted task from tasks array
      this.tasks = this.tasks.filter((val:Task)=>{
        return val.id != task.id;
      })
    })
  }

  toggleReminder(task:any){
    task.reminder = !task.reminder;
    this.taskService.toggleReminderOfTask(task).subscribe((res:any)=>{
      //on success, we can  do something
      // console.log('res : ', res);
    },
    (err:any)=>{
      //incase of error while updating data to server, hadle it 
      console.log('err:toggleReminder : ',err); //for now just console an error
    })
  }

  // add task method
  addTask(e:Task){
    // console.log('e : ', e);
    this.taskService.addTask(e).subscribe((task)=>{
      // insert newly added task as a first element in tasks array
      this.tasks.unshift(task);
    })
  }

}
