import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FimService } from '../../../../services/fim.service';
@Component({
  selector: 'app-now-playing',
  imports: [CommonModule],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss'
})
export class NowPlayingComponent implements OnInit {
  constructor(private http: HttpClient,private fimService: FimService) { }
  fims: any[] = []
  ngOnInit(): void {
    let key = '09227b47e837630a07422bf8e3ba6674'
    this.fimService.getFimNowPlaying().subscribe(res => {
      this.fims = res.results;
    })
  }
}
