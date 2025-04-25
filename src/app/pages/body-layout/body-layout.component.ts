import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-layout',
  imports: [NgIf,CommonModule],
  templateUrl: './body-layout.component.html',
  styleUrl: './body-layout.component.scss'
})
export class BodyLayoutComponent implements OnInit {
    constructor(private http: HttpClient){}
    Movies: string = ''
    fims: any [] = []
    ngOnInit(): void {
      let key = '09227b47e837630a07422bf8e3ba6674'
      this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=vi`).subscribe((res:any) => {
        let firstFim = res.results[0];
        let backdrop_path = firstFim.backdrop_path;
        this.Movies =`https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${backdrop_path}`
      })
      this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=vi`).subscribe((res:any) => {
        console.log(res.results) 
        this.fims = res.results
      })
    }
}
