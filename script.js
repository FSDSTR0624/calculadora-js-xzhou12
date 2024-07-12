let pantalla = document.getElementById("pantalla");
let op_pendiente = document.getElementById("op-pendiente");
let num1 = null;

function agregarNumero(numero) {
  pantalla.value += numero;
}

function operar(operador) {
  if (pantalla.value !== "") {
    num1 = parseInt(pantalla.value);
    op_pendiente.innerText = pantalla.value + operador;
    pantalla.value = "";
  } else {
    alert("Debe introducir un valor antes de operar");
  }
}

function borrar() {
  pantalla.value = "";
  op_pendiente.innerText = "";
}

function borrarOne() {
  if (pantalla.value !== "") {
    pantalla.value = pantalla.value.slice(0, -1);
  }
}

function resultado() {
  let result = 0;
  if (op_pendiente.innerText !== "" && pantalla.value !== "") {
    let operador = op_pendiente.innerText.slice(-1);

    switch (operador) {
      case "+":
        result = num1 + parseInt(pantalla.value);

        break;
      case "-":
        result = num1 - parseInt(pantalla.value);

        break;
      case "*":
        result = num1 * parseInt(pantalla.value);

        break;
      case "/":
        result = num1 / parseInt(pantalla.value);

        break;
      case "%":
        result = ((parseInt(pantalla.value) / 100) * num1).toFixed(2);

        break;
    }

    pantalla.value = result;
    op_pendiente.innerText = "";
    num1 = null;
  } else {
    alert("Debe introducir un valor antes de operar");
  }
}

function changeTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark')
  }
}