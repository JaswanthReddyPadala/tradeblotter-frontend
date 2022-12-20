import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
