import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // input decorators
  @Input() btnText!: string;
  @Input() btnColor!:string;

  //output decorators for outputting event
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('btn text is : ', this.btnText , ' and btn color is : ', this.btnColor);
  }

  onBtnclicked(){
    this.btnClick.emit();
  }

}
