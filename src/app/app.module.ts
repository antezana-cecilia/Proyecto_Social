import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarModificarEliminarComponent } from './Componentes/agregar-modificar-eliminar/agregar-modificar-eliminar.component';
import { AgruparComponent } from './Componentes/agrupar/agrupar.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './Componentes/form/form.component';
import { FrontComponent } from './Componentes/front/front.component';
import { SharedModule } from './shared/shared.module';

//angular material
@NgModule({
  declarations: [
  AppComponent,
  AgregarModificarEliminarComponent,
  AgruparComponent,
  FormComponent,
  FrontComponent,
  ContactoComponent
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
