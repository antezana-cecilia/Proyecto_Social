import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort';  
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; // para el mensaje de exito al guardar eliminar
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatRippleModule} from '@angular/material/core'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 


@NgModule({ 
  declarations: [
  ],  
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule, 
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatRippleModule,
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatRippleModule,

  ]
})
export class SharedModule { }
