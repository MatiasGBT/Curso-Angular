import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../loggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //Hay que agregar el servicio como proveedor
  providers: [LoggingService]
})
export class FormularioComponent {

  @ViewChild("nombreRef") nombre: ElementRef;
  @ViewChild("apellidoRef") apellido: ElementRef;

  //Los servicios se inyectan con Dependency Injection (DI) en el constructor
  constructor (private loggingService:LoggingService, private personasService:PersonasService) {

  }

  agregarPersona():void {
    let persona = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    //this.personaCreada.emit(persona); esto ya no hace falta debido a que utilizaremos el servicio
    this.personasService.agregarPersona(persona);

    //Habiendo injectado el servicio en esta clase, ya podemos usar el objeto creado en el constructor
    this.loggingService.enviarMensajeAConsola("Persona agregada: " + persona.nombre + " " + persona.apellido);

    this.nombre.nativeElement.value = "";
    this.apellido.nativeElement.value = "";
  }
}
