import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-layout',
  imports: [CommonModule],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss'
})
export class MediaLayoutComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  popula: any = {}
  trailerList: any[] = [];
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=vi`).subscribe(res => {
      this.popula = res
    })
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
      .subscribe(res => {
        this.trailerList = res.results.filter((v: any) => v.site === 'YouTube').slice(0,6);
      });
  }
}
