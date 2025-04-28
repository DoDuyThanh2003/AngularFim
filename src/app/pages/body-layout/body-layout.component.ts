import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodayFimLayoutComponent } from './today-fim-layout/today-fim-layout.component';
import { WeekFimLayoutComponent } from './week-fim-layout/week-fim-layout.component';
import { PopularLayoutComponent } from './popular-layout/popular-layout.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

@Component({
  selector: 'app-body-layout',
  standalone: true,
  imports: [NgIf,CommonModule, TodayFimLayoutComponent, WeekFimLayoutComponent,PopularLayoutComponent,NowPlayingComponent],
  templateUrl: './body-layout.component.html',
  styleUrl: './body-layout.component.scss'
})
export class BodyLayoutComponent implements OnInit {
    constructor(private http: HttpClient){}
    Movies: string = ''
    selectedTab: string = 'today'; 
    ngOnInit(): void {
      let key = '09227b47e837630a07422bf8e3ba6674'
      this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=vi`).subscribe((res:any) => {
        let firstFim = res.results[0];
        let backdrop_path = firstFim.backdrop_path;
        this.Movies =`https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${backdrop_path}`
      })
    }
    selectTab(tab: string) {
      this.selectedTab = tab;
    }
    slecetedFim: string = 'popular'
    selectFim(select: string){
         this.slecetedFim = select
    }
}
