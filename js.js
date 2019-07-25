function mostrarCant(checkbox, quien, cant){
  if(document.getElementById(checkbox).checked){
    document.getElementById(quien).style.visibility = 'visible';
  } else {
    document.getElementById(quien).style.visibility = 'hidden';
    document.getElementById(cant).innerHTML = 1;
  }
  totalPagar()
}

var storage = window.localStorage


function totalPagar(){
  var subPrecioA = document.getElementById('precioA').innerHTML
  var precioA = parseInt(subPrecioA.substring(1, 6))
  var subPrecioB = document.getElementById('precioB').innerHTML
  var precioB = parseInt(subPrecioB.substring(1, 6))
  var subPrecioC = document.getElementById('precioC').innerHTML
  var precioC = parseInt(subPrecioC.substring(1, 6))
  var subPrecioD = document.getElementById('precioD').innerHTML
  var precioD = parseInt(subPrecioD.substring(1, 6))
  var subPrecioE = document.getElementById('precioE').innerHTML
  var precioE = parseInt(subPrecioE.substring(1, 6))
  var subPrecioF = document.getElementById('precioF').innerHTML
  var precioF = parseInt(subPrecioF.substring(1, 6))

  if(document.getElementById('checkA').checked){
    var prodA = parseInt(document.getElementById('numA').innerHTML)
    totalA = prodA * precioA
    storage.setItem("claveValorA", 1)
    storage.setItem("totalA", totalA)
  } else {
    var totalA = 0;
    storage.setItem("claveValorA", 0)
    storage.setItem("totalA", 0)
  }
  if(document.getElementById('checkB').checked){
    var prodB = parseInt(document.getElementById('numB').innerHTML)
    totalB = prodB * precioB
    storage.setItem("claveValorB", 1)
    storage.setItem("totalB", totalB)
  } else {
    var totalB = 0;
    storage.setItem("claveValorB", 0)
    storage.setItem("totalB", 0)
  }
  if(document.getElementById('checkC').checked){
    var prodC = parseInt(document.getElementById('numC').innerHTML)
    totalC = prodC * precioC
    storage.setItem("claveValorC", 1)
    storage.setItem("totalC", totalC)
  } else {
    var totalC = 0;
    storage.setItem("claveValorC", 0)
    storage.setItem("totalC", 0)
  }
  if(document.getElementById('checkD').checked){
    var prodD = parseInt(document.getElementById('numD').innerHTML)
    totalD = prodD * precioD
    storage.setItem("claveValorD", 1)
    storage.setItem("totalD", totalD)
  } else {
    var totalD = 0;
    storage.setItem("claveValorD", 0)
    storage.setItem("totalD", 0)
  }
  if(document.getElementById('checkE').checked){
    var prodE = parseInt(document.getElementById('numE').innerHTML)
    totalE = prodE * precioE
    storage.setItem("claveValorE", 1)
    storage.setItem("totalE", totalE)
  } else {
    var totalE = 0;
    storage.setItem("claveValorE", 0)
    storage.setItem("totalE", 0)
  }
  if(document.getElementById('checkF').checked){
    var prodF = parseInt(document.getElementById('numF').innerHTML)
    totalF = prodF * precioF
    storage.setItem("claveValorF", 1)
    storage.setItem("totalF", totalF)
  } else {
    var totalF = 0;
    storage.setItem("claveValorF", 0)
    storage.setItem("totalF", 0)
  }
  var total = totalA + totalB + totalC + totalD + totalE + totalF
  document.getElementById('totalTotal').innerHTML = '$' + total
}

function aumentarCant(quien){
  var contador = document.getElementById(quien).innerHTML
  if(document.getElementById(quien).innerHTML < 0){
    document.getElementById(quien).innerHTML = 0
  } else {
    document.getElementById(quien).innerHTML = parseInt(contador) + 1
  }
  totalPagar()
}

function disminuirCant(quien){
  if(document.getElementById(quien).innerHTML == 0){
    document.getElementById(quien).innerHTML = 0
  } else {
    document.getElementById(quien).innerHTML -= 1
  }
  totalPagar()
}

