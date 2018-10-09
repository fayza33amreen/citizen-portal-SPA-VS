import { NgModule } from '@angular/core';
import { 
    MatGridListModule, 
    MatCardModule, 
    MatDialogModule,
    MatMenuModule, 
    MatIconModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule,
    MatFormFieldModule } from '@angular/material';    
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
        
      ],

      exports: [
        MatGridListModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
      ],
})
export class MaterialModule { }