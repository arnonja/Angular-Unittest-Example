import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Unittest-Example';

  toUpperCase(arg:string):string{
    return arg.toUpperCase();
  }
}
