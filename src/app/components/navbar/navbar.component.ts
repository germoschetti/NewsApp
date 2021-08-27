import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() topicEvent = new EventEmitter<object>()
  topic:object

  constructor(private _news: NewsService) { }

  ngOnInit(): void {
  }

  sendTopic(topic: object){
    this.topicEvent.emit(topic)
  }

  getNewsByTopic(topic:string){
    this._news.getNewsByTopic(topic).subscribe(data=>{
      this.topic = data['articles']
      this.sendTopic(this.topic)
    },
    err =>{
      console.log(err)
    })
  }
}
