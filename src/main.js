function mueveReloj() {
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();
  
    horaImprimible = hora;
    minutoImprimible = minuto;
    segundoImprimible = segundo;
  
    document.form_reloj.reloj.value = horaImprimible;
    document.form_reloj.reloj1.value = minutoImprimible;
    document.form_reloj.reloj3.value = segundoImprimible;
    setTimeout("mueveReloj()", 1000);
  }
  