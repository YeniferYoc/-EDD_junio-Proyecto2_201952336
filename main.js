import{Lista_clientes} from "./Estructura_cliente.js";
import{Cliente} from "./Cliente.js";
import { Arbol_binario } from "./Estructuras_actor.js";
import { Arbol_AVL } from "./Estructuras_peli.js";
import { Pelicula } from "./Pelicula.js";
import { Lista_comentarios } from "./Estructura_comentario_pelis.js";
import { Actor } from "./Actor.js";
import { Categoria } from "./Categoria.js";
import { Tabla_Hash } from "./Estructura_tabla.js";
import { Lista_categoria } from "./Lista_categorias.js";
import { Valor_hash } from "./Valor_hash.js";



let user_archive;
let cate_archive;
let usuario_ingresado;
let contra_ingre;
let peli_archive;
let actor_archive;

let lista_us = new Lista_clientes();
let arbol_pelis = new Arbol_AVL();
let arbol_actores = new Arbol_binario();
let tabla_hash = new Tabla_Hash();
for(let i = 0; i<20;i++){
    console.log(i)
    let lista_cate = new Lista_categoria();
    let nuevo_valor_hash = new Valor_hash(i, lista_cate);
    tabla_hash.agregar_valor(nuevo_valor_hash);

}
tabla_hash.ImprimirLista()



