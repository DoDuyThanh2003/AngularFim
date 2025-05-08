import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { SearchLayoutComponent } from '../search-layout/search-layout.component';

@Component({
  selector: 'app-query-fim',
  imports: [HeaderLayoutComponent,SearchLayoutComponent],
  templateUrl: './query-fim.component.html',
  styleUrl: './query-fim.component.scss'
})
export class QueryFimComponent {

}
