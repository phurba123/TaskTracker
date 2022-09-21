import { Component, OnInit } from '@angular/core';
// import mock tasks and interface for task
import {Tasks} from '../../task_mock';
import {Task} from '../../task_interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
