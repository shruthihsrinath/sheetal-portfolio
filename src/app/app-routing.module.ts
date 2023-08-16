import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadChildren: () => import('../app/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../app/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'portfolio/:collabName',
    loadChildren: () => import('../app/collaboration/collaboration.module').then(m => m.CollaborationModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
