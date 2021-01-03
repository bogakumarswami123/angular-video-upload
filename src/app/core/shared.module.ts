import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TimeConvertPipe } from './pipes/time-converter/time-convert.pipe';



@NgModule({
  declarations: [PageNotFoundComponent, TimeConvertPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
