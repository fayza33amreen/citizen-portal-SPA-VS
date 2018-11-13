import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
        
      ],

      exports: [
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule,
        MatSelectModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
      ],
})
export class MaterialModule { }
