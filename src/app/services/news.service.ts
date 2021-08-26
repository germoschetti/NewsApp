import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url:string;
  key:string;
  constructor( private http: HttpClient) {
    this.url = 'https://newsapi.org/v2/top-headlines';
    this.key = 'ad0bcc7bedfd41048e48687ca9b068c2';
   }

  getNews(){
    this.http.get(this.url + '?country=ar&apiKey=' + this.key)
  }

}


