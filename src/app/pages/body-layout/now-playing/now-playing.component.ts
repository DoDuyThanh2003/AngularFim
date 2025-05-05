import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing',
  imports: [CommonModule],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit {
  constructor(private http: HttpClient) { }
  fims: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=vi-VN&page=1`).subscribe(res => {
      this.fims = res.results;
      console.log("Now playing")
    })
  }
}
