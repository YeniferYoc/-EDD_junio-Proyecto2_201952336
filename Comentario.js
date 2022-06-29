class Comentario{
    constructor(comentario, autor){
        this.comentario = comentario;
        this.autor = autor;
    }
    mostrar_comentario(){
        console.log('Autor: '+this.autor+' comentario: '+this.comentario);
    }

}
export {Comentario};
