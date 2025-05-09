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
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if (this.query.trim()) {
        this.search(this.query);
      }
    });
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.moviesFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.tvFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/person?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.peopleFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/company?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.companFim = res.results
    })
    this.http.get<any>(`https://api.themoviedb.org/3/search/keyword?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.KeyWordFim = res.results
    })
    // this.http.get<any>(`https://api.themoviedb.org/3/search/network?api_key=${key}&query=${this.query}`).subscribe(res => {
    //   this.netWorkFim = res.results
    // })
    this.http.get<any>(`https://api.themoviedb.org/3/search/collection?api_key=${key}&query=${this.query}`).subscribe(res => {
      this.collectionFim = res.results
    })
  }
  search(query: string) {
    console.log('Tìm kiếm với từ khóa:', query);
  }
}
