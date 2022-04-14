import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //Hay que utilizar este decorador para enviar las propiedades hacia el componente padre
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string ="";
  apellidoInput: string ="";

  agregarPersona():void {
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //Ahora al crear el objeto persona vamos a reportarlo al componente padre (app.component)
    //con esto lo propagamos al componente padre
    this.personaCreada.emit(persona);
    //Ahora en el componente padre tenemos que usar event biding para poder utilizar este objeto
    //ver app.component.html

    this.nombreInput = "";
    this.apellidoInput = "";
  }
}
