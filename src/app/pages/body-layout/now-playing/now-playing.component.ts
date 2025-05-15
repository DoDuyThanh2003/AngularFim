import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FimService } from '../../../../services/fim.service';
import { FimItemComponent } from '../fim-item/fim-item.component';
@Component({
  selector: 'app-now-playing',
  imports: [CommonModule, FimItemComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit {
  constructor(private fimService: FimService) { }
  fims: any[] = []
  ngOnInit(): void {
    this.fimService.getFimPopular('now_playing').subscribe(res => {
      this.fims = res.results;
    })
  }
  handlerClick(id :number) {
    console.log('Bạn vừa click vào phim có ID:', id);
  }
}
