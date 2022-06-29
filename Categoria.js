class Categoria{
    constructor(id, company){
        this.id = id;
        this.company = company;
    }
    mostrar_categoria(){
        console.log('id: '+this.id+' categoria: '+this.company);
        
    }

}
export {Categoria};
