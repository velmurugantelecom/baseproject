import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../shared/material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
