import { Component, OnInit } from '@angular/core';

import alumnos from '../../assets/json/alumnos.json';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  Alumnos: any = alumnos;
  constructor() { }

  ngOnInit(): void {
  }

}
