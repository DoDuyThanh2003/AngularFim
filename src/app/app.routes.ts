import { Routes } from '@angular/router';
import { DashboadLayoutComponent } from './pages/dashboad-layout/dashboad-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'dashboad',
        pathMatch:'full'
    },
    {
        path:'dashboad',
        component:DashboadLayoutComponent
    }
];
