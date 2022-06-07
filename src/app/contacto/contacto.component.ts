import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  activarMsg:boolean=false;
  formulario:FormGroup;
  
  constructor(public FormB:FormBuilder) {
    this.formulario=this.FormB.group({
      nombre: ["", [Validators.required,Validators.maxLength(25)]],
      asunto: ["",[Validators.required,Validators.maxLength(20)]],
      comentarios: ["",Validators.required]
    })
  }
  ngOnInit(): void {
  }
  validacion(){
    console.log(this.formulario.get("nombre")?.value);

    this.activarMsg=true;
  }

}
