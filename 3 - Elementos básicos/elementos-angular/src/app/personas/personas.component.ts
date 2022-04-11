import { Component } from "@angular/core";

@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrls: ["./personas.component.css"]
})
export class PersonasComponent {
    deshabilitar = false;
    //Debido a la inferencia de tipos no es necesario aclarar que es de tipo string
    mensaje = "No se ha agregado ninguna persona";
    titulo = "Ingeniero";
    profesion = "Programador";

    agregarPersona() {
        this.deshabilitar = true;
        this.mensaje = "Persona agregada";
    }

    modificarTitulo(event: Event) {
        //target hace referencia al elemento HTML que se ejecuta en el momento, en este caso, el input.
        this.titulo = (<HTMLInputElement>event.target).value;
        //con el <HTMLInputElement> cambiamos el tipo a el de un elemento HTML con el fin de usar su value
    }
}