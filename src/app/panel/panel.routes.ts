import { RouterModule, Routes } from '@angular/router';
// COMPONENTES
import { PanelComponent } from './panel.component';
import { LoginComponent } from './login/login.component';


const panelRoutes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: 'login', component: LoginComponent }, 
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]
  }
];

export const PANEL_ROUTES = RouterModule.forChild(panelRoutes);
