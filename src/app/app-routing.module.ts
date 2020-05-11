import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {GuessMainWordComponent} from './guess-main-word/guess-main-word.component';
import {GuessmainwordComponent} from './guessmainword/guessmainword.component';

const routes: Routes = [
  { path: 'main', component: GuessMainWordComponent  },
  { path: 'synonym', component: GuessmainwordComponent  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
