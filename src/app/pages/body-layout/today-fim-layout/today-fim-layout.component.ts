import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-fim-layout',
  imports: [CommonModule],
  templateUrl: './today-fim-layout.component.html',
  styleUrl: './today-fim-layout.component.scss'
})
export class TodayFimLayoutComponent implements OnInit {
  constructor(private http: HttpClient) { }
  fims: any[] = []
  moviesToday: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=vi`).subscribe((res: any) => {
      this.moviesToday = res.results
      this.fims = this.moviesToday;
    })
  }
}
