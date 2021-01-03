import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TimeConvertPipe } from "./pipes/time-converter/time-convert.pipe";
import { UploadComponentComponent } from "./components/upload-component/upload-component.component";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TimeConvertPipe,
    UploadComponentComponent
  ],
  imports: [CommonModule],
  exports: [UploadComponentComponent]
})
export class SharedModule {}
