import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { CtaComponent } from './components/cta/cta.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    CtaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
