import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FimService } from '../../../../services/fim.service';
@Component({
  selector: 'app-week-fim-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './week-fim-layout.component.html',
  styleUrl: './week-fim-layout.component.scss'
})
export class WeekFimLayoutComponent implements OnInit {
  constructor(private http: HttpClient,private fimService: FimService) { }
  fims: any[] = []
  moviesWeek: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.fimService.getFimWeek().subscribe((res: any) => {
      this.moviesWeek = res.results
      console.log(res.results)
      this.fims = this.moviesWeek
    })
  }
}
