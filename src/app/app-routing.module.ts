import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pestañas
import { HomeComponent } from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {HistoriaComponent} from './historia/historia.component';
import { CursosComponent } from './cursos/cursos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';



const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"historia", component:HistoriaComponent},
  {path:"cursos", component:CursosComponent},
  {path:"galeria", component:GaleriaComponent},
  {path:"asignaturas", component:AsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
