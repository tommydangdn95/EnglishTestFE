import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgProgressModule} from 'ngx-progressbar';
import {max} from 'rxjs/operators';
import {WordService} from './word.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      trickleSpeed: 100,
      min: 0,
      max: 10000,
      thick: true,
    })
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
