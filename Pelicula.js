class Pelicula{
    constructor(id, nom_pelicula, descripcion, puntuacion, precio, comentarios, disponible, comprador){
        this.id = id;
        this.nom_pelicula = nom_pelicula;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
        this.precio = precio;
        this.comprador = comprador;
        this.comentarios = comentarios;
        this.disponible = disponible
    }
    mostrar_pelicula(){
        console.log('ID: '+this.id+' Nombre de la pelicula: '+this.nom_pelicula+' Descripcion: '+this.descripcion+' Puntuacion:  '+this.puntuacion);
        console.log('Precio: '+this.precio+" disponibilidad: "+this.disponible+" comprador: "+this.comprador);
    }

}
export {Pelicula};
