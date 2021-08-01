import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'info', component: InfoComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
