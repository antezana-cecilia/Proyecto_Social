import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { matSelectAnimations } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Donor } from 'src/app/Interfaces/Donor';
import { DonacionService } from 'src/app/Servicios/donacion.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
form:FormGroup; 
id : number;

operacion: string = 'REGISTRO'; 

constructor(private fb: FormBuilder,
  private _donacionService: DonacionService,
  private _snackBar: MatSnackBar,
  private router: Router,            //para configurar avegar despues de agregar
  private aRoute: ActivatedRoute) { //para la variable opcion 
  this.form = this.fb.group ({
   
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    direccion : ['', Validators.required],
    email : ['', Validators.required],
    telefono : ['', Validators.required],
    anonimo : ['', Validators.required],
    estado : ['', Validators.required],
    nombre_orden : ['', Validators.required],
    cantidad : ['', Validators.required],
    fecha_recojo : ['', Validators.required],
    contacto : ['', Validators.required],
    tipo : ['', Validators.required],
  })

  this.id = Number (this.aRoute.snapshot.paramMap.get('id')); //obtener el /x de la ruta para saber si dona o edita
}

ngOnInit() : void {

  if (this.id != 0) {
    this.operacion = 'EDICION';
    this.obtenerDonacion (this.id);
  }
}

obtenerDonacion (id: number) {
  this._donacionService.getDonacio (id).subscribe (data => {
    this.form.setValue ({ //enviaer formulario completo

      //recuperar los datos al la interfaz de formulario para editar
      nombre : data.nombre,
      apellido : data.apellido,
      direccion : data.direccion,
      email : data.email,
      telefono : data.telefono,
      anonimo : data.anonimo,
      estado : data.estado,
      nombre_orden : data.nombre_orden,
      cantidad : data.cantidad,
      fecha_recojo : data.fecha_recojo,
      contacto : data.contacto,
      tipo : data.tipo,
    })
  })
}
 
agregarEditarDonacion () {
 
  //crear objeto, atrapar los valores que contiene el formulario para mandarlo l back
  const donacion: Donor = {
    nombre: this.form.value.nombre,
    apellido: this.form.value.apellido,
    direccion: this.form.value.direccion,
    email: this.form.value.email,
    telefono: this.form.value.telefono,
    anonimo: this.form.value.anonimo,
    estado: this.form.value.estado,
    nombre_orden: this.form.value.nombre_orden, 
    cantidad: this.form.value.cantidad,
    fecha_recojo: this.form.value.fecha_recojo, 
    contacto: this.form.value.contacto,
    tipo: this.form.value.tipo
  }
 
  if (this.id !=0){
    donacion.id = this.id;
    this.editarDonacion (this.id, donacion);
  }
  else 
  {
    this.agregarDonacion (donacion);
  }
}

editarDonacion (id: number, donacion : Donor) {
  //enviar objeto a backend
  this._donacionService.updateDonacion (id, donacion).subscribe (() => {
    this.mensajeExito (`actualizada`);
  this.router.navigate(['/agregar']);
  })
}
agregarDonacion (donacion:Donor){
//enviar objeto a backend
this._donacionService.addDonacion (donacion).subscribe (data => {
  this.mensajeExito (`registrada`);
  this.router.navigate(['/agregar']);
}) 
}

mensajeExito(texto: string) {
  this._snackBar.open(`La donacion fue ${texto} exitosa`,'',{
    duration :4000,
    horizontalPosition: 'right',
  });
}

}