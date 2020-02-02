import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material'

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from './../../shared';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [TranslateModule,CommonModule, UsersRoutingModule, PageHeaderModule, MatFormFieldModule, MatTableModule, MatInputModule ],
    declarations: [UsersComponent, UserDetailComponent]
})
export class UsersModule {}
