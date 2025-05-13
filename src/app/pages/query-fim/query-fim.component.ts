import { Component, OnInit } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { SearchLayoutComponent } from '../search-layout/search-layout.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from '../body-layout/footer-layout/footer-layout.component';

@Component({
  selector: 'app-query-fim',
  imports: [HeaderLayoutComponent, SearchLayoutComponent, CommonModule, FooterLayoutComponent],
  templateUrl: './query-fim.component.html',
  styleUrl: './query-fim.component.scss'
})
export class QueryFimComponen implements OnInit {
  query: string = '';
  moviesFim: any = {}
  tvFim: any = {}
  peopleFim: any = {}
  companFim: any = {}
  KeyWordFim: any = {}
  netWorkFim: any = {}
  collectionFim: any = {}
  selectedQuery: string = 'movies'
  currentPage = 1;
  totalPages = 1;
  totalResult = 1;
  currentPageTV = 1;
  totalPagesTV = 1;
  totalResultTV = 1;
  currentPagePeople = 1;
  totalPagesPeople = 1;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if (this.query.trim()) {
        this.search(this.query);
        this.loadMovieResults(1)
        this.loadTvResults(1)
      }
    });
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}&page=1`).subscribe(res => {
      this.moviesFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${this.query}&page=1`).subscribe(res => {
      this.tvFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/person?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.peopleFim = res.results.map((person: any) => {
        return {
          name: person.name,
          img: person.profile_path,
          titles: person.known_for
            .filter((item: any) => item.original_title)
            .map((item: any) => item.original_title)
        };
      });
      console.log(this.peopleFim);
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/company?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.companFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.KeyWordFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/network?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.netWorkFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/collection?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.collectionFim = res.results
    })
  }
  search(query: string) {
    console.log('Tìm kiếm với từ khóa:', query);
  }
  selectSearch(query: string) {
    this.selectedQuery = query
  }
  loadMovieResults(page: number = 1) {
    const key = '09227b47e837630a07422bf8e3ba6674';
    this.http
      .get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}&page=${page}`)
      .subscribe((res) => {
        this.moviesFim = res.results;
        this.currentPage = res.page;
        this.totalPages = res.total_pages;
        this.totalResult = res.total_results;
      });
  }
  loadTvResults(page: number = 1) {
    const key = '09227b47e837630a07422bf8e3ba6674';
    this.http.get<any>(`https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${this.query}&page=${page}`)
      .subscribe((res) => {
        this.tvFim = res.results;
        this.currentPageTV = res.page;
        this.totalPagesTV = res.total_pages;
        this.totalResultTV = res.total_results;
      });
  }
}
