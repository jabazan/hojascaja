document.addEventListener('DOMContentLoaded', function() {
    function calcular_venta_ef() {
        const cajaInicial = parseFloat(document.getElementById('vn_ci').value) || 0;
        const cierreZ = parseFloat(document.getElementById('vn_cz').value) || 0;
        const gastos = parseFloat(document.getElementById('vn_ga').value) || 0;
        const tarjetas = parseFloat(document.getElementById('vn_ta').value) || 0;
        const mp = parseFloat(document.getElementById('vn_mp').value) || 0;
        const cajaProxDia = parseFloat(document.getElementById('vn_cpd').value) || 0;

        const ventaEfectivo = cierreZ - cajaInicial - gastos - tarjetas - mp + cajaProxDia;
        document.getElementById('venta_ef').textContent = ventaEfectivo.toFixed(2);
    }

    function arqueo_caja() {
        const billetes5 = parseFloat(document.getElementById('pe5').value) || 0;
        const billetes10 = parseFloat(document.getElementById('pe10').value) || 0;
        const billetes20 = parseFloat(document.getElementById('pe20').value) || 0;
        const billetes50 = parseFloat(document.getElementById('pe50').value) || 0;
        const billetes100 = parseFloat(document.getElementById('pe100').value) || 0;
        const billetes200 = parseFloat(document.getElementById('pe200').value) || 0;
        const billetes500 = parseFloat(document.getElementById('pe500').value) || 0;
        const billetes1000 = parseFloat(document.getElementById('pe1000').value) || 0;

        const totalArqueo = (billetes5 * 5) + (billetes10 * 10) + (billetes20 * 20) +
                            (billetes50 * 50) + (billetes100 * 100) + (billetes200 * 200) +
                            (billetes500 * 500) + (billetes1000 * 1000);
        
        document.getElementById('total_arqueo').textContent = totalArqueo.toFixed(2);

        calc_difCaja();
    }

    function calc_difCaja() {
        const ventaEfectivo = parseFloat(document.getElementById('venta_ef').textContent) || 0;
        const totalArqueo = parseFloat(document.getElementById('total_arqueo').textContent) || 0;

        const diferencia = totalArqueo - ventaEfectivo;
        document.getElementById('dif_caja').textContent = diferencia.toFixed(2);
    }

    document.getElementById('vn_ci').addEventListener('keyup', calcular_venta_ef);
    document.getElementById('vn_cz').addEventListener('keyup', calcular_venta_ef);
    document.getElementById('vn_ga').addEventListener('keyup', calcular_venta_ef);
    document.getElementById('vn_ta').addEventListener('keyup', calcular_venta_ef);
    document.getElementById('vn_mp').addEventListener('keyup', calcular_venta_ef);
    document.getElementById('vn_cpd').addEventListener('keyup', calcular_venta_ef);

    document.getElementById('pe5').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe10').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe20').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe50').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe100').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe200').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe500').addEventListener('keyup', arqueo_caja);
    document.getElementById('pe1000').addEventListener('keyup', arqueo_caja);

    window.handleFormSubmit = function(event) {
        event.preventDefault();
        
        if (confirm('¿Desea enviar el formulario y finalizar el cierre de caja?')) {
            const formData = new FormData(document.getElementById('ccajaform'));
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch('URL_DEL_SCRIPT_APPS', { // Reemplaza con la URL del script de Google Apps
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    alert('Formulario enviado exitosamente.');
                    window.location.href = 'URL_DE_LA_PAGINA_INICIAL'; // Reemplaza con la URL de la página inicial
                } else {
                    alert('Error al enviar el formulario: ' + result.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };
});
