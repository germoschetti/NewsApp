import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: object;
  wordsToSearch:string

  constructor(private _news: NewsService) {
    this.getFirstNews()
  }

  ngOnInit(): void {
  }

  getFirstNews() {
    this._news.getNews().subscribe(data => {
      this.news = data['articles'];
      console.log(this.news['articles'])
    },
      err => {
        console.log(err)
      });
  }

  getNewsByTopic(topic:string){
    this._news.getNewsByTopic(topic).subscribe(data=>{
      this.news = data['articles']
      console.log(data)
    },
    err =>{
      console.log(err)
    })
  }

  searchNews(){
    this._news.searchNews(this.wordsToSearch).subscribe(data=>{
      this.news = data['articles']
    },
    err=>{
      console.log(err)
    })
  }
}
