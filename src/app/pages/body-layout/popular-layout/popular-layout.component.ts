import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-layout',
  imports: [CommonModule],
  templateUrl: './popular-layout.component.html',
  styleUrl: './popular-layout.component.scss'
})
export class PopularLayoutComponent implements OnInit {
  constructor(private http: HttpClient) {}
  fims: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=vi-VN&page=1`).subscribe( res => {
      this.fims = res.results;
    })
  }

}
