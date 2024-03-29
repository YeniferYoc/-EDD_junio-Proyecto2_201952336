class Nodo{
    constructor(objeto_categoria){
        this.objeto_categoria = objeto_categoria;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Lista_categoria{
    constructor(){
        this.head = null;
        this.end = null;
    }

   
    agregar_categoria(ob_cate){
        var nuevoNodo = new Nodo(ob_cate);
        

        ///insertamos si la lista esta vacia
        if (this.head == null){
            this.head = nuevoNodo
            this.end = nuevoNodo

        }

        //si por lo menos hay un nodo, insertamos al final
        else{
            this.end.siguiente = nuevoNodo;
            nuevoNodo.anterior =  this.end;
            this.end = nuevoNodo;
        }
    }
    
    ImprimirLista(){
        var temporal = this.head;
        let contador = 0;
        while(temporal!=null){
            //contador++;
            //console.log("NODO: "+contador);
            temporal.objeto_categoria.mostrar_categoria();
            temporal = temporal.siguiente;
        }
        console.log("*********************");
    }
    Ordenar_cant() {//ASCENDENTE-----------------------------------
        let tempo = this.head;
        //tempo = tempo.siguiente;
        let contador_us = 1;
        let aux;
        while(tempo != null){
            console.log("entrp_primer wjile")
            let tempo2 = this.head;
            let contador_us2 = 0;
            while(tempo2 != null && tempo2.siguiente != null){
                console.log(tempo2.objeto_libro_cli.nom_libro)
                console.log(tempo2.siguiente.objeto_libro_cli.nom_libro)
                console.log("entro segundo while")
                if((tempo2.siguiente.objeto_libro_cli.nom_libro) < (tempo2.objeto_libro_cli.nom_libro) ){
                    console.log("mas grande")
                    aux = tempo2.objeto_libro_cli;
                    tempo2.objeto_libro_cli = tempo2.siguiente.objeto_libro_cli;
                    tempo2.siguiente.objeto_libro_cli = aux;
                    this.ImprimirLista()
                }
                tempo2 = tempo2.siguiente;
                contador_us2 += 1;
            }
            tempo = tempo.siguiente
            contador_us +=1;
        }
        console.log("fin")
      }
      Ordenar_cant_des() {
        let tempo = this.head;
        let contador_us = 1;
        let aux;
        while(tempo != null){
            console.log("entrp_primer wjile")
            let tempo2 = this.head;
            let contador_us2 = 0;
            while(tempo2 != null && tempo2.siguiente != null){
                console.log(tempo2.objeto_libro_cli.nom_libro)
                console.log(tempo2.siguiente.objeto_libro_cli.nom_libro)
                console.log("entro segundo while")
                if((tempo2.siguiente.objeto_libro_cli.nom_libro) > (tempo2.objeto_libro_cli.nom_libro) ){
                    console.log("mas grande")
                    aux = tempo2.objeto_libro_cli;
                    tempo2.objeto_libro_cli = tempo2.siguiente.objeto_libro_cli;
                    tempo2.siguiente.objeto_libro_cli = aux;
                    this.ImprimirLista()
                }
                tempo2 = tempo2.siguiente;
                contador_us2 += 1;
            }
            tempo = tempo.siguiente
            contador_us +=1;
        }
        console.log("fin")
        
      }

}
export {Lista_categoria};


