import { Routes } from '@angular/router';
import { DashboadLayoutComponent } from './pages/dashboad-layout/dashboad-layout.component';
import { DetailsFimComponent } from './pages/details-fim/details-fim.component';
import { QueryFimComponent } from './pages/query-fim/query-fim.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboad',
        pathMatch: 'full'
    },
    {
        path: 'dashboad',
        component: DashboadLayoutComponent
    },
    {
        path: 'app-details-fim/:id',
        component: DetailsFimComponent
    },
    {
        path: 'search',
        component: QueryFimComponent
    }
];
