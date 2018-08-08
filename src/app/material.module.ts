import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatButtonModule } from '@angular/material/button';




@NgModule({
    declarations: [
      
    ],
    imports: [
      MatInputModule,
      MatToolbarModule,
      MatTableModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatButtonModule
    ],
    exports: [
      MatInputModule,
      MatToolbarModule,
      MatTableModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatButtonModule
    ],
    providers: [],
  })
  export class MaterialModule { }