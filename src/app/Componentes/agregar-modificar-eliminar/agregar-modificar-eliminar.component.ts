import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Donor } from 'src/app/Interfaces/Donor';
import { DonacionService } from 'src/app/Servicios/donacion.service';

@Component({
  selector: 'app-agregar-modificar-eliminar',
  templateUrl: './agregar-modificar-eliminar.component.html',
  styleUrls: ['./agregar-modificar-eliminar.component.css']
})

export class AgregarModificarEliminarComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'direccion','telefono','anonimo','estado','nombre_orden', 'cantidad','fecha_recojo','contacto','tipo','Action'];
  

  dataSource = new MatTableDataSource<Donor>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor (private _snackBar: MatSnackBar, private _donacionService: DonacionService)  {} //se importa el servicio de donacion 

  ngOnInit(): void {
    this.obtenerDonaciones ();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }

  obtenerDonaciones (){
      this._donacionService.getDonacion ().subscribe (data => { //llama la funcion del servicio
      this.dataSource.data =  data;
      })
  }

  eliminarDonacion(id: number) {
      this._donacionService.deleteDonacion(id).subscribe(() =>{
        this.mensajeExito ();
        this.obtenerDonaciones();
      } );
    }

  mensajeExito() {
      this._snackBar.open('El registro fue eliminado con exito','',{
        duration :4000,
        horizontalPosition: 'right',
      });
    }
  } 



