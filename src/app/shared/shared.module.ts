import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule,FlexLayoutModule,MatToolbarModule, MatIconModule, MatButtonModule
  ],
  exports:[ FormsModule, ReactiveFormsModule, HttpClientModule,FlexLayoutModule,MatToolbarModule,MatIconModule, MatButtonModule]
})
export class SharedModule { }
