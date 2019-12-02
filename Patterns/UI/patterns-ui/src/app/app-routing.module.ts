import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegatePatternComponent } from './delegate-pattern/delegate-pattern.component';

const routes: Routes = [
  {path: 'delegate', component: DelegatePatternComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
