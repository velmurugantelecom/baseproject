import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
     MatFormFieldModule, 
     MatInputModule,
     MatButtonModule,
     MatDialogModule,
     ReactiveFormsModule,
     MatTableModule,
     MatIconModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule
  ]
})
export class MaterialModule { }
