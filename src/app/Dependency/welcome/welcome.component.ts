import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcome: string;
  constructor(private _UserService: UserService) { }

  ngOnInit(): void {
    //ตรวจสอบว่ามีการเข้าระบบอยู่หรือไม่ ถ้ามีให้ค่าเป็น Welcome ถ้าไม่มีให้ค่าเป็น Please log in.
    this.welcome = this._UserService.isLoggedIn ?
      'Welcome, ' + this._UserService.user.name : 'Please log in.';
  }

}
