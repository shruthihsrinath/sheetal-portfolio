import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollaborationComponent } from './collaboration.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CollaborationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CollaborationComponent
      }
    ])
  ]
})
export class CollaborationModule { }
