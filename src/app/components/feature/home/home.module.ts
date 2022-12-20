import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { SecuritiesComponent } from './securities/securities.component';
import { HomeComponent } from './home.component';
import { RemoteBindingDirective } from 'src/app/core/directives/remote-binding.directive';
import { SecuritiesService } from 'src/app/core/services/securities/securities.service';

@NgModule({
  declarations: [HomeComponent, SecuritiesComponent, RemoteBindingDirective],
  imports: [
    CommonModule,
    GridModule,
    ButtonsModule,
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [SecuritiesService],
})
export class HomeModule {}
