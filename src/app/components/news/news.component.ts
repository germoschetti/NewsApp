import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() selectedTopic: object
  news: object;
  wordsToSearch: string;
  error: boolean;
  messageErr: string;
  spinner: boolean;

  constructor(private _news: NewsService) {
    this.spinner = false;
    this.error = false;
    this.getFirstNews();
  }

  ngOnInit(): void {}

  // Get news when the page is loading
  getFirstNews() {
    this.spinner = true;
    this._news.getNews().subscribe(data => {
      this.spinner = false;
      this.news = data['articles'];
    },
      err => {
        this.spinner = false;
        this.showErr('Oops sorry, we could not find results currently');
        console.log(err);

      });
  }


  // Search news by input
  searchNews() {
    this.selectedTopic = undefined;
    this.spinner = true;
    if (this.wordsToSearch == undefined || this.wordsToSearch.trim() == '') {
      this.spinner = false;
      this.showErr('Oops sorry, we could not find results for this search');
    } else {
      this.error = false;
      this.selectedTopic = undefined;
      this._news.searchNews(this.wordsToSearch).subscribe(data => {
        if (data['status'] == "No matches for your search.") {
          this.spinner = false;
          this.showErr('Oops sorry, we could not find results for this search');
        } else {
          this.error = false;
          this.spinner = false;
          this.news = data['articles'];
        }
      },
        err => {
          this.spinner = false;
          console.log(err);
          this.showErr('Ops sorry, we could not find results for this search');

        })
    }

  }

  showErr(message) {
    this.error = true;
    this.messageErr = message;
  }
}
