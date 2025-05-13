import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FimService } from '../../../../services/fim.service';
@Component({
  selector: 'app-popular-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './popular-layout.component.html',
  styleUrl: './popular-layout.component.scss'
})
export class PopularLayoutComponent implements OnInit {
  constructor(private http: HttpClient,private fimService: FimService) {}
  fims: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.fimService.getFimPopular().subscribe( res => {
      this.fims = res.results;
    })
  }

}
