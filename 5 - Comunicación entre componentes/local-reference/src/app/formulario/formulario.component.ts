import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  //Para pasar los valores sin tener que pasarlos como argumentos del métodos usamos el
  //decorador ViewChild. En el paréntesis ponemos el nombre del local reference del input (#)
  @ViewChild("nombreRef") nombre: ElementRef;
  @ViewChild("apellidoRef") apellido: ElementRef;

  //Local Reference (sin View Child):
  //Como hacemos referencia al input hay que utilizar el tipo HTMLInputElement
  /*agregarPersona(nombreRef:HTMLInputElement, apellidoRef:HTMLInputElement):void {
    let persona = new Persona(nombreRef.value, apellidoRef.value);
    this.personaCreada.emit(persona);
  }*/

  //ViewChild:
  agregarPersona():void {
    //Con nativeElement.value obtenemos el valor
    let persona = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.personaCreada.emit(persona);
    this.nombre.nativeElement.value = "";
    this.apellido.nativeElement.value = "";
  }
}
