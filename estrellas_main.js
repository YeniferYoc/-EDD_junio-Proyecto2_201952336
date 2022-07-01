
document.getElementById("calificar").onclick = calificar;
function calificar(){
    let cali = (document.getElementById("caja").value)
    console.log(cali)
    for(let i = 0; i<5;i++){
       if(i<cali){
        document.getElementById((i+1)+"_es").style.color = "orange";
        
       } 
    }
        
}
