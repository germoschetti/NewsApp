import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTopic:any
  title = 'newsapp';

  constructor(){
  }

  getTopic(topic:object){
    this.selectedTopic = topic
  }
}
