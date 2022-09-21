import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'TaskTracker';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnclick(e:any){
    console.log('received',e)
  }
}
