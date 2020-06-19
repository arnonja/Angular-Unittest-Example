import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/users.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users = (data as any).default;
  constructor(private router:Router) {}

  ngOnInit(): void {}

  gotoDetail(userId) {
    this.router.navigateByUrl('/users/'+userId);
  }
}
