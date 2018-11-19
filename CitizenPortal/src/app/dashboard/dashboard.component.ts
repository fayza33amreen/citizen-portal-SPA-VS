import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  row1Span: number = 1;
  flag1: number = 0;
  panelState1: boolean;
  row2Span: number = 1;
  flag2: number = 0;
  panelState2: boolean;

  constructor() { }

  ngOnInit() {
  }

  panelStateOpen1() {
    this.panelState1 = true;
    this.row1Span = 2;
    this.flag1++;
  }
  panelStateClose1() {
    this.panelState1 = false;
    this.flag1--;
    if (!this.flag1)
      this.row1Span = 1;
  }

  panelStateOpen2() {
    this.panelState2 = true;
    this.row2Span = 2;
    this.flag2++;
  }
  panelStateClose2() {
    this.panelState2 = false;
    this.flag2--;
    if (!this.flag2)
      this.row2Span = 1;
  }
}
