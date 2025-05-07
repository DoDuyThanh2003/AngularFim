import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaLayoutComponent } from '../media-layout/media-layout.component';

@Component({
  selector: 'app-cast-layout',
  imports: [CommonModule,MediaLayoutComponent],
  templateUrl: './cast-layout.component.html',
  styleUrl: './cast-layout.component.scss'
})
export class CastLayoutComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  topCast: any[] = []
  statistics: any = {}
  keyWork: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    const id = this.route.snapshot.paramMap.get('id')
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`).subscribe(res => {
      this.topCast = res.cast.slice(0,10)
    })
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=vi`).subscribe(res=> {
      this.statistics = res
    })
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${key}`).subscribe(data => {
      this.keyWork = data.keywords
    })
  }
}
