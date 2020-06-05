import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbulb',
  templateUrl: './lightbulb.component.html',
  styleUrls: ['./lightbulb.component.css']
})
export class LightbulbComponent implements OnInit {
  //เก็บสถานะการเปิด ปิด ของหลอดไฟ
  isOn: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  //ใช้ในการเปิด ปิด หลอดไฟ โดยจะกำหนดค่าตรงข้ามกับปัจจุบัน
  switch() {
    if (this.isOn) {
      this.isOn = false;
    } else {
      this.isOn = true;
    }
  }
}
