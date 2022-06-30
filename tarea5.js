import { Categoria } from "./Categoria.js";
import { Tabla_Hash } from "./Estructura_tabla.js";
import { Lista_categoria } from "./Lista_categorias.js";
import { Valor_hash } from "./Valor_hash.js";

let tabla_hash = new Tabla_Hash();
for(let i = 0; i<13;i++){
    console.log(i)
    let lista_cate = new Lista_categoria();
    let nuevo_valor_hash = new Valor_hash(i, lista_cate);
    tabla_hash.agregar_valor(nuevo_valor_hash);

}
        var valores = [  5,10,15,20,25,30,35,40,45,50 ]

        for(let i =0; i< valores.length;i++){
            let id = valores[i]
            let nueva_categoria = new Categoria(id, id);
            let valor = id % 13
            console.log(valor,"vlla")
            let tempo = tabla_hash.head
            while(tempo !=null){
                if(tempo.objeto_valor.id == valor){
                    tempo.objeto_valor.categorias.agregar_categoria(nueva_categoria);
                }
                tempo = tempo.siguiente;
            }
        }
        tabla_hash.ImprimirLista();
        //graficar_lista_us();
   
        graficar_tabla_hash();
function graficar_tabla_hash() {
            //RECORRIDO INICIO A FIN 
            console.log("entrosss")
        var codigo_dot = "digraph L{\n node[shape = box fillcolor = \"white\" style  = filled]\n subgraph cluster_p{\n ";
        //codigo_dot += "\n label= \"LISTA USUARIOS \"";
        codigo_dot += "\n bgcolor = \"#e43c5c\"";
        codigo_dot += "\n edge [dir = \"both\"]";

        var celda="celda";
        //SE DECLARAN LAS CELDAS
        var mensaje ='';
        var color_celda = "pink";
        var nodoTemporal = tabla_hash.head;
        let longitu_ = 0
        let i = 0;
        while(nodoTemporal != null){
            mensaje =(celda+i);
            
            codigo_dot += mensaje+"[label= \""+"ID: "+(nodoTemporal.objeto_valor.id)+"\", fillcolor =white, group = 1 ];\n";
            let nodo_ca_temp = nodoTemporal.objeto_valor.categorias.head;
            let cont_l = 0
            let mensaje_cat = ""
            while(nodo_ca_temp!=null){
                mensaje_cat =(celda+i+cont_l+cont_l+cont_l);
                codigo_dot += mensaje_cat+"[label= \""+"VALOR: "+(nodo_ca_temp.objeto_categoria.company)+"\", fillcolor =white, group ="+(i+1)+" ];\n";
                //codigo_dot += mensaje+"->"+mensaje_lib+";\n";

                nodo_ca_temp = nodo_ca_temp.siguiente;
                cont_l +=1;
            }
            longitu_ ++;
            i++;
            nodoTemporal = nodoTemporal.siguiente;

        }
        //SE UNEN           
        var mensaje_ = '';
        for (let j = 0; j<longitu_-1; j++){
            mensaje_ =(celda+j)
            let sig_fila = (celda+(j+1))
            codigo_dot += mensaje_+"->"+sig_fila+";\n";
            

        }
        let rank_ = ""
        var nodoTemporald = tabla_hash.head;
        for (let j = 0; j<longitu_; j++ ){
            mensaje_ =(celda+j);
            
            let nodo_ca_tempd = nodoTemporald.objeto_valor.categorias.head;
            let cont_ld = 0
            let mensaje_libd = ""
            rank_ += "{rank = same;";
            if(nodo_ca_tempd!=null){
                mensaje_libd =(celda+j+cont_ld+cont_ld+cont_ld);
                codigo_dot += mensaje_+"->"+mensaje_libd+";\n";
                //nodoTemporald = nodoTemporald.siguiente;
                
                rank_ += mensaje_+";"+mensaje_libd+";";
                cont_ld +=1;

            }
            let anterior = mensaje_libd;
            while(nodo_ca_tempd!=null && nodo_ca_tempd.siguiente != null){
                mensaje_libd =(celda+j+cont_ld+cont_ld+cont_ld);
                codigo_dot += anterior+"->"+mensaje_libd+";\n";
                rank_ += mensaje_libd+";";
                nodo_ca_tempd = nodo_ca_tempd.siguiente;
                cont_ld +=1;
                anterior = mensaje_libd;
            }
            rank_ += "}\n"
            nodoTemporald = nodoTemporald.siguiente;

        }

        //SE LES PONE EL RANK 
        codigo_dot += rank_;
        /*codigo_dot += "{rank = same;";
        for(let k = 0; k<longitu_; k++){
            mensaje_ =(celda+k)
            codigo_dot += mensaje_+";";
            

        } 
        codigo_dot += "}";*/

        codigo_dot += "}}"
        console.log(codigo_dot)
        
        d3.select("#log").graphviz()
                    .width(1800)
                    .height(18000)
                    .renderDot(codigo_dot)

             }