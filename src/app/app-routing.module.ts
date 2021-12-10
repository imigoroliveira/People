import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './components/Funcionario/Funcionario.component';
import { FuncionarioCadComponent } from './components/funcionario-cad/funcionario-cad.component';
import { FolhapagamentoCadComponent } from './components/folhapagamento-cad/folhapagamento-cad.component';
import { FolhapagamentoComponent } from './components/folhapagamento/folhapagamento.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "funcionario/listar",
    component: FuncionarioComponent
  },
  {
    path: "funcionario/cadastrar",
    component: FuncionarioCadComponent
  },
  {
    path: "folha-de-pagamento/listar",
    component: FuncionarioComponent
  },
  {
    path: "folha-de-pagamento/cadastrar",
    component: FuncionarioCadComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
