import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreciousComponent } from './precious/precious.component';

const routes: Routes = [
  {path: '', component: PreciousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
