import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FimService } from '../../../../services/fim.service';
@Component({
  selector: 'app-media-layout',
  imports: [CommonModule, NgIf],
  templateUrl: './media-layout.component.html',
  styleUrl: './media-layout.component.scss'
})
export class MediaLayoutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fimService:FimService) { }
  popular: any = {}
  trailerList: any[] = [];
  selectedTab: string = 'popular'
  PosterList: any = []  
  Recomment: any = []
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id) return
    this.fimService.getDetailFim(id).subscribe(res => {
      this.popular = res
    })
    this.fimService.getComment(id,'videos').subscribe(res => {
        this.trailerList = res.results.filter((v: any) => v.site === 'YouTube').slice(0, 6);
      });
    this.fimService.getPoster(id).subscribe(res => {
      this.PosterList = res.posters.slice(0,7)
    })
    this.fimService.getComment(id,'recommendations').subscribe(res => {
      this.Recomment = res.results.filter((movis: any) => movis.backdrop_path)
    })
  }
  selectTab(name: string) {
    this.selectedTab = name
  }
}
