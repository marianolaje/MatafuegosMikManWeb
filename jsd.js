function mostrarCant(checkbox, quien, cant){
  if(document.getElementById(checkbox).checked){
    document.getElementById(quien).style.visibility = 'visible';
  } else {
    document.getElementById(quien).style.visibility = 'hidden';
    document.getElementById(cant).innerHTML = 1;
  }
  totalPagar()
}

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

  var totalA = 0;
  var totalB = 0;
  var totalC = 0;
  var totalD = 0;
  var totalE = 0;
  var totalF = 0;

  if(document.getElementById('checkA').checked){
    var prodA = parseInt(document.getElementById('numA').innerHTML)
    totalA = prodA * precioA
    agregCaja('contA')
  } else {
    elimCaja('contA')
  }
  if(document.getElementById('checkB').checked){
    var prodB = parseInt(document.getElementById('numB').innerHTML)
    totalB = prodB * precioB
    agregCaja('contB')
  } else {
    elimCaja('contB')
  }
  if(document.getElementById('checkC').checked){
    var prodC = parseInt(document.getElementById('numC').innerHTML)
    totalC = prodC * precioC
    agregCaja('contC')
  } else {
    elimCaja('contC')
  }
  if(document.getElementById('checkD').checked){
    var prodD = parseInt(document.getElementById('numD').innerHTML)
    totalD = prodD * precioD
    agregCaja('contD')
  } else {
    elimCaja('contD')
  }
  if(document.getElementById('checkE').checked){
    var prodE = parseInt(document.getElementById('numE').innerHTML)
    totalE = prodE * precioE
    agregCaja('contE')
  } else {
    elimCaja('contE')
  }
  if(document.getElementById('checkF').checked){
    var prodF = parseInt(document.getElementById('numF').innerHTML)
    totalF = prodF * precioF
    agregCaja('contF')
  } else {
    elimCaja('contF')
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

function elimCaja(caja){
  document.getElementById(caja).style.display = "none";
}
function agregCaja(caja){
  document.getElementById(caja).style.display = "block";
}
