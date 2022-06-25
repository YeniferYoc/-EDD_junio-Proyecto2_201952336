class Cliente{
    constructor(dpi, nombre, usuario, correo, contra, telefono){
        this.dpi = dpi;
        this.nombre = nombre;
        this.usuario = usuario;
        this.correo = correo;
        this.contra = contra;
        this.telefono = telefono;
        
    }
    mostrar_cliente(){
        console.log('DPI: '+this.dpi+' Nombre de usuario: '+this.nombre+' Usuario: '+this.usuario+' correo: '+this.correo);
        console.log('Contraseña: '+this.contra+' telefono: '+this.telefono);
        
    }

}
export {Cliente};
