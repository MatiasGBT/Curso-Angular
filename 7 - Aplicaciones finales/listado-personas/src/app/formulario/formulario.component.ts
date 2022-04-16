import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @ViewChild("nombreRef") nombre: ElementRef;
  @ViewChild("apellidoRef") apellido: ElementRef;

  constructor (private loggingService:LoggingService, private personasService:PersonasService) {
    this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: " + (indice + 1))
    );
  }

  agregarPersona():void {
    let nombre = this.nombre.nativeElement.value;
    let apellido = this.apellido.nativeElement.value;
    if (nombre !== "" && apellido !== "") {
      let persona = new Persona(nombre, apellido);
      this.personasService.agregarPersona(persona);
      this.loggingService.enviarMensajeAConsola("Persona agregada: " + persona.nombre + " " + persona.apellido);
      this.nombre.nativeElement.value = "";
      this.apellido.nativeElement.value = "";
    }
  }
}
