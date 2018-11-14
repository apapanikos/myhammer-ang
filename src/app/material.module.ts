import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatListModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}