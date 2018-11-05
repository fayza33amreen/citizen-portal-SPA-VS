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
    MatTableModule,
    MatFormFieldModule
} from '@angular/material';
//import { MatTableModule } from '@angular/material/table';
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
        MatTableModule,
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
        MatTableModule,
        MatSelectModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
      ],
})
export class MaterialModule { }
