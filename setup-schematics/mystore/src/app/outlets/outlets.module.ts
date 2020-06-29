import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IconModule,
  OutletRefModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { OutletComponent } from './outlets.component';

@NgModule({
  imports: [CommonModule, IconModule, OutletRefModule, PageComponentModule],
  declarations: [OutletComponent],

  exports: [OutletComponent],
})
export class BootcampOutletsModule {}
