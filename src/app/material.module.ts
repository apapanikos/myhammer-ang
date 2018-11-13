import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}