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
  private keyUrlUs = `api_key=${this.key}&language=en-US`
  constructor(private http: HttpClient) { }
  getFim(day :string): Observable<any> {
    return this.http.get(`${this.httpUrl}/trending/movie/${day}?${this.keyUrl}`);
  }
  getFimPopular(name :string): Observable<any> {
    return this.http.get(`${this.httpUrl}/movie/${name}?${this.keyUrl}&page=1`);
  }
  getSearchFim(type: string, query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.httpUrl}/search/${type}?api_key=${this.key}&query=${encodeURIComponent(query)}&page=${page}`)
  }
  getDetailFim(id: string): Observable<any> {
    return this.http.get<any>(`${this.httpUrl}/movie/${id}?${this.keyUrl}`)
  }
  getCredit(id: string): Observable<any> {
    return this.http.get<any>(`${this.httpUrl}/movie/${id}/credits?${this.keyUrl}`)
  }
  getPoster(id:string): Observable<any> {
    return this.http.get<any>(`${this.httpUrl}/movie/${id}/images?${this.keyUrl}&include_image_language=vi`)
  }
  getComment(id: string,name:string):Observable<any> {
    return this.http.get<any>(`${this.httpUrl}/movie/${id}/${name}?${this.keyUrlUs}`)
  }
}