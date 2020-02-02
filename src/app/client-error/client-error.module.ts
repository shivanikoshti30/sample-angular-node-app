import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientErrorRoutingModule } from './client-error-routing.module';

@NgModule({
  declarations: [AccessDeniedComponent, NotFoundComponent],
  imports: [
    CommonModule,
    ClientErrorRoutingModule
  ]
})
export class ClientErrorModule { }
