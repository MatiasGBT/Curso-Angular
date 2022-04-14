import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  template: '<p>Resultado: {{resultado}}</p>'
})
export class ResultadoComponent {

  @Input() resultado: number;

}
