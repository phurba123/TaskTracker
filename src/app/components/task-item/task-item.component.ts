import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../task_interface';

// font awesome icon import in component
import {faCircle } from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // icons
  faTrashCan = faTrashCan;
  // faCircle = faCircle;

  @Input() task!:Task;

  @Output() deleteTaskEvent = new EventEmitter();
  @Output() toggleReminderEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task:Task){
    this.deleteTaskEvent.emit(task);
  }

  toggleReminder(task:Task){
    this.toggleReminderEvent.emit(task);
  }

}
