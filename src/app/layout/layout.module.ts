import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { BoardModule } from '../board/board.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NavigationBarModule,
    SidebarModule,
    BoardModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
