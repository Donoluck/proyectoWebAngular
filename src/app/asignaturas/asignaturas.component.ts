import { Component, OnInit } from '@angular/core';

//Json
import asignaturas from '../../assets/json/asignaturas.json';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],

})
export class AsignaturasComponent implements OnInit {

  // Exporto los datos del archivo JSON a la  vista
  Asignaturas: any = asignaturas;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
