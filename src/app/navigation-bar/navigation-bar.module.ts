import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { SearchBarModule } from '../search-bar/search-bar.module';



@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
