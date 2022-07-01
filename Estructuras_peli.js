import { Pelicula } from "./Pelicula.js";
var contador = 1
class Nodo{
    constructor(objeto_pelicula){
        this.objeto_pelicula = objeto_pelicula;
        this.izquierda = null;
        this.derecha = null;
        this.altura = 0;
        this.id = contador++;
    }
    graficar(){
        let codigo_dt=   "digraph yeni{\n" 
        codigo_dt += "rankdir=TB;\n" 
        codigo_dt += "node [style=filled, fillcolor=pink];\n"
        codigo_dt += this.getCodigoInterno()
        codigo_dt +=  "}\n";
                   return codigo_dt;
       }
       getCodigoInterno(){
           let  codigo;
           if(this.izquierda==null && this.derecha==null){
               codigo="nodo"+this.id+" [ label =\""+this.objeto_pelicula.nom_pelicula+"\"];\n";
           }else{
               codigo="nodo"+this.id+" [ label =\""+this.objeto_pelicula.nom_pelicula+"\"];\n";
           }
           if(this.izquierda!=null){
               codigo=codigo + this.izquierda.getCodigoInterno() +
                  "nodo"+this.id+"->nodo"+this.izquierda.id+"\n";
           }
           if(this.derecha!=null){
               codigo=codigo + this.derecha.getCodigoInterno() +
                  "nodo"+this.id+"->nodo"+this.derecha.id+"\n";                    
           }
           return codigo;
         
       }
}

class Arbol_AVL{
    constructor(){
        this.raiz = null;
    }
    MAXIMO(valor1,valor2){
        if(valor1>valor2) return valor1;
        return valor2;
    }
    altura(nodo){
        if(nodo == null) return -1;
        return nodo.altura;
    }
    insertar(ob_peli){
        console.log("quiere intertas "+ob_peli.id)
        this.raiz = this.add(ob_peli,this.raiz)
        console.log("inserto")
        console.log(ob_peli.id)

    }
    //insertar recursivo
    add(ob_peli, nodo){

        if(nodo == null) return new Nodo(ob_peli);

        else{
            if(ob_peli.id < nodo.objeto_pelicula.id){
                nodo.izquierda = this.add(ob_peli, nodo.izquierda)
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda) == -2){
                    //programar los casos 
                    //rsi
                    if(ob_peli.id < nodo.izquierda.objeto_pelicula.id){
                        nodo = this.rotacionizquierda(nodo);
                    }//rdi}
                    else{
                        nodo = this.Rotaciondobleizquierda(nodo);
                    }
                    
                }
            }else if(ob_peli.id > nodo.objeto_pelicula.id){
               
                nodo.derecha = this.add(ob_peli, nodo.derecha);
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda)== 2){
                    //otros dos casos
                    //rotacion simple derecha
                    if(ob_peli.id > nodo.derecha.objeto_pelicula.id){
                        nodo = this.rotacionderecha(nodo);
                    }else{
                        nodo = this.Rotaciondoblederecha(nodo);
                    }
                    //rotacion doble derecha
                }
            }else{
                //nodo.objeto_pelicula = ob_peli;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierda),this.altura(nodo.derecha))+1
        return nodo;
    }


    //rotacion simple izquierda
    rotacionizquierda(nodo){
        if(nodo == null){
            console.log("dd")
        }
        console.log(nodo.objeto_pelicula.id)
        var aux = nodo.izquierda;
        nodo.izquierda = aux.derecha;
        aux.derecha = nodo;
        //calculo de nueva altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.izquierda), nodo.altura)+1;
        return aux;
    }
    //rotacion simple derecha
    rotacionderecha(nodo){
        var aux = nodo.derecha;
        nodo.derecha = aux.izquierda;
        aux.izquierda = nodo;
        //calcular de nuevo altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.derecha),nodo.altura)+1;
        return aux;
    }
    //rotacion dobles derecha
    Rotaciondoblederecha(nodo){
        nodo.derecha = this.rotacionizquierda(nodo.derecha);
        return this.rotacionderecha(nodo);
    }

    //rotaciones dobles
    Rotaciondobleizquierda(nodo){
        nodo.izquierda = this.rotacionderecha(nodo.izquierda);
        return this.rotacionizquierda(nodo);
    }

    //recorridos
    preorden(){
        this.pre_orden(this.raiz);
        console.log("jhdjhdj")
        console.log(this.raiz.objeto_pelicula.id)
    }
    pre_orden(nodo){
        if(nodo!=null){
            console.log("pelicula=" +nodo.objeto_pelicula.id);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }

    //postorden
    postorden(){
        this.post_orden(this.raiz);
    }
    post_orden(nodo){
        if(nodo!=null){
            this.post_orden(nodo.izquierda);
            this.post_orden(nodo.derecha);
            console.log("pelicula=" +nodo.objeto_pelicula.id);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("Pelicula = " +nodo.objeto_pelicula.id);
            this.in_orden(nodo.derecha);    
        }
    }
    graficar_avl(){
        let codigo =this.raiz.graficar();
        console.log(codigo)
        return codigo;

    }
}
export{Arbol_AVL}
/*
let peli1 = new Pelicula(5,"hola",'','','','');
let peli2 = new Pelicula(0,"hola",'','','','');
let peli3 = new Pelicula(15,"hola",'','','','');
let peli4 = new Pelicula(66,"hola",'','','','');
let peli5 = new Pelicula(1,"hola",'','','','');
let peli6 = new Pelicula(22,"hola",'','','','');
let arbol = new Arbol_AVL();
arbol.insertar(peli1);
arbol.insertar(peli2);
arbol.insertar(peli3);
arbol.insertar(peli4);
arbol.insertar(peli5);
arbol.insertar(peli6);
console.log("Recorrido preorden")
arbol.preorden()
console.log("Recorrido inorden")
arbol.inorden()
console.log("Recorrido postorden")
arbol.postorden()*/
