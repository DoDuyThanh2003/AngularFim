import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-layout',
  imports: [CommonModule, NgIf],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss'
})
export class MediaLayoutComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  popula: any = {}
  trailerList: any[] = [];
  selectedTab: string = 'popular'
  PosterList: any = {}
  Recomment: any = {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=vi`).subscribe(res => {
      this.popula = res
    })
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
      .subscribe(res => {
        this.trailerList = res.results.filter((v: any) => v.site === 'YouTube').slice(0, 6);
      });
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}&language=vi-VN&include_image_language=vi`).subscribe(res => {
      this.PosterList = res.posters.slice(0,7)
    })
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US`).subscribe(res => {
      this.Recomment = res.results.filter((movis: any) => movis.backdrop_path)
    })
  }
  selectTab(name: string) {
    this.selectedTab = name
  }
}
