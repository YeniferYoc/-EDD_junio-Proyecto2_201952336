class Actor{
    constructor(dni, nombre, correo, descripcion){
        this.dni = dni;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = descripcion;
    }
    mostrar_actor(){
        console.log('DNI: '+this.dpi+' Nombre de actor: '+this.nombre);
        console.log('correo: '+this.correo+" descripcion: "+this.descripcion);
        
    }

}
export {Actor};
