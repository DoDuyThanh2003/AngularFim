import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodayFimLayoutComponent } from './today-fim-layout/today-fim-layout.component';
import { WeekFimLayoutComponent } from './week-fim-layout/week-fim-layout.component';
import { PopularLayoutComponent } from './popular-layout/popular-layout.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchLayoutComponent } from '../search-layout/search-layout.component';
import { FimService } from '../../../services/fim.service';

@Component({
  selector: 'app-body-layout',
  standalone: true,
  imports: [NgIf, CommonModule, TodayFimLayoutComponent, WeekFimLayoutComponent,
    PopularLayoutComponent, NowPlayingComponent, LeaderboardComponent, FooterLayoutComponent, FormsModule, SearchLayoutComponent],
  templateUrl: './body-layout.component.html',
  styleUrl: './body-layout.component.scss'
})
export class BodyLayoutComponent implements OnInit {
  constructor(private http: HttpClient, private router :Router, private fimService: FimService ) { }
  Movies: string = ''
  selectedTab: string = 'today';
  searchQuery: string = '';
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.fimService.getFim().subscribe((res: any) => {
      let firstFim = res.results[0];
      let backdrop_path = firstFim.backdrop_path;
      this.Movies = `https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${backdrop_path}`
    })
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  slecetedFim: string = 'popular'
  selectFim(select: string) {
    this.slecetedFim = select
  }
  onSearch() {
    if (this.searchQuery.trim()) {
      console.log("Search query:", this.searchQuery);
      this.router.navigate(['/search'], { 
        queryParams: { query: this.searchQuery } 
      }); 
    }
    else {
      alert("Vui lòng nhập để tìm kiếm")
    }
  }
}
