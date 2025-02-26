document.addEventListener("DOMContentLoaded", function () {
  // Set max date to today
  document.getElementById("fecha").max = new Date().toISOString().split("T")[0];

  function calcular_venta_ef() {
    // Parcial 1
    var cajaInicial1 = parseFloat(document.getElementById("vn_ci1").value) || 0;
    var parcialAnterior1 = parseFloat(document.getElementById("par_ant1").value) || 0;
    var cierreZ1 = parseFloat(document.getElementById("vn_cz1").value) || 0;
    var gastos1 = parseFloat(document.getElementById("vn_ga1").value) || 0;
    var tarjetas1 = parseFloat(document.getElementById("vn_ta1").value) || 0;
    var mp1 = parseFloat(document.getElementById("vn_mp1").value) || 0;
    var proxDia1 = parseFloat(document.getElementById("vn_cpd1").value) || 0;

    // Parcial 2
    var cierreZ2 = parseFloat(document.getElementById("vn_cz2").value) || 0;
    var gastos2 = parseFloat(document.getElementById("vn_ga2").value) || 0;
    var tarjetas2 = parseFloat(document.getElementById("vn_ta2").value) || 0;
    var mp2 = parseFloat(document.getElementById("vn_mp2").value) || 0;
    var proxDia2 = parseFloat(document.getElementById("vn_cpd2").value) || 0;

    // Parcial 3
    var cierreZ3 = parseFloat(document.getElementById("vn_cz3").value) || 0;
    var gastos3 = parseFloat(document.getElementById("vn_ga3").value) || 0;
    var tarjetas3 = parseFloat(document.getElementById("vn_ta3").value) || 0;
    var mp3 = parseFloat(document.getElementById("vn_mp3").value) || 0;
    var proxDia3 = parseFloat(document.getElementById("vn_cpd3").value) || 0;

    // Set cajaInicial for parcial 2 and 3
    var cajaInicial2 = proxDia1;
    var cajaInicial3 = proxDia2;

    // Set parcialAnterior for parcial 2 and 3
    var parcialAnterior2 = cierreZ1;
    var parcialAnterior3 = cierreZ2;

    // Calculate venta total for each parcial
    var ventaTotal1 = cierreZ1 - parcialAnterior1;
    var ventaTotal2 = cierreZ2 - parcialAnterior2;
    var ventaTotal3 = cierreZ3 - parcialAnterior3;
    
    // Calculate venta efectivo for each parcial
    var ventaEfectivo1 = ventaTotal1 - (tarjetas1 + mp1);
    var ventaEfectivo2 = ventaTotal2 - (tarjetas2 + mp2);
    var ventaEfectivo3 = ventaTotal3 - (tarjetas3 + mp3);
    
    // Update the UI with calculated values
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

    // Update hidden inputs
    document.getElementById("venta_ef_input1").value = ventaEfectivo1.toFixed(2);
    
    // Check if these elements exist in your HTML
    if (document.getElementById("venta_ef_input2")) {
      document.getElementById("venta_ef_input2").value = ventaEfectivo2.toFixed(2);
    }
    
    if (document.getElementById("venta_ef_input3")) {
      document.getElementById("venta_ef_input3").value = ventaEfectivo3.toFixed(2);
    }

    // Recalculate the difference
    calc_difCaja();
  }

  function arqueo_caja() {
    // Parcial 1
    let pe101 = parseFloat(document.getElementById("pe101").value) || 0;
    let pe201 = parseFloat(document.getElementById("pe201").value) || 0;
    let pe501 = parseFloat(document.getElementById("pe501").value) || 0;
    let pe1001 = parseFloat(document.getElementById("pe1001").value) || 0;
    let pe2001 = parseFloat(document.getElementById("pe2001").value) || 0;
    let pe5001 = parseFloat(document.getElementById("pe5001").value) || 0;
    let pe10001 = parseFloat(document.getElementById("pe10001").value) || 0;
    let pe20001 = parseFloat(document.getElementById("pe20001").value) || 0;
    let pe100001 = parseFloat(document.getElementById("pe100001").value) || 0;
    let pe200001 = parseFloat(document.getElementById("pe200001").value) || 0;

    // Parcial 2
    let pe102 = parseFloat(document.getElementById("pe102").value) || 0;
    let pe202 = parseFloat(document.getElementById("pe202").value) || 0;
    let pe502 = parseFloat(document.getElementById("pe502").value) || 0;
    let pe1002 = parseFloat(document.getElementById("pe1002").value) || 0;
    let pe2002 = parseFloat(document.getElementById("pe2002").value) || 0;
    let pe5002 = parseFloat(document.getElementById("pe5002").value) || 0;
    let pe10002 = parseFloat(document.getElementById("pe10002").value) || 0;
    let pe20002 = parseFloat(document.getElementById("pe20002").value) || 0;
    let pe100002 = parseFloat(document.getElementById("pe100002").value) || 0;
    let pe200002 = parseFloat(document.getElementById("pe200002").value) || 0;

    // Parcial 3
    let pe103 = parseFloat(document.getElementById("pe103").value) || 0;
    let pe203 = parseFloat(document.getElementById("pe203").value) || 0;
    let pe503 = parseFloat(document.getElementById("pe503").value) || 0;
    let pe1003 = parseFloat(document.getElementById("pe1003").value) || 0;
    let pe2003 = parseFloat(document.getElementById("pe2003").value) || 0;
    let pe5003 = parseFloat(document.getElementById("pe5003").value) || 0;
    let pe10003 = parseFloat(document.getElementById("pe10003").value) || 0;
    let pe20003 = parseFloat(document.getElementById("pe20003").value) || 0;
    let pe100003 = parseFloat(document.getElementById("pe100003").value) || 0;
    let pe200003 = parseFloat(document.getElementById("pe200003").value) || 0;

    // Calculate totals for each parcial
    let totalArqueo1 =
      pe101 * 10 +
      pe201 * 20 +
      pe501 * 50 +
      pe1001 * 100 +
      pe2001 * 200 +
      pe5001 * 500 +
      pe10001 * 1000 +
      pe20001 * 2000 +
      pe100001 * 10000 +
      pe200001 * 20000;
      
    let totalArqueo2 =
      pe102 * 10 +
      pe202 * 20 +
      pe502 * 50 +
      pe1002 * 100 +
      pe2002 * 200 +
      pe5002 * 500 +
      pe10002 * 1000 +
      pe20002 * 2000 +
      pe100002 * 10000 +
      pe200002 * 20000;
      
    let totalArqueo3 =
      pe103 * 10 +
      pe203 * 20 +
      pe503 * 50 +
      pe1003 * 100 +
      pe2003 * 200 +
      pe5003 * 500 +
      pe10003 * 1000 +
      pe20003 * 2000 +
      pe100003 * 10000 +
      pe200003 * 20000;
    
    // Update the UI with calculated totals
    document.getElementById("total_arqueo1").innerText = totalArqueo1.toFixed(2);
    document.getElementById("total_arqueo_input1").value = totalArqueo1.toFixed(2);
    
    document.getElementById("total_arqueo2").innerText = totalArqueo2.toFixed(2);
    document.getElementById("total_arqueo_input2").value = totalArqueo2.toFixed(2);

    document.getElementById("total_arqueo3").innerText = totalArqueo3.toFixed(2);
    document.getElementById("total_arqueo_input3").value = totalArqueo3.toFixed(2);
    
    // Calculate the total for the old single-column design (if it still exists)
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
    
    if (document.getElementById("total_arqueo")) {
      document.getElementById("total_arqueo").innerText = totalArqueo.toFixed(2);
    }
    
    if (document.getElementById("total_arqueo_input")) {
      document.getElementById("total_arqueo_input").value = totalArqueo.toFixed(2);
    }

    // Recalculate the difference
    calc_difCaja();
  }

  function calc_difCaja() {
    //Parcial 1
    var ventaEfectivo1 = parseFloat(document.getElementById("venta_ef1").innerText) || 0;
    var totalArqueo1 = parseFloat(document.getElementById("total_arqueo1").innerText) || 0;
    var difCaja1 = totalArqueo1 - ventaEfectivo1;

    if (document.getElementById("dif_caja1")) {
      document.getElementById("dif_caja1").innerText = difCaja1.toFixed(2);
      document.getElementById("dif_caja_input1").value = difCaja1.toFixed(2);

      if (difCaja1 < 0) {
        document.getElementById("dif_caja1").style.color = "red";
      } else {
        document.getElementById("dif_caja1").style.color = "green";
      }
    }
    //Parcial 2
    var ventaEfectivo2 = parseFloat(document.getElementById("venta_ef2").innerText) || 0;
    var totalArqueo2 = parseFloat(document.getElementById("total_arqueo2").innerText) || 0;
    var difCaja2 = totalArqueo2 - ventaEfectivo2;

    if (document.getElementById("dif_caja2")) {
      document.getElementById("dif_caja2").innerText = difCaja2.toFixed(2);
      document.getElementById("dif_caja_input2").value = difCaja2.toFixed(2);

      if (difCaja1 < 0) {
        document.getElementById("dif_caja2").style.color = "red";
      } else {
        document.getElementById("dif_caja2").style.color = "green";
      }
    }
    //Parcial 3
    var ventaEfectivo3 = parseFloat(document.getElementById("venta_ef3").innerText) || 0;
    var totalArqueo3 = parseFloat(document.getElementById("total_arqueo3").innerText) || 0;
    var difCaja3 = totalArqueo3 - ventaEfectivo3;

    if (document.getElementById("dif_caja3")) {
      document.getElementById("dif_caja3").innerText = difCaja3.toFixed(2);
      document.getElementById("dif_caja_input3").value = difCaja3.toFixed(2);

      if (difCaja3 < 0) {
        document.getElementById("dif_caja3").style.color = "red";
      } else {
        document.getElementById("dif_caja3").style.color = "green";
      }
    }
  }

  // Add event listeners to all input fields
  document.querySelectorAll(".ingreso_datos").forEach(function (element) {
    element.addEventListener("input", calcular_venta_ef);
  });

  // Add event listeners to all arqueocaja input fields
  document.querySelectorAll("#sectorarqueo input[type='number']").forEach(function (element) {
    element.addEventListener("input", arqueo_caja);
  });
  
  document.querySelectorAll("#arqueocaja input").forEach(function (element) {
    element.addEventListener("input", arqueo_caja);
  });
  
  // Initial calculation
  calcular_venta_ef();
  arqueo_caja();
});