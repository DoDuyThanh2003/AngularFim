import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FimService } from '../../../../services/fim.service';

@Component({
  selector: 'app-today-fim-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './today-fim-layout.component.html',
  styleUrl: './today-fim-layout.component.scss'
})
export class TodayFimLayoutComponent implements OnInit {
  constructor(private http: HttpClient, private routes: Router, private fimService: FimService) { }
  fims: any[] = []
  moviesToday: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.fimService.getFim().subscribe((res: any) => {
      this.moviesToday = res.results
      this.fims = this.moviesToday;
    })
  }
}
