import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


const matImports = [
  MatButtonModule,
  MatCardModule,
  MatIconModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matImports
  ],
  exports: [
    matImports
  ]
})
export class MatImportsModule { }
