import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/users.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  users: [any] = (data as any).default;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    tel: string;
  };
  constructor(private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //ดึงค่า Path Parameter เพื่อดึงค่า ID
    let id = this._ActivatedRoute.snapshot.paramMap.get('id');
    //นำค่า ID ที่ได้รัยมาหา User เพื่อใช้ในการแสดงข้อมูล
    this.user = this.users.find(user => user.id == id);
  }
}
