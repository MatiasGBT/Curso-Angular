import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  operandoA: number = 0;
  operandoB: number = 0;
  @Output() resultadoObtenido = new EventEmitter<number>();

  sumar(): void {
    this.resultadoObtenido.emit(this.operandoA + this.operandoB);
  }

}
