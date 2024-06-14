import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../shared/material/material.module';

import { TestRoutingModule } from './test-routing.module';
import {TestComponent  } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialModule
  ]
})
export class TestModule { }
