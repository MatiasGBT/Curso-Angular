import { Component } from "@angular/core";

//Lo primero que hay que hacer es definir la clase
//export es para que se pueda usar la clase en otros archivos
//El decorador @Component necesita importarse desde el paquete core
@Component({
    selector: "app-personas",
    //Un componente el línea es aquel que no requiere de un HTML (o CSS) separado,
    //para esto tenemos que cambiar la propiedad de templateUrl a template
    //y con backtips definir el código (se aconseja para código pequeño)
    /*template: `<h1>Listado de personas</h1>
                <app-persona></app-persona>
                <app-persona></app-persona>`,*/
    templateUrl: "./personas.component.html",
    //Se pueden agregar varias hojas de estilo a un componente, por eso es un array
    //styleUrls: ["./personas.component.css"]
    //Estilos en línea (in line)
    styles: [`
    h1 {
        color: blue;
    }
    `]
})
export class PersonasComponent {

}
//Ahora hay que declarar este componente en el archivo app.module.ts

//Para crear con la consola CLI un componente en línea basta con poner el siguiente comando:
//ng g c nombre-componente -s -t
//-s para que la hoja de estilos sea en línea y -t para que el HTML sea en línea