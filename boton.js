alert("dd") 
function form_mio(valor) {
    /*
        document: hace referencia a la pagina web cargada en el navegador
        getElementById(): obtiene el elemento html asociado al id que le pasemos por parametro
        style: accede a la propiedad style de la etiqueta html obtenida y modifica cualquier propiedad 
        perteneciente a este atributo, style es refernte al css de esa etiqueta
    */
    if (valor == 1) { document.getElementById("calculadora").style.display = ""; }
    else { document.getElementById("calculadora").style.display = "none"; }
    
}