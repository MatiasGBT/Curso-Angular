import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: Persona;
  @Input() i: number;

  constructor(private personasService:PersonasService) { }

  //Comunicaremos este componente (este método) a otro con un servicio
  emitirSaludo() {
    this.personasService.saludar.emit(this.i); //ver formulario.component.ts el constructor
  }
}
