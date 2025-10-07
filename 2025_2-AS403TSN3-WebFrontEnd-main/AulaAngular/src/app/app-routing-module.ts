import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { HomeComponent } from './home-component/home-component';
import { SobreComponent } from './sobre-component/sobre-component';
import { ProdutoComponent } from './produto-component/produto-component';
import { ProdutoDetalheComponent } from './produto-detalhe-component/produto-detalhe-component';

const routes: Routes = [
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'home-component', component: HomeComponent },
  { path: 'sobre-component', component: SobreComponent },
  { path: 'produto-detalhe-component', component: ProdutoDetalheComponent },
  { path: 'produto-component', component: ProdutoComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
