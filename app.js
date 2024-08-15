//let titulo =  document.querySelector('h1'); /*este permite agarrar ese objeto y todo lo que tiene en el/*
/* ahora saldra ese texto */
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector ('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
//NOTA OMITIR COMENTARIOS QUE NO TENGAN LOGICA 
//PRIMER PASO 
//INICIALIZAR VARIABLES

let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//FUNCION QUE ASIGNA TEXTO A LAS CASILLAS DE MI JUEGO EN EL HTML 
function asignarTextoElemento(elemento, texto){
    let elementoHTML =  document.querySelector(elemento); 
    //este permite agarrar ese objeto y todo lo que tiene en el
    //ahora saldra ese texto 
    elementoHTML.innerHTML = texto;
    return; //no devuelve nada solo por buena redaccion
}


//FUNCION QUE VERIFICA LOS INTENTOS Y SALE EN FORMA DE TEXTO EN LA PANTALLA SI ES MENOR MAYOR O ACERTADO 
function verificarIntento() {
    //let numDeUsuario = document.querySelector('input');
    let numDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    //console.log(numSecreto);
    //console.log(numDeUsuario);
    if(numDeUsuario === numSecreto){
    //asignar texto elemento
        asignarTextoElemento('p',`ACERTASTE EL NUMERO EN ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} `);
            //console.log (numDeUsuario === numSecreto);//retorna el tipo de dato booleano
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if(numDeUsuario > numSecreto){
            asignarTextoElemento('p','EL NUMERO SECRETO ES MENOR');
    } else{
        asignarTextoElemento('p','EL NUMERO SECRETO ES MAYOR');

        }
    intentos++;  
    limpiarCaja();
    }
    return;
    //alert('Click desde la función'); 
}

// FUNCION ENCARGADA DE LIMPIAR CUANDO UNA PERSONA NO ACIERTA Y HACE UNA CLASE DE RE START
function limpiarCaja(){
    //Obtiene el elemento ID DE NUESTRO HTLM
    document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}
//FUNCION DE LAS CONDICIONES INICIALES DEL JUEGO 
function condicionesIniciales(){
    asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p',`INDICA UN NUMERO DEL 1 AL ${numeroMaximo}`);
    numSecreto = generarNumSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    //Limpia caja y indica el mensaje de intervalo de numeros
    limpiarCaja();
    //Generar el numero aleatorio 
    condicionesIniciales();
    //Nueva llamada a la funcion
    //numSecreto = generarNumSecreto();
    //Inicializar el num de intentos
    //intentos = 1; 
    //Deshabilitar el boton de NUEVO JUEGO 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();

//FUNCION QUE GENERA EL NUMERO SECRETO
function generarNumSecreto (){
    //let numSecreto = Math.floor (Math.random()*10)+1;
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el num generado esta incluido en la lista hacemos una operacion si no hacemos otra
    //ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumSecreto();
        //recursividad poder utilizar la recursividad que ya esta hecha
    } else{ 
        listaNumerosSorteados.push(numeroGenerado);   
        return numeroGenerado;
        }
    }
}

//asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
//asignarTextoElemento('p','INDICA UN NUMERO DEL 1 AL 100');


/*
//DESAFIOS

//CREAR UNA FUNCION QUE MUESTRE HOLA MUNDO EN LA CONSOLA 

function holaMundo (){
    console.log('HELLO WORLD !');
    return;
}

function nombreHolaMundo(){
    let nombre =  prompt("NOMBRE DEL USUARIO");
    console.log(`HOLA, ${nombre}!`);
}

//CREAR FUNCION QUE RECIBA UN NUMERO COMO PARAMETRO Y DEVUELVE EL DOBLE DE ESE NUMERO 

function duplicado(){
    numA = parseInt(prompt('ESCRIBE UN NUMERO '));
    resultado = numA * 2;
    console.log(`El doble de ${numA} es ${resultado}`);
    return resultado;
}

//CREAR FUNCION QUE RECIBA TRES NUMEROS COMO PARAMETROS Y DEVULEVA SU PROMEDIO 

function promedio(){
    numA = parseInt(prompt('ESCRIBE EL PRIMER NUMERO '));
    numB = parseInt(prompt('ESCRIBE EL SEGUNDO NUMERO '));
    numC = parseInt(prompt('ESCRIBE EL TERCER NUMERO '));
    prom = (numA + numB + numC)/3;
    console.log(prom); 
    return prom;
}

//CREAR FUNCION QUE RECIBA DOS NUMEROS COMO PARAMETROS Y DEFINA EL MAYOR

function mayor(){
    numA = parseInt(prompt('ESCRIBE EL PRIMER NUMERO '));
    numB = parseInt(prompt('ESCRIBE EL SEGUNDO NUMERO '));
    
    if (numA > numB){
        console.log(`El primer numero ${numA} es mayor que ${numB}`);
    }
    else {
        console.log(`El segundo numero ${numB} es mayor que ${numA}`);
    }
}

//CREAR UNA FUNCION QUE REGRESE EL CUADRADO DEL MISMO 

function cuadrado(numero){

    return numero * numero;
}

let resultado = cuadrado(2); 
console.log(resultado);

*/

/*const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.
*/

/*//CREAR FUNCION QUE CALCULE EL IMC DE UNA PERSONA A PARTIR DE SU ALTURA EN METROS Y PESO EN KILOGRAMOS
//SERAN LOS PARAMETROS RECIBIDOS POR LA FUNCION 

function calcularIMC(altura, peso){
    let imc = peso/ (altura*altura);
    return imc;
}
console.log(calcularIMC(1.79,80));

//CREAR UNA FUNCION QUE CALCULE EL VALOR DEL FACTORIAL DEUN NÚM PASADO COMO PARAMETRO

function calcularFactorial(numero){
    if (numero === 0 || numero === 1) {
        return 1;
      } else {
        return numero * calcularFactorial(numero - 1);
      }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);*/
