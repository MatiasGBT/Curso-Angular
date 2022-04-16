import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo: string = 'Listado de Personas';
  personas: Persona[] = [];
  
  constructor(private personasService: PersonasService) {}

  //El método ngOnInit permite inicializar propiedades una vez recibidas las propiedades de entrada
  //(el servicio de PersonasService el cual contiene el array de objetos Persona)
  ngOnInit(): void {
      this.personas = this.personasService.personas;
  }

  /* Debido a que ahora usamos el servicio directamente en el componente formulario, este método ya no hace falta
  personaAgregada(persona: Persona) {
    //Ahora manejamos este método desde un servicio
    this.personasService.agregarPersona(persona);
    //En lugar de manejar este servicio en este componente, lo usaremos de manera general
    //para todo el programa, para esto tenemos que ponerlo en app.module.ts
  }
  */
}
