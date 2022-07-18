var indice=0;
var coleccion=document.querySelectorAll('li');
var i=0;
var l=coleccion.length;
function cambiar(){
    if(indice>(l-1)){
        indice=0;
    }
    for(i=0;i<l;i++){
        coleccion[i].style.zIndex=0;
    }
    coleccion[indice].style.zIndex=4;
    indice++;
}
cambiar();
setInterval(cambiar,5000);