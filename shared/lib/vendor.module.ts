import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';

const MODULES = [
  // Angular modules
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule,
  // Angular Material
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class VendorModule { }
