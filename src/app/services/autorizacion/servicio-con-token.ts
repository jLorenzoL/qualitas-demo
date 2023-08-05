export class ServicioSinToken {
    public static get listadoServicioExpuestos(): any[] {
        let listado=[
            ".*?\u002Fonce.*",
            ".*?\u002Fauth\u002F.*"
        ]
        return listado;
      };

    public static get listadoServiciosNoNecesitanNingunToken(): any[] {
        let listado = [
            "\u002Fonce",
            "\u002Fauth\u002Flogout",
            "\u002Fauth\u002FrefreshToken",
        ]
        return listado;
    }  
}
