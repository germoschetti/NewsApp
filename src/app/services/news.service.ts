import { HttpClient, HttpHeaders, HttpParams,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url:string;
  keyHeaders:HttpHeaders;
  constructor( private http: HttpClient) {
    this.url = 'https://api.newscatcherapi.com/v2/';
    this.keyHeaders = new HttpHeaders({'x-api-key': '-3bN7X6FUBMOqpiNiOMMhYa5fxNOC-_Wud0hseedsE0'})
   }

  getNews(): Observable<object>{
    return this.http.get(this.url + 'latest_headlines?topic=news&lang=es', {headers: this.keyHeaders} )
  }

  getNewsByTopic(topic): Observable<object>{
    return this.http.get(this.url + 'latest_headlines?topic='+ topic +'&lang=es', {headers: this.keyHeaders})
  }

  searchNews(wordsToSearch): Observable<object>{
    return this.http.get(this.url + 'search?q='+ wordsToSearch +'&lang=es', {headers: this.keyHeaders})
  }


}


