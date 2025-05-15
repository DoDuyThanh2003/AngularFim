import { Component, OnInit } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FooterLayoutComponent } from '../body-layout/footer-layout/footer-layout.component';
import { CastLayoutComponent } from './cast-layout/cast-layout.component';
import { FimService } from '../../../services/fim.service';

@Component({
  selector: 'app-details-fim',
  imports: [HeaderLayoutComponent, NgIf, CommonModule,FooterLayoutComponent,CastLayoutComponent],
  templateUrl: './details-fim.component.html',
  styleUrl: './details-fim.component.scss'
})
export class DetailsFimComponent implements OnInit {
  constructor(private http: HttpClient, private routes:Router, private route: ActivatedRoute, private fimService:FimService  ) {}
  DetailsFim: any = {}
  Compose: any[] = []
  trailerFim: any = {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id) return;
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.fimService.getDetailFim(id).subscribe(res => {
      this.DetailsFim = res
    })
    this.fimService.getCredit(id).subscribe(res => {
      const crew = res.crew;
      const allowedJobs = ['Screenplay', 'Story', 'Director', 'Writer', 'Creator','Characters'];
      const uniqueCrew: { [name: string]: { name: string, jobs: string[] } } = {};
      crew.forEach((person: any) => {
        if (allowedJobs.includes(person.job)) {
          if (!uniqueCrew[person.name]) {
            uniqueCrew[person.name] = { name: person.name, jobs: [person.job] };
          }
        }
      });
      this.Compose = Object.values(uniqueCrew);
    })
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  }
  getGenreNames(): string {
    return this.DetailsFim.genres.map((genre: {id: number, name: string}) => genre.name).join(',');
  }

}
