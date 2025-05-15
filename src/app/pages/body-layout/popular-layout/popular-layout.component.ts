import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FimService } from '../../../../services/fim.service';
import { FimItemComponent } from '../fim-item/fim-item.component';
@Component({
  selector: 'app-popular-layout',
  imports: [CommonModule, RouterModule,FimItemComponent],
  templateUrl: './popular-layout.component.html',
  styleUrl: './popular-layout.component.scss'
})
export class PopularLayoutComponent implements OnInit {
  constructor(private http: HttpClient,private fimService: FimService) {}
  fims: any[] = []
  ngOnInit(): void {
    this.fimService.getFimPopular('popular').subscribe( res => {
      this.fims = res.results;
    })
  }
  handleClickFim(id :number) {
      console.log('Bạn vừa click vào phim có ID:', id);
  }
}
