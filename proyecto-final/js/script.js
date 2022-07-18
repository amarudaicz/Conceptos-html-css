

var indice;
var coleccion;
var i;
var l;
window.addEventListener(
    'load',
    function(){
        indice=0;
        coleccion=document.querySelectorAll('.hero li');
        i=0;
        l=coleccion.length;
        function cambiar(){
            if(indice>(l-1)){
                indice=0;
            }
            for(i=0;i<l;i++){
                coleccion[i].style.opacity=0;
            }
            coleccion[indice].style.opacity=1;
            indice++;
        }
        cambiar();
        setInterval(cambiar,5000);
        document.querySelector('.empty').addEventListener(
            'focus',
            function(){
                document.querySelector('.close').focus();
            }
        );

        document.querySelector('.close').addEventListener(
            'click',
            function(){
                closeMenu();
            }
        );
        document.addEventListener(
            'keyup',
            function(e){
                if (e.key === "Escape" ){
                    closeMenu();
                }
            }
        );
        document.querySelector('.menu_btn').addEventListener(
            'click',
            function(){
                openMenu();
            }
        );
        var links=document.querySelectorAll('#menu a');
        var l2=links.length;
        var i2;
        for(i2=0;i2<l2;i2++){
            links[i2].addEventListener(
                'click',
                function(){
                    closeMenu();
                }
            );
        }
    }
);
function openMenu(){
    document.querySelector('#menu').style.display='block';
    document.querySelector('.close').focus();
}
function closeMenu(){
    document.querySelector('#menu').style.display='none';
}
