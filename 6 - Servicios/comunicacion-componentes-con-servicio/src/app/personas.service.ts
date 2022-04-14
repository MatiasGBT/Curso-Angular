import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara'),
  ];

  constructor(private loggingService: LoggingService) {}

  //Definimos la propiedad que capturara el evento
  saludar = new EventEmitter<number>();

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola(
      'Servicio dentro de otro servicio: ' + persona.nombre
    );
    this.personas.push(persona);
  }
}
