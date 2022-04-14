import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  //Hay que utilizar este decorador para obtener las propiedades del componente padre
  @Input() persona: Persona;
  @Input() i: number;

  constructor() { }

  ngOnInit(): void {
  }

}
