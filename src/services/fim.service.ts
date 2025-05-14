import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FimService {
  private httpUrl = 'https://api.themoviedb.org/3';
  private key = '09227b47e837630a07422bf8e3ba6674'
  private keyUrl = `api_key=${this.key}&language=vi`;
  constructor(private http: HttpClient) { }
  getFim(): Observable<any> {
    return this.http.get(`${this.httpUrl}/trending/movie/day?${this.keyUrl}`);
  }
  getFimWeek(): Observable<any> {
    return this.http.get(`${this.httpUrl}/trending/movie/week?${this.keyUrl}`);
  }
  getFimPopular(): Observable<any> {
    return this.http.get(`${this.httpUrl}/movie/popular?${this.keyUrl}&page=1`);
  }
  getFimNowPlaying(): Observable<any> {
    return this.http.get(`${this.httpUrl}/movie/now_playing?${this.keyUrl}&page=1`);
  }
   getSearchFim(type: string,query: string, page: number = 1): Observable<any> {
      return this.http.get(`${this.httpUrl}/search/${type}?api_key=${this.key}&query=${encodeURIComponent(query)}&page=${page}`)
   }
}