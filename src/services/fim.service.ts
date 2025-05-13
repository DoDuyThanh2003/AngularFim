import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FimService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private key = '09227b47e837630a07422bf8e3ba6674'
  constructor(private http: HttpClient) {}
  getFim(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trending/movie/day?api_key=${this.key}&language=vi`);
  }
  getFimWeek(): Observable<any> {
  return this.http.get(`${this.apiUrl}/trending/movie/week?api_key=${this.key}&language=vi`);
  }
  getFimPopular(): Observable<any> {
  return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.key}&language=vi-VN&page=1`);
  }
  getFimNowPlaying(): Observable<any> {
  return this.http.get(`${this.apiUrl}/movie/now_playing?api_key=${this.key}&language=vi-VN&page=1`);
  }
}