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
import { Lista_pelis } from "./lista_libros.js";
import { Comentario } from "./Comentario.js";

let user_archive;
let cate_archive;
let usuario_ingresado = 1;
let nombre_us_ing = "";
let contra_ingre;
let peli_archive;
let actor_archive;
let contador_ac = 0;

let lista_us = new Lista_clientes();
let arbol_pelis = new Arbol_AVL();
let arbol_actores = new Arbol_binario();
let tabla_hash = new Tabla_Hash();
let lista_pelis = new Lista_pelis();

//LLENAR LA TABLA HASH
for(let i = 0; i<20;i++){
    console.log(i)
    let lista_cate = new Lista_categoria();
    let nuevo_valor_hash = new Valor_hash(i, lista_cate);
    tabla_hash.agregar_valor(nuevo_valor_hash);

}
tabla_hash.ImprimirLista()
let cadena_info = "";
let cadena_actores = "";


document.getElementById("login").onclick = login;
document.getElementById("user").onclick = proceso_carga_user;
document.getElementById("libro").onclick = proceso_carga_peli;
document.getElementById("actor").onclick = proceso_carga_actor;
document.getElementById("categoria").onclick = proceso_carga_cate;
document.getElementById("gra_cli").onclick = graficar_usuarios;
document.getElementById("gra_cate").onclick = graficar_tabla_hash;
document.getElementById("gra_peli").onclick = graficar_peliculas;
document.getElementById("gra_actores").onclick = graficar_actores;
document.getElementById("ver_pelis").onclick = div_pelis;
document.getElementById("ver_actores").onclick = div_actores;
document.getElementById("ver_cate").onclick = vista_categorias;
document.getElementById("cerrar").onclick = Cerrar_sesion;
document.getElementById("cerrar_").onclick = Cerrar_sesion;



    //CARGAS MASIVAS ------------------------------------------------------------------------------------
    // -------------- USUARIOS-----------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("user_input_archive");
        fileInput.addEventListener('change', function (event) {
            user_archive = event.target.files[0];
        })
    });
    //VISTA USUARIO, COMPRAR, ETC.
    document.getElementById("vista_peliculas")
        .addEventListener("click", function (e) {
            const btn = e.target.id;
            console.log( e.target.id)
            //ORDEN DE PELICULAS ----------------------------------------------
            if(btn == "orden"){
                var d = document.getElementById("orden");
	            var displaytext = d.options[d.selectedIndex].text;
                console.log(displaytext)
                if(displaytext =='Ascendente' ){
                    vista_peliculas(1);

                }else if(displaytext == 'Descendente'){
                    vista_peliculas(2);
                }
            }
            //INFORMACION PELICULA----------------------------------------------------
            else{
            let tempo = lista_pelis.head;
            let bot_info = false;
            let bot_calificar = false;
            let calificacion_peli;
            while(tempo != null){
                let nombre_bot = tempo.objeto_valor.id +"_info";
                console.log("entro")
                if(nombre_bot == btn){
                    bot_info = true;
                    cadena_info ="";
                    cadena_info += "<section id=\"blog\" class=\"blog\">";
                    cadena_info += "<div class=\"container\" data-aos=\"fade-up\">";
                    cadena_info += "<div class=\"row\">";
                    cadena_info += "<div class=\"col-lg-12 entries\">";
                    cadena_info += "<article class=\"entry entry-single\">";
                    cadena_info += "<h2 class=\"entry-title\">";
                    cadena_info += ""+tempo.objeto_valor.nom_pelicula+"";
                    cadena_info += "</h2>";
                    cadena_info += "<div class=\"entry-content\">";
                    cadena_info += "<p>Descripción: "+tempo.objeto_valor.descripcion+"</p>";
                    cadena_info += "<br>";
                    cadena_info += "<br>";
                    cadena_info += "<div class=\"entry-meta\">";
                    cadena_info += "<div class=\" text-center\">";
                    cadena_info += "<div class=\"row\">";
                    cadena_info += "<div class=\"col-md-2 form-group\">";
                    cadena_info += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+tempo.objeto_valor.id+"_calificar\" >PUNTUACION</button>";
                    cadena_info += "</div>";
                    cadena_info += "<div class=\"col-md-3 form-group\">";
                    cadena_info += "<input id = \"punt_caja\" type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">";
                    cadena_info += "</div>";
                    cadena_info += "<div class=\"col-md-3 form-group\">";
                    cadena_info += "<span class = \"fa fa-star\" id=\"1_es\"></span>";
                    cadena_info += "<span class = \"fa fa-star\" id=\"2_es\"></span>";
                    cadena_info += "<span class = \"fa fa-star\" id=\"3_es\"></span>";
                    cadena_info += "<span class = \"fa fa-star\" id=\"4_es\"></span>";
                    cadena_info += "<span class = \"fa fa-star\" id=\"5_es\"></span>";
                    calificacion_peli = tempo.objeto_valor.puntuacion;
                    cadena_info += "</div>";
                    cadena_info += "<div class=\" text-center\">";
                    cadena_info += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+tempo.objeto_valor.id+"_comprar\" >Alquilar</button>";
                    cadena_info += "<h2>Q."+tempo.objeto_valor.precio+"</h2>";
                    cadena_info += "</div>";
                    cadena_info += "</div>";
                    cadena_info += "<div class=\"blog-comments\">";
                    cadena_info += "<h4 class=\"comments-count\">Comentarios</h4>";
                    let tempo_com = tempo.objeto_valor.comentarios.head;
                    let cont_comentarios  = 1;
                    while(tempo_com != null){
                        cadena_info += "<div id=\"comment-"+cont_comentarios+"\" class=\"comment\">";
                        cadena_info += "<div class=\"d-flex\">";
                        cadena_info += "<div class=\"comment-img\"><img src=\"assets/img/blog/usuar.png\" alt=\"\"></div>";
                        cadena_info += "<div>";
                        cadena_info += "<h5>"+tempo_com.objeto_comentario.autor+"</h5>";
                        cadena_info += "<p>"+tempo_com.objeto_comentario.comentario+"</p>";
                        cadena_info += "</div>";
                        cadena_info += "</div>";
                        cadena_info += "</div>";
                        cont_comentarios ++;
                        tempo_com = tempo_com.siguiente;
                    }
                    cadena_info += "<div id= \"nuevo_com\">";
                    cadena_info += "</div>";
                    cadena_info += "<div class=\"reply-form\">";
                    cadena_info += "<h4>Deja tu comentario: </h4>";
                    cadena_info += "<div class=\"row\">";
                    cadena_info += "<div class=\"col form-group\">";
                    cadena_info += "<textarea id=\"comment\" class=\"form-control\" ></textarea>";
                    cadena_info += "</div>";
                    cadena_info += "</div>";
                    cadena_info += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+tempo.objeto_valor.id+"_enviar_com\" >Enviar</button>";
                    cadena_info += "</article>";
                    cadena_info += "</div>";
                    cadena_info += "</div>";
                    cadena_info += "</div>";
                    cadena_info += "</section>";
                    /*cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";
                    cadena_info += "";*/
                }
                tempo = tempo.siguiente;

                
            }
            if(bot_info == false){

            }else{
                console.log("se pinta")
                document.getElementById("vista_peliculas_").innerHTML = cadena_info;

                for(let i = 0; i<5;i++){
                    if(i<calificacion_peli){
                     document.getElementById((i+1)+"_es").style.color = "orange";
                     
                    } 
                 }
            }
            //BOTON CALIFICAR ---------------------------------------------
            tempo = lista_pelis.head;
            while(tempo != null){
                let nombre_bot = tempo.objeto_valor.id +"_calificar";
                if(nombre_bot == btn){
                    for(let i = 0; i<5;i++){
                        
                            document.getElementById((i+1)+"_es").style.color = "gray";
                            
                        
                        }
                    let cali = (document.getElementById("punt_caja").value)
                    tempo.objeto_valor.puntuacion = cali;
                    for(let i = 0; i<5;i++){
                    if(i<cali){
                        document.getElementById((i+1)+"_es").style.color = "orange";
                        
                    } 
                    }
                    document.getElementById("punt_caja").value = "";
                }
                tempo = tempo.siguiente;
            }
            //BOTON ALQUILAR --------------------------------------------
            tempo = lista_pelis.head;
            while(tempo!= null){
                let nombre_bot = tempo.objeto_valor.id +"_comprar";
                console.log("entro")
                if(nombre_bot == btn){
                    tempo.objeto_valor.disponible = false;
                    tempo.objeto_valor.comprador = usuario_ingresado;
                    alert("Gracias por su compra!")
                }
                tempo = tempo.siguiente;
            }
            //BOTON ENVIAR COMENTARIOS
            tempo = lista_pelis.head;
            while(tempo!= null){
                let nombre_bot = tempo.objeto_valor.id +"_enviar_com";
                console.log("entro comentarios")
                if(nombre_bot == btn){
                    let coment_caja = (document.getElementById("comment").value)
                    let nuevo_comentario = new Comentario(coment_caja, nombre_us_ing);
                    tempo.objeto_valor.comentarios.agregar_comentario(nuevo_comentario)
                    
                    let cadena_comentario = "<div id=\"comment-n\" class=\"comment\">";
                        cadena_comentario += "<div class=\"d-flex\">";
                        cadena_comentario += "<div class=\"comment-img\"><img src=\"assets/img/blog/usuar.png\" alt=\"\"></div>";
                        cadena_comentario += "<div>";
                        cadena_comentario += "<h5>Tu: </h5>";
                        cadena_comentario += "<p>"+coment_caja+"</p>";
                        cadena_comentario += "</div>";
                        cadena_comentario += "</div>";
                        cadena_comentario += "</div>";

                    document.getElementById("nuevo_com").innerHTML = cadena_comentario;
                    alert("Gracias por sus comentarios!")
                    document.getElementById("comment").value = ""; 
                }
                tempo = tempo.siguiente;
            }
            }
        });
    document.getElementById("vista_actores")
        .addEventListener("click",function(e){
            const btn = e.target.id;
            console.log( e.target.id)
            if(btn == "inorden"){
                inorden();
            }else if(btn == "preorden"){
                preorden();
            }else if(btn == "posorden"){
                posorden();
            }
            //ORDEN DE Actores ----------------------------------------------
            
        });
       

    function proceso_carga_user(){
        //alert("entro")
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
        
       
        alert("¡Guardado con exito!");
    }
    // -------------- PELICULAS -----------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("archivo_peli");
        fileInput.addEventListener('change', function (event) {
            peli_archive = event.target.files[0];
        })
    });

    function proceso_carga_peli(){
        //alert("entro")
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
            
            let nueva_pelicula = new Pelicula(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio_Q,lista_comen,true,0);
            arbol_pelis.insertar(nueva_pelicula);
        }
        arbol_pelis.inorden();
        console.log("llenar peliciulas")
        llenar();
        lista_pelis.ImprimirLista()
        
        
        //vista_biblioteca();
        //vista_biblioteca_dispersa();
        //document.getElementById("biblioteca_vista").style.display = ""; 
        
       
        alert("¡Guardado con exito!");
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
        alert("¡Guardado con exito!");
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
        //alert("entro")
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
                    let tempo_cater = tempo.objeto_valor.categorias.head;
                    let repetido = false;
                    while(tempo_cater !=null){
                        if(tempo_cater.objeto_categoria.id == id){
                            console.log("repetidad")
                            repetido = true;
                        }else{
                            tempo.objeto_valor.categorias.agregar_categoria(nueva_categoria);
                  
                        }
                        tempo_cater = tempo_cater.siguiente;
                    }
                    if(repetido == false){
                        tempo.objeto_valor.categorias.agregar_categoria(nueva_categoria);
                    }

                    //tempo.objeto_valor.categorias.agregar_categoria(nueva_categoria);
                }
                tempo = tempo.siguiente;
            }
            
            

        }
        tabla_hash.ImprimirLista();
        //graficar_lista_us();
        alert("¡Guardado con exito!");
    }
    //-----------------------FIN CARGAS MASIVAS ------------------------------
    async function Cerrar_sesion() {
                document.getElementById("admin").style.display = "none"; 
                document.getElementById("usuario").style.display = "none"; 
                document.getElementById("vista_peliculas").style.display = "none"; 
                document.getElementById("vista_categoria").style.display = "none"; 
                document.getElementById("vista_actores").style.display = "none";
                
                alert("ADIOS") 
              
         }

    async function login() { 
        let nom_usu = (document.getElementById("user_caja").value)
        let contra_usu = document.getElementById("contra").value
        contra_ingre = contra_usu;
        let tempo = lista_us.head;
        let cre_correcta = false;

        if(document.getElementById("admin_check").checked){
            if (nom_usu =="EDD" && contra_usu == "123"){
                alert("BIENVENIDO ADMINSTRADOR")
                    cre_correcta=true;
                    document.getElementById("vista_actores").style.display = "none"; 
                    document.getElementById("vista_categoria").style.display = "none"; 
                    document.getElementById("vista_peliculas").style.display = "none";
                    document.getElementById("admin").style.display = ""; 
                    
                }else{
                    alert("NO ERES ADMINISTRADOR, POR FAVOR INTENTALO DE NUEVO")
                    document.getElementById("admin").style.display = "none"; 
                document.getElementById("usuario").style.display = "none"; 
                document.getElementById("vista_peliculas").style.display = "none"; 
                document.getElementById("vista_categoria").style.display = "none"; 
                document.getElementById("vista_actores").style.display = "none";
              
                 
            }
        }else{
            while(tempo !=null){
                if(tempo.objeto_cliente.usuario == nom_usu && tempo.objeto_cliente.contra == contra_usu){
                    cre_correcta = true;
                    usuario_ingresado = tempo.objeto_cliente.dpi;
                    nombre_us_ing = tempo.objeto_cliente.usuario;
                    alert("BIENVENIDO USUARIO")
                    
                    document.getElementById("admin").style.display = "none"; 
                    document.getElementById("usuario").style.display = "";
                    let cadena = "";
                    document.getElementById("vista_peliculas_").innerHTML = cadena;
                }
                tempo = tempo.siguiente
            }
        } 
        if(cre_correcta==false){
            alert("CREDENCIALES INCORRECTAS, POR FAVOR VUELVE A INTENTARLO")
            document.getElementById("admin").style.display = "none"; 
                document.getElementById("usuario").style.display = "none"; 
                document.getElementById("vista_peliculas").style.display = "none"; 
                document.getElementById("vista_categoria").style.display = "none"; 
                document.getElementById("vista_actores").style.display = "none";
                
        }
        document.getElementById("admin_check").checked = false;
        document.getElementById("user_caja").value = "";
        document.getElementById("contra").value = "";
        }

    async function div_pelis(){
        document.getElementById("vista_actores").style.display = "none"; 
        document.getElementById("vista_categoria").style.display = "none"; 
        document.getElementById("vista_peliculas").style.display = "";
    }
    async function div_actores(){
        document.getElementById("vista_peliculas").style.display = "none"; 
        document.getElementById("vista_categoria").style.display = "none"; 
        document.getElementById("vista_actores").style.display = "";
    }
    async function div_cate(){
        document.getElementById("vista_actores").style.display = "none"; 
        document.getElementById("vista_peliculas").style.display = "none"; 
        document.getElementById("vista_categoria").style.display = "";
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
                        .width(1150)
                        .height(700)
                        .fit(true)
                        .renderDot(codigo_dot)
    
                 }
    function graficar_peliculas() {
                    console.log("GRAFICANDO PELICULAS")
                    
                    var codigo_dot = arbol_pelis.graficar_avl()
                    console.log(codigo_dot)
                    
                    d3.select("#lienzo_admin").graphviz()
                                .width(1100)
                                .height(700)
                                .fit(true)
                                .renderDot(codigo_dot)
            
                         }
    function graficar_actores() {
                    console.log("GRAFICANDO Actores")
                    
                    var codigo_dot = arbol_actores.graficar_arbol()
                    console.log(codigo_dot)
                    
                    d3.select("#lienzo_admin").graphviz()
                                .width(1100)
                                .height(700)
                                .fit(true)
                                .renderDot(codigo_dot)
            
                         }
    function graficar_tabla_hash() {
            //RECORRIDO INICIO A FIN 
            console.log("entrosss")
        var codigo_dot = "digraph L{\n node[shape = box fillcolor = \"white\" style  = filled]\n subgraph cluster_p{\n ";
        //codigo_dot += "\n label= \"LISTA USUARIOS \"";
        codigo_dot += "\n bgcolor = \"#e43c5c\"";

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
                    .width(1100)
                    .height(700)
                    .fit(true)
                    .renderDot(codigo_dot)

             }
    function imprimir(){
	html2canvas([document.getElementById("lienzo_admin")]), {
		onrendered: function (canvas) {
			var img = canvas.toDataURL('image/png'); //o por 'image/jpeg' 
			//display 64bit imag
			document.write('<img src="'+img+'"/>');		    
		}
	}
}
function llenar(){
    
        
    llenar_(arbol_pelis.raiz);
}
function llenar_(nodo){
    
    if(nodo!=null){
        llenar_(nodo.izquierda);
        lista_pelis.agregar_valor(nodo.objeto_pelicula);
        llenar_(nodo.derecha);
    }

}
    function vista_peliculas(val){
        
        
        if(val == 1){
            lista_pelis.Ordenar_cant();
        }else{
            lista_pelis.Ordenar_cant_des();
        }
        
        let cadena = "";
        let nodo = lista_pelis.head;
        cadena += "<footer id=\"footer\">";
        cadena += "<div class=\"footer-top\">";
        cadena += "<div class=\"container\">";
        cadena += "<div class=\"row\">";
        while(nodo != null){
            if(nodo.objeto_valor.disponible == true){
                //dispobile para todos
                console.log("todos")
                cadena += "<div class=\"col-lg-2 col-md-6 footer-contact\">";
            cadena += "<h3 id = \""+nodo.objeto_valor.id+"_e\">"+nodo.objeto_valor.id+". "+nodo.objeto_valor.nom_pelicula+"</h3>";
            cadena += "</div>";
            cadena += "<div class=\"col-lg-3 col-md-6 footer-newsletter\">";
            cadena += "<h4>DESCRIPCION</h4>";
            cadena += "<p>"+nodo.objeto_valor.descripcion+"</p>";
            cadena += "</div>";
            cadena += "<div class=\"col-lg-2 col-md-6 footer-links\">";
            cadena += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+nodo.objeto_valor.id+"_info\" >Informacion</button>";
            cadena += "</div>";
                cadena += "<div class=\"col-lg-2 col-md-6 footer-links\">";
                cadena += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+nodo.objeto_valor.id+"_comprar\" >Alquilar</button>";
                cadena += "</div>";
                cadena += "<div class=\"col-lg-3 col-md-6 footer-links\">";
                cadena += "<h4>Precio: Q."+nodo.objeto_valor.precio+"</h4>";
                cadena += "</div>";
        
            }
            else if(nodo.objeto_valor.disponible == false && usuario_ingresado == nodo.objeto_valor.comprador){
                console.log("solo us")
                //no esta disponible pero si para el dueño
                cadena += "<div class=\"col-lg-2 col-md-6 footer-contact\">";
            cadena += "<h3 id = \""+nodo.objeto_valor.id+"_e\">"+nodo.objeto_valor.id+". "+nodo.objeto_valor.nom_pelicula+"</h3>";
            cadena += "</div>";
            cadena += "<div class=\"col-lg-3 col-md-6 footer-newsletter\">";
            cadena += "<h4>DESCRIPCION</h4>";
            cadena += "<p>"+nodo.objeto_valor.descripcion+"</p>";
            cadena += "</div>";
            cadena += "<div class=\"col-lg-2 col-md-6 footer-links\">";
            cadena += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+nodo.objeto_valor.id+"_info\" >Informacion</button>";
            cadena += "</div>";
                cadena += "<div class=\"col-lg-2 col-md-6 footer-links\">";
                cadena += "<p>Disponible</p>";
                cadena += "</div>";
                cadena += "<div class=\"col-lg-3 col-md-6 footer-links\">";
                cadena += "<h4>Precio: Q."+nodo.objeto_valor.precio+"</h4>";
                cadena += "</div>";
            }else{
                //no esta disponible ni el es dueño
            }
            /*cadena += "<div class=\"col-lg-2 col-md-6 footer-contact\">";
            cadena += "<h3 id = \""+nodo.objeto_valor.id+"_e\">"+nodo.objeto_valor.nom_pelicula+"</h3>";
            cadena += "</div>";
            cadena += "<div class=\"col-lg-3 col-md-6 footer-newsletter\">";
            cadena += "<h4>DESCRIPCION</h4>";
            cadena += "<p>"+nodo.objeto_valor.descripcion+"</p>";
            cadena += "</div>";
            cadena += "<div class=\"col-lg-2 col-md-6 footer-links\">";
            cadena += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+nodo.objeto_valor.id+"_info\" >INFORMACION</button>";
            cadena += "</div>";
            if (nodo.objeto_valor.disponible == true){
                cadena += "<div class=\"col-lg-2 col-md-6 footer-links\">";
                cadena += "<button type=\"button\" class=\"btn btn-secondary\" id =\""+nodo.objeto_valor.id+"_comprar\" >COMPRAR</button>";
                cadena += "</div>";
                cadena += "<div class=\"col-lg-3 col-md-6 footer-links\">";
                cadena += "<h4>Precio: "+nodo.objeto_valor.precio+"</h4>";
                cadena += "</div>";
            }else{

            }*/
            
            nodo = nodo.siguiente;
        }
        cadena += "</div>";
        cadena += "</div>";
        cadena += "</div>";
        document.getElementById("vista_peliculas_").innerHTML = cadena;
    }
    function preorden(){
        cadena_actores ="";
        contador_ac = 0;
        cadena_actores += "<section id=\"blog\" class=\"blog\">";
        cadena_actores += "<div class=\"container\" data-aos=\"fade-up\">";
        cadena_actores += "<div class=\"row\">";
        cadena_actores += "<div class=\"col-lg-12 entries\">";
        cadena_actores += "<article class=\"entry entry-single\">";
        pre_orden(arbol_actores.raiz);
        cadena_actores += "</article>";
                    cadena_actores += "</div>";
                    cadena_actores += "</div>";
                    cadena_actores += "</div>";
                    cadena_actores += "</section>";
        document.getElementById("vista_actores_").innerHTML = cadena_actores;
    }

    function pre_orden(nodo){
        if(nodo!=null){
            cadena_actores += "<h2 class=\"entry-title\">";
            cadena_actores += ""+nodo.ob_actor.dni+". "+nodo.ob_actor.nombre+"";
            cadena_actores += "</h2>";
                    cadena_actores += "<div class=\"entry-content\">";
                    cadena_actores += "<p>Descripción: "+nodo.ob_actor.descripcion+"</p>";
                    cadena_actores += "<br>";
                    cadena_actores += "<br>";
                    contador_ac ++;
            pre_orden(nodo.izquierda);
            pre_orden(nodo.derecha);
        }
    }
    function inorden(){
        cadena_actores = "";
        contador_ac = 0;
        cadena_actores += "<section id=\"blog\" class=\"blog\">";
        cadena_actores += "<div class=\"container\" data-aos=\"fade-up\">";
        cadena_actores += "<div class=\"row\">";
        cadena_actores += "<div class=\"col-lg-12 entries\">";
        cadena_actores += "<article class=\"entry entry-single\">";
        in_orden(arbol_actores.raiz);
        cadena_actores += "</article>";
                    cadena_actores += "</div>";
                    cadena_actores += "</div>";
                    cadena_actores += "</div>";
                    cadena_actores += "</section>";
                   
        document.getElementById("vista_actores_").innerHTML = cadena_actores;
    }
    
    function in_orden(nodo){
        if(nodo!=null){
            in_orden(nodo.izquierda);
            cadena_actores += "<h2 class=\"entry-title\">";
            cadena_actores += ""+nodo.ob_actor.dni+". "+nodo.ob_actor.nombre+"";
            cadena_actores += "</h2>";
                    cadena_actores += "<div class=\"entry-content\">";
                    cadena_actores += "<p>Descripción: "+nodo.ob_actor.descripcion+"</p>";
                    cadena_actores += "<br>";
                    cadena_actores += "<br>";
                    contador_ac ++;
                    console.log("actor ",nodo.ob_actor.dni)
            in_orden(nodo.derecha);
        }
    }
    function posorden(){
        cadena_actores = "";
        contador_ac = 0;
        cadena_actores += "<section id=\"blog\" class=\"blog\">";
        cadena_actores += "<div class=\"container\" data-aos=\"fade-up\">";
        cadena_actores += "<div class=\"row\">";
        cadena_actores += "<div class=\"col-lg-12 entries\">";
        cadena_actores += "<article class=\"entry entry-single\">";
        pos_orden(arbol_actores.raiz);
        cadena_actores += "</article>";
                    cadena_actores += "</div>";
                    cadena_actores += "</div>";
                    cadena_actores += "</div>";
                    cadena_actores += "</section>";
        document.getElementById("vista_actores_").innerHTML = cadena_actores;
    }
    
    function pos_orden(nodo){
        if(nodo!=null){
            pos_orden(nodo.izquierda);
            pos_orden(nodo.derecha);
            cadena_actores += "<h2 class=\"entry-title\">";
            cadena_actores += ""+nodo.ob_actor.dni+". "+nodo.ob_actor.nombre+"";
            cadena_actores += "</h2>";
                    cadena_actores += "<div class=\"entry-content\">";
                    cadena_actores += "<p>Descripción: "+nodo.ob_actor.descripcion+"</p>";
                    cadena_actores += "<br>";
                    cadena_actores += "<br>"; 
                    contador_ac ++;         
        }
    }
    function vista_categorias(){
        document.getElementById("vista_actores").style.display = "none"; 
        document.getElementById("vista_peliculas").style.display = "none"; 
        document.getElementById("vista_categoria").style.display = "";
        var cadena_html = "<section id=\"portfolio\" class=\"portfolio\">";
        cadena_html += "<div class=\"container\">";
        cadena_html += "<div class=\"section-title\">";
        cadena_html += "<h3>Nuestras <span>Categorias</span></h3>"
        cadena_html += "</div>"
        cadena_html += "<div class=\"row portfolio-container\">";
        let tempo = tabla_hash.head;
        while(tempo != null){
            let tempo_cat = tempo.objeto_valor.categorias.head;
            while(tempo_cat != null){
                cadena_html += "<div class=\"col-lg-4 col-md-6 portfolio-item filter-fanta\">";
                            cadena_html += "<img src=\"assets/img/portfolio/cat.jpg\" class=\"img-fluid\" alt=\"\">";
                            cadena_html += "<div id=\"portfolio-info\">";
                            cadena_html += "<h4>Categoria: "+tempo_cat.objeto_categoria.company+"</h4>";
                            cadena_html += "<p>ID: "+tempo_cat.objeto_categoria.id+"</p>";
                            cadena_html += "</div>";
                            cadena_html += "</div>";
                tempo_cat = tempo_cat.siguiente;
            }
            tempo = tempo.siguiente;
        }
                    cadena_html += "</div>"
                    
                    cadena_html += "</div>"
                    cadena_html += "</section>"
        console.log(cadena_html)
        
        
        
        document.getElementById("vista_categoria").innerHTML = cadena_html;

    }

   
