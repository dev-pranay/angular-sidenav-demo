import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphs: string[] = [];
  topics: string[] = [];
  title = 'angular-mat-sidenav-demo';

  private text = 'Hello! This application demonstrates the working of sidenav bar. The sidenav bar is defualt open. You can toggle it using menu icon or Toggle button if you want to see the effect.';

  constructor() {
    for (let index = 0; index < 25; index++) {
      this.paragraphs.push(this.text);
    }
    
    for (let index = 0; index < 10; index++) {
      this.topics.push(`Topic ${index}`);
    }
  }
  
}
