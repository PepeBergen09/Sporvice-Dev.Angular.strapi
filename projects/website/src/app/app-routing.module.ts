import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component:  LayoutComponent, children: [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
    { path: 'news-details/:id', loadChildren: () => import('./news/news-details/news-details.module').then(m => m.NewsDetailsModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
    { path: 'service-details/:id', loadChildren: () => import('./services/service-details/service-details.module').then(m => m.ServiceDetailsModule) },
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
  ]},
  { path: 'comming-soon', loadChildren: () => import('./pages/comming-soon/comming-soon.module').then(m => m.CommingSoonModule) },
  { path: 'error', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
