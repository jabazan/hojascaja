document.addEventListener('DOMContentLoaded', function() {
    
    fecha.max = new Date().toISOString().split('T')[0];

    function calcular_venta_ef() {
        var cajaInicial = parseFloat(document.getElementById('vn_ci').value) || 0;
        var cierreZ = parseFloat(document.getElementById('vn_cz').value) || 0;
        var gastos = parseFloat(document.getElementById('vn_ga').value) || 0;
        var tarjetas = parseFloat(document.getElementById('vn_ta').value) || 0;
        var mp = parseFloat(document.getElementById('vn_mp').value) || 0;
        var proxDia = parseFloat(document.getElementById('vn_cpd').value) || 0;

        var ventaEfectivo = cierreZ - (cajaInicial + gastos + tarjetas + mp - proxDia);
        document.getElementById('venta_ef').innerText = ventaEfectivo.toFixed(2);
        document.getElementById('venta_ef_input').value = ventaEfectivo.toFixed(2);

        calc_difCaja();
    }

    function arqueo_caja() {
        let pe10 = parseFloat(document.getElementById('pe10').value) || 0;
        let pe20 = parseFloat(document.getElementById('pe20').value) || 0;
        let pe50 = parseFloat(document.getElementById('pe50').value) || 0;
        let pe100 = parseFloat(document.getElementById('pe100').value) || 0;
        let pe200 = parseFloat(document.getElementById('pe200').value) || 0;
        let pe500 = parseFloat(document.getElementById('pe500').value) || 0;
        let pe1000 = parseFloat(document.getElementById('pe1000').value) || 0;
        let pe2000 = parseFloat(document.getElementById('pe2000').value) || 0;
        let pe10000 = parseFloat(document.getElementById('pe10000').value) || 0;

        let totalArqueo = (pe10 * 10) + (pe20 * 20) + (pe50 * 50) + (pe100 * 100) + (pe200 * 200) + (pe500 * 500) + (pe1000 * 1000) + (pe2000 * 2000) + (pe10000 * 10000);
        document.getElementById('total_arqueo').innerText = totalArqueo.toFixed(2);
        document.getElementById('total_arqueo_input').value = totalArqueo.toFixed(2);

        calc_difCaja();
    }

    function calc_difCaja() {
        var ventaEfectivo = parseFloat(document.getElementById('venta_ef').innerText) || 0;
        var totalArqueo = parseFloat(document.getElementById('total_arqueo').innerText) || 0;
        var difCaja = totalArqueo - ventaEfectivo;

        document.getElementById('dif_caja').innerText = difCaja.toFixed(2);
        document.getElementById('dif_caja_input').value = difCaja.toFixed(2);

       if (difCaja<0) {
        document.getElementById('dif_caja').style.color='red';
       } else {
        document.getElementById('dif_caja').style.color='green';
       }
    }

    document.querySelectorAll('.ingreso_datos').forEach(function(element) {
        element.addEventListener('keyup', calcular_venta_ef);
    });

    document.querySelectorAll('#arqueocaja input').forEach(function(element) {
        element.addEventListener('keyup', arqueo_caja);
    });

});
