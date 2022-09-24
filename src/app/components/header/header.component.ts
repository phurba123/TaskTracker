import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'TaskTracker';
  showAddTask!:boolean;
  private subscription = Subscription;

  constructor(
    private _event:EventService
  ) { }

  ngOnInit(): void {
    this._event.onToggle().subscribe((val:boolean)=>{
      this.showAddTask = val;
    })
  }

  onBtnclick(e:any){
    this._event.toggleAddTask();
  }
}
