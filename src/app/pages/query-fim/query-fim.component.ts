import { Component, OnInit } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { SearchLayoutComponent } from '../search-layout/search-layout.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from '../body-layout/footer-layout/footer-layout.component';
import { FimService } from '../../../services/fim.service';
@Component({
  selector: 'app-query-fim',
  imports: [HeaderLayoutComponent, SearchLayoutComponent, CommonModule, FooterLayoutComponent],
  templateUrl: './query-fim.component.html',
  styleUrl: './query-fim.component.scss'
})
export class QueryFimComponen implements OnInit {
  query: string = '';
  moviesFim: any = []
  tvFim: any = []
  peopleFim: any = []
  companyFim: any = []
  KeyWordFim: any = []
  netWorkFim: any = []
  collectionFim: any = []
  selectedQuery: string = 'movies'
  currentPage: { [key: string]: number } = {};
  totalPages: { [key: string]: number } = {};
  totalResults: { [key: string]: number } = {};
  constructor(private route: ActivatedRoute, private fimService: FimService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if (this.query.trim()) {
        this.search(this.query);
        this.loadMovieResults(1)
        this.loadTvResults(1)
        this.loadPeopleResults(1)
        this.loadCollectionResults(1)
        this.loadCompanyResults(1)
        this.loadKeywordResults(1)
      }
    });
    this.fimService.getSearchFim('movie', this.query).subscribe(res => {
      this.moviesFim = res.results
    })
    this.fimService.getSearchFim('tv', this.query).subscribe(res => {
      this.tvFim = res.results
    })
    this.fimService.getSearchFim('person', this.query).subscribe(res => {
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
    this.fimService.getSearchFim('company', this.query).subscribe(res => {
      this.companyFim = res.results
    })
    this.fimService.getSearchFim('keyword', this.query).subscribe(res => {
      this.KeyWordFim = res.results
    })
    this.fimService.getSearchFim('collection', this.query).subscribe(res => {
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
    this.fimService.getSearchFim('movie', this.query, page)
      .subscribe((res) => {
        this.moviesFim = res.results;
        this.currentPage['movie'] = res.page;
        this.totalPages['movie'] = res.total_pages;
        this.totalResults['movie'] = res.total_results;
      });
  }
  loadTvResults(page: number = 1) {
    this.fimService.getSearchFim('tv', this.query, page).subscribe((res) => {
      this.tvFim = res.results;
      this.currentPage['tv'] = res.page;
      this.totalPages['tv'] = res.total_pages;
      this.totalResults['tv'] = res.total_results;
    });
  }
  loadPeopleResults(page: number = 1) {
    this.fimService.getSearchFim('person', this.query, page).subscribe((res) => {
      this.peopleFim = res.results;
      this.currentPage['person'] = res.page;
      this.totalPages['person'] = res.total_pages;
      this.totalResults['person'] = res.total_results;
    });
  }

  loadCollectionResults(page: number = 1) {
    this.fimService.getSearchFim('collection', this.query, page).subscribe((res) => {
      this.collectionFim = res.results;
      this.currentPage['collection'] = res.page;
      this.totalPages['collection'] = res.total_pages;
      this.totalResults['collection'] = res.total_results;
    });
  }
  loadCompanyResults(page: number = 1) {
    this.fimService.getSearchFim('company', this.query, page).subscribe((res) => {
      this.companyFim = res.results;
      this.currentPage['company'] = res.page;
      this.totalPages['company'] = res.total_pages;
      this.totalResults['company'] = res.total_results;
    });
  }
  loadKeywordResults(page: number = 1) {
    this.fimService.getSearchFim('keyword', this.query, page).subscribe((res) => {
      this.KeyWordFim = res.results;
      this.currentPage['keyword'] = res.page;
      this.totalPages['keyword'] = res.total_pages;
      this.totalResults['keyword'] = res.total_results;
    });
  }
}
