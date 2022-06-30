class Nodo{
    constructor(objeto_valor){
        this.objeto_valor = objeto_valor;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Lista_pelis{
    constructor(){
        this.head = null;
        this.end = null;
    }

   
    agregar_valor(ob_val){
        var nuevoNodo = new Nodo(ob_val);
        

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
            
            console.log("NODO: "+contador);
            temporal.objeto_valor.mostrar_pelicula();
            temporal.objeto_valor.comentarios.ImprimirLista();
            temporal = temporal.siguiente;
            contador++;
        }
        
        console.log("---------------------------------");
    }
    Ordenar_cant() {//ASCENDENTE-----------------------------------
        let tempo = this.head;
        //tempo = tempo.siguiente;
        let contador_us = 1;
        let aux;
        while(tempo != null){
            let tempo2 = this.head;
            let contador_us2 = 0;
            while(tempo2 != null && tempo2.siguiente != null){
                if((tempo2.siguiente.objeto_valor.nom_pelicula) < (tempo2.objeto_valor.nom_pelicula) ){
                    
                    aux = tempo2.objeto_valor;
                    tempo2.objeto_valor = tempo2.siguiente.objeto_valor;
                    tempo2.siguiente.objeto_valor = aux;
                    
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
          
            let tempo2 = this.head;
            let contador_us2 = 0;
            while(tempo2 != null && tempo2.siguiente != null){
                if((tempo2.siguiente.objeto_valor.nom_pelicula) > (tempo2.objeto_valor.nom_pelicula) ){
                   
                    aux = tempo2.objeto_valor;
                    tempo2.objeto_valor = tempo2.siguiente.objeto_valor;
                    tempo2.siguiente.objeto_valor = aux;
                  
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
export {Lista_pelis};


