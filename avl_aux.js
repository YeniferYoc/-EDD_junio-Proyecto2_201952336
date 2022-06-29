class Nodo{
    constructor(_valor){
        this.valor=_valor;
        this.izquierda = null;
        this.derecha = null;
        this.altura = 0;
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
}
console.log("Recorrido preorden")
var arbolavl = new AVL();
arbolavl.insertar(7140394722109);
arbolavl.insertar(5710530186284);
arbolavl.insertar(2561983506422);
arbolavl.insertar(7851050325132);
arbolavl.insertar(6568804293458);
arbolavl.insertar(2984229606920);
arbolavl.insertar(9716381936092);
arbolavl.insertar(1219344961531);
arbolavl.insertar(8154736748444);
arbolavl.insertar(4560930105887);
arbolavl.insertar(3601995024933);
arbolavl.insertar(8175940098554);
arbolavl.insertar(3679640345001);
arbolavl.insertar(3542469120193);
arbolavl.insertar(9038170328286);
arbolavl.insertar(4862364527422);
arbolavl.insertar(1175928735759);
arbolavl.insertar(6124436571933);
arbolavl.insertar(4306113783482);
console.log("Recorrido preorden")
arbolavl.preorden()
console.log("Recorrido inorden")
arbolavl.inorden()
console.log("Recorrido postorden")
arbolavl.postorden()