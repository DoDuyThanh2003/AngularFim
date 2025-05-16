import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaLayoutComponent } from '../media-layout/media-layout.component';
import { FimService } from '../../../../services/fim.service';


@Component({
  selector: 'app-cast-layout',
  imports: [CommonModule,MediaLayoutComponent],
  templateUrl: './cast-layout.component.html',
  styleUrl: './cast-layout.component.scss'
})
export class CastLayoutComponent implements OnInit {
  constructor( private route: ActivatedRoute, private fimService:FimService) {}
  topCast: any[] = []
  statistics: any = {}
  keyWork: any[] = []
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id) return
    this.fimService.getCredit(id).subscribe(res => {
      this.topCast = res.cast.slice(0,10)
    })
    this.fimService.getDetailFim(id).subscribe(res=> {
      this.statistics = res
    })
    this.fimService.getComment(id,'keywords').subscribe(data => {
      this.keyWork = data.keywords
    })
  }
}
