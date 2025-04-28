import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { BodyLayoutComponent } from '../body-layout/body-layout.component';

@Component({
  selector: 'app-dashboad-layout',
  standalone: true,
  imports: [HeaderLayoutComponent,BodyLayoutComponent],
  templateUrl: './dashboad-layout.component.html',
  styleUrl: './dashboad-layout.component.scss'
})
export class DashboadLayoutComponent {
}
