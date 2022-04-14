//Un servicio es una clase que comparte sus métodos para que puedan ser usados por cualquier componente
//Los servicios se encargan de acceder a los datos para entregarselos a los componentes
export class LoggingService {
    enviarMensajeAConsola(mensaje:string) {
        console.log(mensaje);
    }
    //Ahora utilizaremos este servicio en el componente formulario
}