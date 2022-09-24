import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Task} from '../../task_interface'

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  text!: string;
  day!:string;
  reminder:boolean = false;

  @Output() addTaskEvent:EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text)
    {
      alert("Please Enter Task Name");
      return;
    }
    else if(!this.day){
      alert("Please Enter Day");
      return;
    }

    const taskObject = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };

    // pass object to parent component for submitting new task
    this.addTaskEvent.emit(taskObject);

    this.text ='';
    this.reminder=false;
    this.day='';
  }

}