function carro(){
  var totalA = parseInt(storage.getItem("totalA"))
  var totalB = parseInt(storage.getItem("totalB"))
  var totalC = parseInt(storage.getItem("totalC"))
  var totalD = parseInt(storage.getItem("totalD"))
  var totalE = parseInt(storage.getItem("totalE"))
  var totalF = parseInt(storage.getItem("totalF"))

  if(storage.getItem("claveValorA") == 0) {
    document.getElementById('contA').style.display = "none";
    document.getElementById('textoA').style.display = "none";
    document.getElementById('totA').style.display = "none";
  } else {
    document.getElementById('contA').style.display = "block";
    document.getElementById('textoA').style.display = "block";
    document.getElementById('textoA').innerHTML = "MATAFUEGO POLVO QUÍMICO SECO"
    document.getElementById('totA').style.display = "block";
    document.getElementById('totA').innerHTML = '$' + totalA
  }
  if(storage.getItem("claveValorB") == 0) {
    document.getElementById("contB").style.display = "none";
    document.getElementById('textoB').style.display = "none";
    document.getElementById('totB').style.display = "none";
  } else {
    document.getElementById("contB").style.display = "block";
    document.getElementById('textoB').style.display = "block";
    document.getElementById('textoB').innerHTML = "GARRAFA DE CO2"
    document.getElementById('totB').style.display = "block";
    document.getElementById('totB').innerHTML = '$' + totalB
  }
  if(storage.getItem("claveValorC") == 0) {
    document.getElementById("contC").style.display = "none";
    document.getElementById('textoC').style.display = "none";
    document.getElementById('totC').style.display = "none";
  } else {
    document.getElementById("contC").style.display = "block";
    document.getElementById('textoC').style.display = "block";
    document.getElementById('textoC').innerHTML = "FUNDA SOPORTE PARA MATAFUEGOS"
    document.getElementById('totC').style.display = "block";
    document.getElementById('totC').innerHTML = '$' + totalC
  }
  if(storage.getItem("claveValorD") == 0) {
    document.getElementById("contD").style.display = "none";
    document.getElementById('textoD').style.display = "none";
    document.getElementById('totD').style.display = "none";
  } else {
    document.getElementById("contD").style.display = "block";
    document.getElementById('textoD').style.display = "block";
    document.getElementById('textoD').innerHTML = "MATAFUEGO POLVO QUÍMICO SECO"
    document.getElementById('totD').style.display = "block";
    document.getElementById('totD').innerHTML = '$' + totalD
  }
  if(storage.getItem("claveValorE") == 0) {
    document.getElementById("contE").style.display = "none";
    document.getElementById('textoE').style.display = "none";
    document.getElementById('totE').style.display = "none";
  } else {
    document.getElementById("contE").style.display = "block";
    document.getElementById('textoE').style.display = "block";
    document.getElementById('textoE').innerHTML = "GARRAFA DE CO2"
    document.getElementById('totE').style.display = "block";
    document.getElementById('totE').innerHTML = '$' + totalE
  }
  if(storage.getItem("claveValorF") == 0) {
    document.getElementById("contF").style.display = "none";
    document.getElementById('textoF').style.display = "none";
    document.getElementById('totF').style.display = "none";
  } else {
    document.getElementById("contF").style.display = "block";
    document.getElementById('textoF').style.display = "block";
    document.getElementById('textoF').innerHTML = "FUNDA SOPORTE PARA MATAFUEGOS"
    document.getElementById('totF').style.display = "block";
    document.getElementById('totF').innerHTML = '$' + totalF
  }

  document.getElementById('precioA').innerHTML = '$' + totalA
  document.getElementById('precioB').innerHTML = '$' + totalB
  document.getElementById('precioC').innerHTML = '$' + totalC
  document.getElementById('precioD').innerHTML = '$' + totalD
  document.getElementById('precioE').innerHTML = '$' + totalE
  document.getElementById('precioF').innerHTML = '$' + totalF

  var total = totalA + totalB + totalC + totalD + totalE + totalF
  document.getElementById('totalCarro').innerHTML = 'TOTAL: $' + total
}

function confirmarCompra(){
  var direccion = prompt("Ingrese la dirección de envío")
  if (direccion != null) {
    alert("En un tiempo aproximado de 6hs estaremos enviando su pedido a '" + direccion + "' Muchas gracias!!")
  }
  storage.clear()
  location.reload()
}
