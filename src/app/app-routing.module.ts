import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'pessoa', loadChildren: './modules/cadastros/pessoa/pessoa.module#PessoaModule' },
      { path: 'empresa', loadChildren: './modules/cadastros/empresa/empresa.module#EmpresaModule' },
      { path: 'formulario', loadChildren: './modules/cadastros/formulario/formulario.module#FormularioModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
