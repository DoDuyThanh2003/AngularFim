import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FimService } from '../../../../services/fim.service';
import { FimItemComponent } from '../fim-item/fim-item.component';

@Component({
  selector: 'app-today-fim-layout',
  imports: [CommonModule, RouterModule, FimItemComponent],
  templateUrl: './today-fim-layout.component.html',
  styleUrl: './today-fim-layout.component.scss'
})
export class TodayFimLayoutComponent implements OnInit{
  constructor( private fimService: FimService) { }
  fims: any[] = []
  ngOnInit(): void {
    this.fimService.getFim('day').subscribe((res: any) => {
      this.fims = res.results
    })
  } 
  handleClickFim(id: number) {
  console.log('Bạn vừa click vào phim có ID:', id);
  }
}
