import { Component, OnInit } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FooterLayoutComponent } from '../body-layout/footer-layout/footer-layout.component';

@Component({
  selector: 'app-details-fim',
  imports: [HeaderLayoutComponent, NgIf, CommonModule,FooterLayoutComponent],
  templateUrl: './details-fim.component.html',
  styleUrl: './details-fim.component.scss'
})
export class DetailsFimComponent implements OnInit {
  constructor(private http: HttpClient, private routes:Router, private route: ActivatedRoute) {}
  DetailsFim: any = {}
  Compose: any[] = []
  trailerFim: any = {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=vi`).subscribe(res => {
      this.DetailsFim = res
    })
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`).subscribe(res => {
      const crew = res.crew;
      const allowedJobs = ['Screenplay', 'Story', 'Director', 'Writer', 'Creator','Characters'];
      const uniqueCrew: { [name: string]: { name: string, jobs: string[] } } = {};
      crew.forEach((person: any) => {
        if (allowedJobs.includes(person.job)) {
          if (!uniqueCrew[person.name]) {
            uniqueCrew[person.name] = { name: person.name, jobs: [person.job] };
          } else if (!uniqueCrew[person.name].jobs.includes(person.job)) {
            uniqueCrew[person.name].jobs.push(person.job);
          }
        }
      });
      this.Compose = Object.values(uniqueCrew);
    })
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN'); // Format theo tiếng Việt
  }
  getGenreNames(): string {
    return this.DetailsFim.genres.map((genre: {id: number, name: string}) => genre.name).join(', ');
  }

}
