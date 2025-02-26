document.addEventListener("DOMContentLoaded", function () {
  fecha.max = new Date().toISOString().split("T")[0];

  function calcular_venta_ef() {
    var cajaInicial1 = parseFloat(document.getElementById("vn_ci1").value) || 0;


    var parcialAnterior1 = parseFloat(document.getElementById("par_ant1").value) || 0;
   
    
    var cierreZ1 = parseFloat(document.getElementById("vn_cz1").value) || 0;
    var cierreZ2 = parseFloat(document.getElementById("vn_cz2").value) || 0;
    var cierreZ3 = parseFloat(document.getElementById("vn_cz3").value) || 0;
    
    
    
    var gastos1 = parseFloat(document.getElementById("vn_ga1").value) || 0;
    var gastos2 = parseFloat(document.getElementById("vn_ga2").value) || 0;
    var gastos3 = parseFloat(document.getElementById("vn_ga3").value) || 0;
    
    var tarjetas1 = parseFloat(document.getElementById("vn_ta1").value) || 0;
    var tarjetas2 = parseFloat(document.getElementById("vn_ta2").value) || 0;
    var tarjetas3 = parseFloat(document.getElementById("vn_ta3").value) || 0;
    
    
    var mp1 = parseFloat(document.getElementById("vn_mp1").value) || 0;
    var mp2 = parseFloat(document.getElementById("vn_mp2").value) || 0;
    var mp3 = parseFloat(document.getElementById("vn_mp3").value) || 0;
    
    
    var proxDia1 = parseFloat(document.getElementById("vn_cpd1").value) || 0;
    var proxDia2 = parseFloat(document.getElementById("vn_cpd2").value) || 0;
    var proxDia3 = parseFloat(document.getElementById("vn_cpd3").value) || 0;

    var cajaInicial2 = proxDia1;
    var cajaInicial3 = proxDia2;

    var parcialAnterior2 = cierreZ1;
    var parcialAnterior3 = cierreZ2;

    var ventaTotal1 = cierreZ1 - parcialAnterior1;
    var ventaTotal2 = cierreZ2 - parcialAnterior2;
    var ventaTotal3 = cierreZ3 - parcialAnterior3;
    
    var ventaEfectivo1 = (cierreZ1 - parcialAnterior1) - (cajaInicial1 + gastos1 + tarjetas1 + mp1 - proxDia1);
    var ventaEfectivo2 = (cierreZ2 - parcialAnterior2) - (cajaInicial2 + gastos2 + tarjetas2 + mp2 - proxDia2);
    var ventaEfectivo3 = (cierreZ3 - parcialAnterior3) - (cajaInicial3 + gastos3 + tarjetas3 + mp3 - proxDia3);
    
    document.getElementById("vn_ci2").innerText = cajaInicial2.toFixed(2);
    document.getElementById("vn_ci3").innerText = cajaInicial3.toFixed(2);

    document.getElementById("par_ant2").innerText = parcialAnterior2.toFixed(2);
    document.getElementById("par_ant3").innerText = parcialAnterior3.toFixed(2);
    
    
    document.getElementById("ventaTotal1").innerText = ventaTotal1.toFixed(2);
    document.getElementById("ventaTotal2").innerText = ventaTotal2.toFixed(2);
    document.getElementById("ventaTotal3").innerText = ventaTotal3.toFixed(2);

    document.getElementById("venta_ef1").innerText = ventaEfectivo1.toFixed(2);
    document.getElementById("venta_ef2").innerText = ventaEfectivo2.toFixed(2);
    document.getElementById("venta_ef3").innerText = ventaEfectivo3.toFixed(2);

    document.getElementById("venta_ef_input1").value = ventaEfectivo1.toFixed(2);
    document.getElementById("venta_ef_input2").value = ventaEfectivo2.toFixed(2);
    document.getElementById("venta_ef_input3").value = ventaEfectivo3.toFixed(2);

    calc_difCaja();
  }

  function arqueo_caja() {
    let pe10 = parseFloat(document.getElementById("pe10").value) || 0;
    let pe20 = parseFloat(document.getElementById("pe20").value) || 0;
    let pe50 = parseFloat(document.getElementById("pe50").value) || 0;
    let pe100 = parseFloat(document.getElementById("pe100").value) || 0;
    let pe200 = parseFloat(document.getElementById("pe200").value) || 0;
    let pe500 = parseFloat(document.getElementById("pe500").value) || 0;
    let pe1000 = parseFloat(document.getElementById("pe1000").value) || 0;
    let pe2000 = parseFloat(document.getElementById("pe2000").value) || 0;
    let pe10000 = parseFloat(document.getElementById("pe10000").value) || 0;

    let totalArqueo =
      pe10 * 10 +
      pe20 * 20 +
      pe50 * 50 +
      pe100 * 100 +
      pe200 * 200 +
      pe500 * 500 +
      pe1000 * 1000 +
      pe2000 * 2000 +
      pe10000 * 10000;
    document.getElementById("total_arqueo").innerText = totalArqueo.toFixed(2);
    document.getElementById("total_arqueo_input").value =
      totalArqueo.toFixed(2);

    calc_difCaja();
  }

  function calc_difCaja() {
    var ventaEfectivo =
      parseFloat(document.getElementById("venta_ef").innerText) || 0;
    var totalArqueo =
      parseFloat(document.getElementById("total_arqueo").innerText) || 0;
    var difCaja = totalArqueo - ventaEfectivo;

    document.getElementById("dif_caja").innerText = difCaja.toFixed(2);
    document.getElementById("dif_caja_input").value = difCaja.toFixed(2);

    if (difCaja < 0) {
      document.getElementById("dif_caja").style.color = "red";
    } else {
      document.getElementById("dif_caja").style.color = "green";
    }
  }

  document.querySelectorAll(".ingreso_datos").forEach(function (element) {
    element.addEventListener("keyup", calcular_venta_ef);
  });

  document.querySelectorAll("#arqueocaja input").forEach(function (element) {
    element.addEventListener("keyup", arqueo_caja);
  });
  document.querySelectorAll("#arqueocaja input").forEach(function (element) {
    element.addEventListener("keyup", arqueo_caja);
  });
});
