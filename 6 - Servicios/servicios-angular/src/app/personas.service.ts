import { Injectable } from '@angular/core';
import { LoggingService } from './loggingService.service';
import { Persona } from './persona.model';

//Si vamos a injectar un servicio dentro de otro tenemos que utilizar el decorador @Injectable
@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara'),
  ];

  //Inyectar un servicio dentro de otro:
  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola(
      'Servicio dentro de otro servicio: ' + persona.nombre
    );
    this.personas.push(persona);
  }
}
