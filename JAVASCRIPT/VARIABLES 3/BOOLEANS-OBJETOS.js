//"use strict"
//BOOLEAns

const boolean1=true;
const boolean2=false;

console.log(boolean1);
console.log(boolean2);


//objetos

const usuario="amaru";
const edad=20;   //en vez de escribir tres variables
const ciudad="cordoba";


const usuarioo = {
    nombreusuario:"amaru",
    edad: 20,       //creamos un objeto con las 3 variables dentro
    ciudad: "cordoba"

}

//como prevenir que un objeto se le agregen propiedades
Object.freeze(usuarioo); //
                    
// Object.seal(usuarioo) no te permite agregar propiedades o eliminarlas PERO SI TE PERMITE MODIFICAR VALORES



//modificar una propiedad a un objeto
usuarioo.edad=18


//agregar propiedades a un objeto

usuarioo.imagen="imajen.jpg";

//eliminar propiedad A UN OBJETO
delete usuarioo.ciudad;


console.log(usuarioo);
console.log(usuarioo.edad); //asi accedemos a casa variable del objeto
console.log(usuarioo.ciudad)




//objeto
const producto={
    nombreproducto:"monitor 20 Pulgadas" ,
    precio:300,
    disponible:true
}

//como extraer la variable al objeto

const precioproducto = producto.precio; //asi extraemos la variable de precio
//const nombreproducto = producto.nombreproducto; //el nombreproducto del objeto NO ES UNA VARIABLE es una propiedad del objeto
 

//Destructuring

//const {precio} = producto; //creamos la variable y extraemos el valor del objeto con esta sintaxis
const {disponible} =producto; 
const {precio , nombreproducto} = producto //extraemos 2 variables a partir de los valores del objeto



console.log(precio)
console.log(disponible)
console.log(nombreproducto)















