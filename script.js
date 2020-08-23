//Variables declaradas

function validarFormulario() {
  var rut = document.getElementById("rut").value;
  var nombre = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var comuna = document.getElementById("comuna").value;
  var ciudad = document.getElementById("ciudad").value;
  var mail = document.getElementById("mail").value;
  var telefono = document.getElementById("telefono").value;
  var movil = document.getElementById("movil").value;
  var clave = document.getElementById("clave").value;

  if (rut == null || rut.length == 0 || /^\s+$/.test(rut)) {
    alert("ERROR: El campo rut no debe ir vacío.");
    return false;
  }

  if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    alert("ERROR: El campo nombre no debe ir vacío.");
    return false;
  }

  if (direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)) {
    alert("ERROR: El campo dirección no debe ir vacío.");
    return false;
  }

  if (comuna == null || comuna.length == 0 || /^\s+$/.test(comuna)) {
    alert("ERROR: El campo comuna no debe ir vacío.");
    return false;
  }

  if (ciudad == null || ciudad.length == 0 || /^\s+$/.test(ciudad)) {
    alert("ERROR: El campo ciudad no debe ir vacío.");
    return false;
  }

  if (mail == null || mail.length == 0 || /^\s+$/.test(mail)) {
    alert("ERROR: El campo correo electrónico no debe ir vacío.");
    return false;
  }

  if (telefono == null || telefono.length == 0 || /^\s+$/.test(telefono)) {
    alert("ERROR: El campo teléfono no debe ir vacío.");
    return false;
  }

  if (movil == null || movil.length == 0 || /^\s+$/.test(movil)) {
    alert("ERROR: El campo móvil no debe ir vacío.");
    return false;
  }

  if (clave == null || clave.length == 0 || /^\s+$/.test(clave)) {
    alert("ERROR: El campo clave no debe ir vacío.");
    return false;
  }

  return true;
}

function escribir(texto) {
  document.getElementById("consola").innerHTML = texto;
}
