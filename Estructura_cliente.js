class Nodo{
    constructor(objeto_cliente){
        this.objeto_cliente = objeto_cliente;
        this.siguiente = null;
    }
}

class Lista_clientes{
    constructor(){
        this.head = null;
    }

   
    agregar_cliente(ob_cli){
        var nuevoNodo = new Nodo(ob_cli);
        nuevoNodo.siguiente = this.head;
        this.head = nuevoNodo;
    }
    
    ImprimirLista(){
        var temporal = this.head;
        let contador = 0;
        while(temporal!=null){
            contador++;
            console.log("NODO: "+contador);
            temporal.objeto_cliente.mostrar_cliente();
            temporal = temporal.siguiente;
        }
        console.log("---------------------------------------------------------------------------");
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
export {Lista_clientes};


