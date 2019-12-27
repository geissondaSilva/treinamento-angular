import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeradorAvatarComponent } from './gerador-avatar.component';


const routes: Routes = [
  {path: '', component: GeradorAvatarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeradorAvatarRoutingModule { }
