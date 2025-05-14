import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FimService } from '../../../../services/fim.service';
import { FimItemComponent } from '../fim-item/fim-item.component';
@Component({
  selector: 'app-week-fim-layout',
  imports: [CommonModule, RouterModule, FimItemComponent],
  templateUrl: './week-fim-layout.component.html',
  styleUrl: './week-fim-layout.component.scss'
})
export class WeekFimLayoutComponent implements OnInit {
  constructor(private fimService: FimService) { }
  fims: any[] = []
  ngOnInit(): void {
    this.fimService.getFimWeek().subscribe((res: any) => {
      this.fims = res.results
    })
  }
  handleClickFim(id: number) {
  console.log('Bạn vừa click vào phim có ID:', id);
  }
}
