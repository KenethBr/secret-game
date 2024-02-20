let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
numeroMaximo = 10;

function asignarElementoTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}

//Verificar el numero
function verificar() {
  let valorUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (valorUsuario === numeroSecreto) {
    asignarElementoTexto(
      "p",
      `Acertaste en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //no acertó
    if (valorUsuario > numeroSecreto) {
      asignarElementoTexto("p", "El número es menor");
    } else {
      asignarElementoTexto("p", "El número es mayor");
    }
    intentos++;
    limpiar();
  }
}

//Limpiar la caja
function limpiar() {
  let valorCaja = (document.getElementById("valorUsuario").value = "");
}

//math.floor() para decirle que de solo numeros enteros. +1 porque math.random()genera desde el numero 0 hasta el 9 en este caso.
function generarNumeroSecreto() {
  let numerosGenerados = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numerosGenerados);
  console.log(numerosSorteados);
  //si ya sorteamos todos los numeros.
  if (numerosSorteados.length == numeroMaximo) {
    asignarElementoTexto("p", "Ya se sortearon todos los numeros posibles");
  } else {
    //si el numero generado está en la lista
    if (numerosSorteados.includes(numerosGenerados)) {
      return generarNumeroSecreto();
    } else {
      numerosSorteados.push(numerosGenerados);
      return numerosGenerados;
    }
  }
}

function condicionesIniciales() {
  asignarElementoTexto("h1", "Juego del numero secreto");
  asignarElementoTexto("p", `Ingrese un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  // console.log(numeroSecreto);
}

function reiniciarJuego() {
  limpiar();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

