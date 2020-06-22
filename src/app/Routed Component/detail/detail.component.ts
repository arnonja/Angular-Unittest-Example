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
    this._ActivatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      //นำค่า ID ที่ได้รับมาหา User เพื่อใช้ในการแสดงข้อมูล
      this.user = this.users.find(user => user.id == id);
    });
    
  }
}
