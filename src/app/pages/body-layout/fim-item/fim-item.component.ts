import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fim-item',
  imports: [RouterModule,CommonModule],
  templateUrl: './fim-item.component.html',
  styleUrl: './fim-item.component.scss'
})
export class FimItemComponent {
   @Input() fim: any;
   @Output() clickFim = new EventEmitter<number>()
   onClick() {
    this.clickFim.emit(this.fim.id)
   }
}
