# projetoReceitasPw
-function validarRadioButton() {
  var options = document.getElementsByName("option");
  var selectedOption = false;

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = true;
      break;
    }
  }

  if (selectedOption) {
    alert("El radio button ha sido seleccionado.");
  } else {
    alert("Por favor, selecciona una opción.");
  }
}
