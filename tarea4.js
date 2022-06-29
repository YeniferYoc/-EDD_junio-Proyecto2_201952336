var contador = 1
class Nodo{
    constructor(_valor){
        this.valor=_valor;
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
               codigo="nodo"+this.id+" [ label =\""+this.valor+"\"];\n";
           }else{
               codigo="nodo"+this.id+" [ label =\""+this.valor+"\"];\n";
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

class AVL{
    constructor(){
        this.raiz = null;
    }
    //maximo
    MAXIMO(valor1,valor2){
        if(valor1>valor2) return valor1;
        return valor2;
    }
    //altura del arbol
    altura(nodo){
        if(nodo == null) return -1;
        return nodo.altura;
    }
    //insertar
    insertar(valor){
        this.raiz = this.add(valor,this.raiz)

    }
    //insertar recursivo
    add(valor, nodo){
        if(nodo == null) return new Nodo(valor);
        else{
            if(valor < nodo.valor){
                nodo.izquierda = this.add(valor, nodo.izquierda)
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda) == -2){
                    //programar los casos 
                    //rsi
                    if(valor < nodo.izquierda.valor){
                        nodo = this.rotacionizquierda(nodo);
                    }//rdi}
                    else{
                        nodo = this.Rotaciondobleizquierda(nodo);
                    }
                    
                }
            }else if(valor > nodo.valor){
                nodo.derecha = this.add(valor, nodo.derecha);
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda)== 2){
                    //otros dos casos
                    //rotacion simple derecha
                    if(valor > nodo.derecha.valor){
                        nodo = this.rotacionderecha(nodo);
                    }else{
                        nodo = this.Rotaciondoblederecha(nodo);
                    }
                    //rotacion doble derecha
                }
            }else{
                nodo.valor = valor;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierda),this.altura(nodo.derecha))+1
        return nodo;
    }


    //rotacion simple izquierda
    rotacionizquierda(nodo){
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
    }
    pre_orden(nodo){
        if(nodo!=null){
            console.log("valor=" +nodo.valor);
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
            console.log("valor=" +nodo.valor);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("valor=" +nodo.valor);
            this.in_orden(nodo.derecha);    
        }
    }
    graficar_avl(){
        let codigo =this.raiz.graficar();
        console.log(codigo)
        return codigo;

    }
}
console.log("Recorrido preorden")
var arbolavl = new AVL();
arbolavl.insertar(11);
arbolavl.insertar(23);
arbolavl.insertar(35);
arbolavl.insertar(46);
arbolavl.insertar(54);
arbolavl.insertar(26);
arbolavl.insertar(83);
arbolavl.insertar(20);
arbolavl.insertar(100);
arbolavl.insertar(54);
arbolavl.insertar(2);
arbolavl.insertar(1);
arbolavl.insertar(6);
arbolavl.insertar(8);
console.log("Recorrido preorden")
arbolavl.preorden()
console.log("Recorrido inorden")
arbolavl.inorden()
console.log("Recorrido postorden")
arbolavl.postorden()
console.log("GRAFICANDO PELICULAS")
                    
                    var codigo_dot = arbolavl.graficar_avl()
                    console.log(codigo_dot)
                    
                    d3.select("#log").graphviz()
                                .width(1800)
                                .height(500)
                                .renderDot(codigo_dot)
            
                         