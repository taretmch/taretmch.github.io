import { NgModule } from '@angular/core';

import { VendorModule } from './vendor.module';
import { UIModule }     from './ui';

const MODULES = [
  // Angular modules
  VendorModule,
  // Custom modules
  UIModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class SharedModule { }