document.getElementById("login").onclick = login;
document.getElementById("user").onclick = proceso_carga_user;
document.getElementById("libro").onclick = proceso_carga_peli;
document.getElementById("actor").onclick = proceso_carga_actor;
document.getElementById("categoria").onclick = proceso_carga_cate;
document.getElementById("gra_cli").onclick = graficar_usuarios;
document.getElementById("gra_cate").onclick = graficar_tabla_hash;
document.getElementById("gra_peli").onclick = graficar_peliculas;
document.getElementById("gra_actores").onclick = graficar_actores;



    //CARGAS MASIVAS ------------------------------------------------------------------------------------
    // -------------- USUARIOS-----------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("user_input_archive");
        fileInput.addEventListener('change', function (event) {
            user_archive = event.target.files[0];
        })
    });

    function proceso_carga_user(){
        alert("entro")
        let reader = new FileReader();
        reader.readAsText(user_archive);
        reader.addEventListener('load',sent_user_to_server,false);
    }

    function sent_user_to_server(e){
        var texto = e.target.result; 
        var Usuarios = JSON.parse(texto);

        console.log(texto)
        for(let i =0; i< Usuarios.length;i++){
            let dpi = Usuarios[i].dpi;
            let nombre_completo = Usuarios[i].nombre_completo;
            let nombre_usuario = Usuarios[i].nombre_usuario;
            let correo = Usuarios[i].correo;
            let contrasea = Usuarios[i].contrasenia;
            let telefono = Usuarios[i].telefono;
            
            let nuevo_usuario = new Cliente(dpi,nombre_completo,nombre_usuario,correo,contrasea,telefono);
            lista_us.agregar_cliente(nuevo_usuario);

        }
        lista_us.ImprimirLista();
        //graficar_lista_us();
        
       
        alert("Succefull");
    }
    // -------------- PELICULAS -----------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("archivo_peli");
        fileInput.addEventListener('change', function (event) {
            peli_archive = event.target.files[0];
        })
    });

    function proceso_carga_peli(){
        alert("entro")
        let reader = new FileReader();
        reader.readAsText(peli_archive);
        reader.addEventListener('load',sent_peli_to_server,false);
    }

    function sent_peli_to_server(e){
        var texto = e.target.result;
        var Peliculas = JSON.parse(texto);
        console.log(texto)
        for(let i =0; i< Peliculas.length;i++){
            let id_pelicula = Peliculas[i].id_pelicula;
            let nombre_pelicula = Peliculas[i].nombre_pelicula;
            let descripcion = Peliculas[i].descripcion;
            let puntuacion_star = Peliculas[i].puntuacion_star;
            let precio_Q = Peliculas[i].precio_Q;
            let lista_comen = new Lista_comentarios();
            
            let nueva_pelicula = new Pelicula(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio_Q,lista_comen);
            arbol_pelis.insertar(nueva_pelicula);
        }
        arbol_pelis.inorden();
        
        
        //vista_biblioteca();
        //vista_biblioteca_dispersa();
        //document.getElementById("biblioteca_vista").style.display = ""; 
        
       
        alert("Succefull");
    }

    // --------------- ACTORES ------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("actor_input_archive");
        fileInput.addEventListener('change', function (event) {
            actor_archive = event.target.files[0];
        })
    });

    function proceso_carga_actor(){
        let reader = new FileReader();
        reader.readAsText(actor_archive);
        reader.addEventListener('load',sent_actor_to_server,false);
    }

    function sent_actor_to_server(e){
        var texto = e.target.result;
        var Actores = JSON.parse(texto);
        console.log(texto)
        for(let i =0; i< Actores.length;i++){
            let dni = Actores[i].dni;
            let nombre_completo = Actores[i].nombre_actor;
            let correo = Actores[i].correo;
            let descripcion = Actores[i].descripcion;

            let nuevo_actor = new Actor(dni,nombre_completo,correo,descripcion);
            arbol_actores.insertar(nuevo_actor)

        }
        arbol_actores.inorden();
       /* llenar_lista();
        lista_autores.ImprimirLista()
        vista_autores(lista_autores)
        //arbol_binario.graficar_arbol()
        graficar_arbol()*/
        alert("Succefull");
    }
    //-------------------- TABLA HASJ DE CATEGORIAS------------------
    // ------------------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("archivo_cate");
        fileInput.addEventListener('change', function (event) {
            cate_archive = event.target.files[0];
        })
    });

    function proceso_carga_cate(){
        alert("entro")
        let reader = new FileReader();
        reader.readAsText(cate_archive);
        reader.addEventListener('load',sent_cate_to_server,false);
    }

    function sent_cate_to_server(e){
        var texto = e.target.result; 
        var Categorias = JSON.parse(texto);

        console.log(texto)
        for(let i =0; i< Categorias.length;i++){
            let id = Categorias[i].id_categoria;
            let company = Categorias[i].company;
            let nueva_categoria = new Categoria(id, company);
            let valor = id % 20
            console.log(valor)
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
        alert("Succefull");
    }
    //-----------------------FIN CARGAS MASIVAS ------------------------------
    async function Cerrar_sesion() {
        

                document.getElementById("admin").style.display = "none"; 
                document.getElementById("cola").style.display = "none"; 
                document.getElementById("list_usua").style.display = "none"; 
                document.getElementById("biblioteca").style.display = "none"; 
                document.getElementById("autores").style.display = "none";
                document.getElementById("usuario").style.display = "none"; 
                document.getElementById("comprar").style.display = "none"; 
                document.getElementById("dis_pila").style.display = "none";
                document.getElementById("buscar_autor").style.display = "none";
                alert("ADIOS") 
              
         }

    async function login() {
        alert("login")
        let nom_usu = (document.getElementById("user_caja").value)
        let contra_usu = document.getElementById("contra").value
        usuario_ingresado = nom_usu;
        contra_ingre = contra_usu;
        let tempo = lista_us.head;
        let cre_correcta = false;

        if(document.getElementById("admin_check").checked){
            if (nom_usu =="EDD" && contra_usu == "123"){
                alert("BIENVENIDO ADMINSTRADOR")
                    cre_correcta=true;
                    document.getElementById("admin").style.display = ""; 
                    
                }else{
                    alert("NO ERES ADMINISTRADOR, POR FAVOR INTENTALO DE NUEVO")
                    document.getElementById("admin").style.display = "none"; 
            }
        }else{
            while(tempo !=null){
                if(tempo.objeto_cliente.usuario == nom_usu && tempo.objeto_cliente.contra == contra_usu){
                    cre_correcta = true;
                    alert("BIENVENIDO USUARIO")
                    document.getElementById("usuario").style.display = "";
                }
                tempo = tempo.siguiente
            }
        } 
        if(cre_correcta==false){
            alert("CREDENCIALES INCORRECTAS, POR FAVOR VUELVE A INTENTARLO")
        }



        document.getElementById("user_caja").value = "";
        document.getElementById("contra").value = "";
        }
    function graficar_usuarios() {
            console.log("GRAFICANDO USUARIOS")
            
            var codigo_dot = "digraph L{\n node[shape = box fillcolor = \"white\" style  = filled]\n subgraph cluster_p{\n ";
            //codigo_dot += "\n label= \"LISTA USUARIOS \"";
            codigo_dot += "\n bgcolor = \"gray\";";
    
            var celda="celda";
            //SE DECLARAN LAS CELDAS
            var mensaje ='';
            var nodoTemporal = lista_us.head;
            if(nodoTemporal !=null){
            var i = 0;
            while (nodoTemporal != null ){
                mensaje =(celda+i);
                
                codigo_dot += mensaje+"[label= \""+i+". Cliente: "+(nodoTemporal.objeto_cliente.usuario)+"\n DPI: "+(nodoTemporal.objeto_cliente.dpi)+"\", fillcolor =white, group = 2 ];\n";
                i++;
                nodoTemporal = nodoTemporal.siguiente;
    
            }
            //SE UNEN           
            var mensaje_ = '';
            for (let j = 0; j<i-1; j++){
                mensaje_ =(celda+j)
                let sig_ = (celda+(j+1))
                codigo_dot += mensaje_+"->"+sig_+";\n";
            }
            
            //SE LES PONE EL RANK 
            
            codigo_dot += "{rank = same;";
            for(let k = 0; k<i; k++){
                mensaje_ =(celda+k)
                codigo_dot += mensaje_+";";
                
    
            } 
            codigo_dot += "}";
        }
    
            codigo_dot += "}}"
            console.log(codigo_dot)
            
            d3.select("#lienzo_admin").graphviz()
                        .width(18000)
                        .height(500)
                        .renderDot(codigo_dot)
    
                 }
    function graficar_peliculas() {
                    console.log("GRAFICANDO PELICULAS")
                    
                    var codigo_dot = arbol_pelis.graficar_avl()
                    console.log(codigo_dot)
                    
                    d3.select("#lienzo_admin").graphviz()
                                .width(1800)
                                .height(500)
                                .renderDot(codigo_dot)
            
                         }
    function graficar_actores() {
                    console.log("GRAFICANDO Actores")
                    
                    var codigo_dot = arbol_actores.graficar_arbol()
                    console.log(codigo_dot)
                    
                    d3.select("#lienzo_admin").graphviz()
                                .width(1800)
                                .height(500)
                                .renderDot(codigo_dot)
            
                         }
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
                codigo_dot += mensaje_cat+"[label= \""+"Categoria: "+(nodo_ca_temp.objeto_categoria.company)+"\", fillcolor =white, group ="+(i+1)+" ];\n";
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
        
        d3.select("#lienzo_admin").graphviz()
                    .width(1800)
                    .height(500)
                    .renderDot(codigo_dot)

             }
    