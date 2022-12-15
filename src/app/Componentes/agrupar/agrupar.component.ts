
import { ParseFlags } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Donor } from 'src/app/Interfaces/Donor';
import { DonacionService } from 'src/app/Servicios/donacion.service';

@Component({
  selector: 'app-agrupar',
  templateUrl: './agrupar.component.html',
  styleUrls: ['./agrupar.component.css']
})

export class AgruparComponent  implements  OnInit {
id: number;
donacion!: Donor;

  constructor (private _donacionService: DonacionService,
    private aRoute: ActivatedRoute) {
     this.id = Number ( this.aRoute.snapshot.paramMap.get('id'))  // se almacena el id de VER
    }

  ngOnInit (): void {
    this.obtenerDonacion ();
  }

  obtenerDonacion () {
    this._donacionService.getDonacio(this.id).subscribe (data => {
      this.donacion = data;
    })
  }
}