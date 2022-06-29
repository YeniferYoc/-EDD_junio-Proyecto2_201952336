var contador = 1
class Nodo{
    
    constructor(ob_actor){
        this.ob_actor= ob_actor;
        this.izquierda = null;
        this.derecha = null;
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
            codigo="nodo"+this.id+" [ label =\""+this.ob_actor.nombre+"\"];\n";
        }else{
            codigo="nodo"+this.id+" [ label =\""+this.ob_actor.nombre+"\"];\n";
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


class Arbol_binario{
    constructor(){
        this.raiz = null;
    }
    insertar(objeto_actor){
        this.raiz = this.add(objeto_actor, this.raiz);
    }
    add(objeto_actor, nodo){
        if(nodo == null){
            return new Nodo(objeto_actor);
        }else{
            if(objeto_actor.dni > nodo.ob_actor.dni){
                nodo.derecha = this.add(objeto_actor, nodo.derecha);
            }else{
                nodo.izquierda = this.add(objeto_actor, nodo.izquierda);
            }
        }
        return nodo;
    }
    
    //preorden
    preorden(){
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){
            console.log("Actor", nodo.ob_actor.nombre);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("Actor:",nodo.ob_actor.dni);
            this.in_orden(nodo.derecha);
        }
    }
    buscar(){
        this.buscar_(this.raiz);
    }
    
    buscar_(nodo){
        if(nodo!=null){
            this.buscar_(nodo.izquierda);
            if(nodo.ob_autor.nombre == "yeni"){
                console.log("enoncte")
                return nodo
            }
            console.log("Cliente:",nodo.ob_autor.nombre);
            this.buscar_(nodo.derecha);
        }
    }

    //postorden
    posorden(){
        this.pos_orden(this.raiz);
    }
    
    pos_orden(nodo){
        if(nodo!=null){
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Actor:",nodo.ob_actor.nombre);           
        }
    }
    graficar_arbol(){
        let codigo =this.raiz.graficar();
        console.log(codigo)
        return codigo;

    }

}
export {Arbol_binario}
/*
let autor1 = new Autor(123,'yeni', 'hola', 'como','estas', 'tu');
let autor2 = new Autor(123,'Briana', 'hola', 'como','estas', 'tu');
let autor3 = new Autor(123,'Ana', 'hola', 'como','estas', 'tu');
let autor4 = new Autor(123,'yenifer', 'hola', 'como','estas', 'tu');
let autor5 = new Autor(123,'Aaisha', 'hola', 'como','estas', 'tu');
let autor6 = new Autor(123,'Jonh', 'hola', 'como','estas', 'tu');
let autor7 = new Autor(123,'Luis', 'hola', 'como','estas', 'tu');

let arbol = new Arbol();
arbol.insertar(autor1);
arbol.insertar(autor2);
arbol.insertar(autor3);
arbol.insertar(autor4);
arbol.insertar(autor5);
arbol.insertar(autor6);

console.log("in orden");
arbol.inorden();
arbol.buscar()*/
/*var abb = new ABB();
abb.insertar(10);
abb.insertar(32);
abb.insertar(20);
abb.insertar(77);
abb.insertar(8);
abb.insertar(6);
abb.insertar(25);
abb.insertar(4);
abb.insertar(13);
abb.insertar(1);
abb.insertar(6);
abb.insertar(25);
abb.insertar(4);
console.log("Recorrido in orden")
abb.inorden();
console.log("Recorrido pre orden")
abb.preorden();
console.log("Recorrido post orden")
abb.posorden();*/
