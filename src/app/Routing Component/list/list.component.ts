import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/users.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users = (data as any).default;
  constructor() {}

  ngOnInit(): void {}
}
