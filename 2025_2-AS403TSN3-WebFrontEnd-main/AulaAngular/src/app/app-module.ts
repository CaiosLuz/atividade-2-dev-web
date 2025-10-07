import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuSuperior } from './menu-superior/menu-superior';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home-component/home-component';
import { ProdutoComponent } from './produto-component/produto-component';
import { SobreComponent } from './sobre-component/sobre-component';
import { ProdutoDetalheComponent } from './produto-detalhe-component/produto-detalhe-component';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    Home,
    PaginaNaoEncontrada,
    HomeComponent,
    ProdutoComponent,
    SobreComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
