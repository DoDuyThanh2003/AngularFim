import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-week-fim-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './week-fim-layout.component.html',
  styleUrl: './week-fim-layout.component.scss'
})
export class WeekFimLayoutComponent implements OnInit {
  constructor(private http: HttpClient) { }
  fims: any[] = []
  moviesWeek: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=vi`).subscribe((res: any) => {
      this.moviesWeek = res.results
      console.log(res.results)
      this.fims = this.moviesWeek
    })
  }
}
