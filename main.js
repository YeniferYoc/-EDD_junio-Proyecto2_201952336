import{Lista_clientes} from "./Estructura_cliente.js";
import{Cliente} from "./Cliente.js";
import { Arbol_binario } from "./Estructuras_actor.js";



let user_archive;
let usuario_ingresado;
let peli_archive;
let actor_archive;

let lista_us = new Lista_clientes();
let arbol_actores = new Arbol_binario();




document.getElementById("user").onclick = proceso_carga_user;
document.getElementById("login").onclick = login;

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
            libro_archive = event.target.files[0];
        })
    });

    function proceso_carga_peli(){
        alert("entro")
        let reader = new FileReader();
        reader.readAsText(libro_archive);
        reader.addEventListener('load',sent_libro_to_server,false);
    }

    function sent_libro_to_server(e){
        var texto = e.target.result;
        var Libros = JSON.parse(texto);
        console.log(texto)
        for(let i =0; i< Libros.length;i++){
            let isbm = Libros[i].isbn;
            let nombre_autor = Libros[i].nombre_autor;
            let nombre_libro = Libros[i].nombre_libro;
            let cantidad = Libros[i].cantidad;
            let fila = Libros[i].fila;
            let columna = Libros[i].columna;
            let paginas = Libros[i].paginas;
            let categoria = Libros[i].categoria;
            let nuevo_libro = new Libro(isbm,nombre_autor,nombre_libro,cantidad,fila,columna,paginas,categoria);

            if (categoria.toUpperCase() == 'FANTASIA'){
                matriz_ort.Buscar_cam(fila,columna,nuevo_libro);
                console.log("fant")
                
            }else{
                matriz_dis.insertar(fila, columna,nuevo_libro);
                console.log("tri")

            }
            

        }
        matriz_dis.mostrarmatriz()
        matriz_ort.mostrarmatriz()
        graficar_ortogonal();
        
        vista_biblioteca();
        vista_biblioteca_dispersa();
        //document.getElementById("biblioteca_vista").style.display = ""; 
        
       
        alert("Succefull");
    }

    // --------------- AUTORES ------------------------
    window.addEventListener('load', function () {
        let fileInput = document.getElementById("autor_input_archive");
        fileInput.addEventListener('change', function (event) {
            autor_archive = event.target.files[0];
        })
    });

    function proceso_carga_autor(){
        let reader = new FileReader();
        reader.readAsText(autor_archive);
        reader.addEventListener('load',sent_autor_to_server,false);
    }

    function sent_autor_to_server(e){
        var texto = e.target.result;
        var Autores = JSON.parse(texto);
        console.log(texto)
        for(let i =0; i< Autores.length;i++){
            let dpi = Autores[i].dpi;
            let nombre_completo = Autores[i].nombre_autor;
            let correo = Autores[i].correo;
            let telefono = Autores[i].telefono;
            let direccion = Autores[i].direccion;
            let biografia = Autores[i].biografia;

            let nuevo_autor = new Autor(dpi,nombre_completo,correo,telefono,direccion,biografia);
            arbol_binario.insertar(nuevo_autor)

        }
        arbol_binario.inorden();
        llenar_lista();
        lista_autores.ImprimirLista()
        vista_autores(lista_autores)
        //arbol_binario.graficar_arbol()
        graficar_arbol()
        
       
        alert("Succefull");
    }
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
    if(document.getElementById("admin_check").checked)
    { alert("jsaa") } 
           
           
           

    usuario_ingresado = nom_usu;
    contra_ingre = contra_usu;
    let tempo = lista_us.head;
    let contador_us = 0;
    let cre_correcta = false;
    if (nom_usu =="Wilfred" && contra_usu == "123"){
        alert("BIENVENIDO ADMINSTRADOR")
            cre_correcta=true;
            document.getElementById("admin").style.display = "";
            document.getElementById("cola").style.display = ""; 
            document.getElementById("list_usua").style.display = ""; 
            document.getElementById("dis_pila").style.display = "";
            document.getElementById("biblioteca").style.display = ""; 
            document.getElementById("buscar_autor").style.display = ""; 
            //document.getElementById("biblioteca_vista").style.display = ""; 
            document.getElementById("autores").style.display = ""; 
            document.getElementById("buscar_ad_libro").style.display = ""; 
            
            graficar_lista_us();
            graficar_cola();

            
           }else{
            document.getElementById("admin").style.display = "none"; 
            document.getElementById("cola").style.display = "none"; 
            document.getElementById("list_usua").style.display = "none"; 
            document.getElementById("biblioteca").style.display = "none";
            //document.getElementById("biblioteca_vista").style.display = "none"; 
            document.getElementById("autores").style.display = "none"; 
            document.getElementById("buscar_ad_libro").style.display = "none";
            document.getElementById("dis_pila").style.display = "none"; 
    }
    while(contador_us<lista_us.tamanio){
        if(tempo.ob_usuario.usuario == nom_usu && tempo.ob_usuario.contra == contra_usu){

           if(tempo.ob_usuario.rol == "Usuario"){
            
            alert("BIENVENIDO USUARIO")
            cre_correcta = true;
            document.getElementById("usuario").style.display = "";
            document.getElementById("comprar").style.display = ""; 
            document.getElementById("dis_pila").style.display = ""; 
            document.getElementById("biblioteca").style.display = "";
            //document.getElementById("biblioteca_vista").style.display = ""; 
            document.getElementById("autores").style.display = ""; 
           }else{
            document.getElementById("usuario").style.display = "none"; 
            document.getElementById("comprar").style.display = "none"; 
            document.getElementById("dis_pila").style.display = "none"; 
            document.getElementById("biblioteca").style.display = "none"; 
            document.getElementById("autores").style.display = "none";
            document.getElementById("dis_pila").style.display = "none"; 
            //document.getElementById("biblioteca_vista").style.display = "none"; 
           }
           
           if(tempo.ob_usuario.rol == "Administrador"){
            alert("BIENVENIDO ADMINSTRADOR")
            cre_correcta=true; 
            document.getElementById("admin").style.display = "";
            document.getElementById("cola").style.display = ""; 
            document.getElementById("list_usua").style.display = ""; 
            document.getElementById("dis_pila").style.display = "";
            document.getElementById("biblioteca").style.display = ""; 
            document.getElementById("buscar_autor").style.display = ""; 
            //document.getElementById("biblioteca_vista").style.display = ""; 
            document.getElementById("autores").style.display = ""; 
            document.getElementById("buscar_ad_libro").style.display = ""; 

            graficar_lista_us();
            graficar_cola();

            
           }else{
            document.getElementById("admin").style.display = "none"; 
            document.getElementById("cola").style.display = "none"; 
            document.getElementById("list_usua").style.display = "none";
            document.getElementById("buscar_ad_libro").style.display = "none"; 
           }
        }
        tempo = tempo.siguiente
        contador_us++;
    }
    if(cre_correcta==false){
        alert("CREDENCIALES INCORRECTAS, POR FAVOR VUELVE A INTENTARLO")
    }



    document.getElementById("user_caja").value = "";
    document.getElementById("contra").value = "";
     }