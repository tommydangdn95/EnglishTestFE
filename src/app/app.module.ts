import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgProgressModule} from 'ngx-progressbar';
import {max} from 'rxjs/operators';
import {WordService} from './word.service';
import {ReactiveFormsModule} from '@angular/forms';
import { GuessmainwordComponent } from './guessmainword/guessmainword.component';
import { AppRoutingModule } from './app-routing.module';
import { GuessMainWordComponent } from './guess-main-word/guess-main-word.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessmainwordComponent,
    GuessMainWordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      trickleSpeed: 100,
      min: 0,
      max: 10000,
      thick: true,
    }),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
