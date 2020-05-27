import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {GuessmainwordComponent} from './guessmainword/guessmainword.component';
import {GuesssynonymwordComponent} from './guesssynonymword/guesssynonymword.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: GuessmainwordComponent  },
  { path: 'synonym', component: GuesssynonymwordComponent  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
