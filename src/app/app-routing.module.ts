import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarModificarEliminarComponent } from './Componentes/agregar-modificar-eliminar/agregar-modificar-eliminar.component';
import { FormComponent } from './Componentes/form/form.component';
import { FrontComponent } from './Componentes/front/front.component';
import { AgruparComponent } from './Componentes/agrupar/agrupar.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';


//Renderizando componentes al path Ruteo 

const routes: Routes = [

  {path: "",redirectTo:"Front", pathMatch:"full"}, //Redireccionar path vacio 

  {path: "agregar",component:AgregarModificarEliminarComponent},
  {path: "form",component:FormComponent},
  {path: "Front",component:FrontComponent}, 
  {path: "editar/:id",component:FormComponent},
  {path: "agrupar/:id",component:AgruparComponent},
  {path: "contacto",component:ContactoComponent},

  {path: "**",redirectTo:"Front", pathMatch:"full"},// Si no hace match con nada redireccionar a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
