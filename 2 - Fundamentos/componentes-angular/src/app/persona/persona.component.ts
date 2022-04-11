import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  constructor() { }

}
//Al generar el componente desde la terminal CLI (con el comando ng generate component nombre-componente
//o ng g c nombre-componente) genera todo el código solo y lo agrega automáticamente en
//el archivo app.module.ts