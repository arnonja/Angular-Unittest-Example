import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //เก็บสถานะการเข้าสู่ระบบ
  isLoggedIn:boolean = true;

  //เก็บข้อมูล User ที่เข้าสู่ระบบอยู่
  user = { name: 'Test User' };

  constructor() {}
}
