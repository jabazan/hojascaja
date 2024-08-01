<?php
// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "c1772412_cierres";
$password = "kuse59WUfo";
$dbname = "c1772412_cierres";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Función para insertar datos del cierre de caja
function insertarCierreCaja($conn, $datos) {
    $sql = "INSERT INTO cierre_caja (fecha, sucursal, responsable, caja_inicial, cierre_z, gastos,
            tarjetas, mercado_pago, caja_inicial_proximo_dia, venta_efectivo,
            arqueo_10, arqueo_20, arqueo_50, arqueo_100, arqueo_200,
            arqueo_500, arqueo_1000, arqueo_2000, arqueo_10000,
            total_efectivo_caja, diferencia_efectivo)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssdddddddiiiiiiiiidd", $datos['fecha'], $datos['sucursal'], $datos['responsable'],
                       $datos['caja_inicial'], $datos['cierre_z'], $datos['gastos'],
                       $datos['tarjetas'], $datos['mercado_pago'], $datos['caja_inicial_proximo_dia'],
                       $datos['venta_efectivo'], $datos['arqueo_10'], $datos['arqueo_20'],
                       $datos['arqueo_50'], $datos['arqueo_100'], $datos['arqueo_200'],
                       $datos['arqueo_500'], $datos['arqueo_1000'], $datos['arqueo_2000'],
                       $datos['arqueo_10000'], $datos['total_efectivo_caja'], $datos['diferencia_efectivo']);
    
    if ($stmt->execute()) {
        return "Nuevo registro insertado correctamente";
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Ejemplo de uso de la función insertarCierreCaja
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $datosCierre = [
        'fecha' => $_POST['fecha'],
        'sucursal' => $_POST['sucursal'],
        'responsable' => $_POST['responsable'],
        'caja_inicial' => $_POST['vn_ci'],
        'cierre_z' => $_POST['vn_cz'],
        'gastos' => $_POST['vn_ga'],
        'tarjetas' => $_POST['vn_ta'],
        'mercado_pago' => $_POST['vn_mp'],
        'caja_inicial_proximo_dia' => $_POST['vn_cpd'],
        'venta_efectivo' => $_POST['venta_ef_input'],
        'arqueo_10' => $_POST['pe10'],
        'arqueo_20' => $_POST['pe20'],
        'arqueo_50' => $_POST['pe50'],
        'arqueo_100' => $_POST['pe100'],
        'arqueo_200' => $_POST['pe200'],
        'arqueo_500' => $_POST['pe500'],
        'arqueo_1000' => $_POST['pe1000'],
        'arqueo_2000' => $_POST['pe2000'],
        'arqueo_10000' => $_POST['pe10000'],
        'total_efectivo_caja' => $_POST['total_arqueo_input'],
        'diferencia_efectivo' => $_POST['dif_caja_input']
    ];
    
    echo insertarCierreCaja($conn, $datosCierre);
}

// Función para obtener todos los cierres de caja
function obtenerCierresCaja($conn) {
    $sql = "SELECT * FROM cierre_caja ORDER BY fecha DESC";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $cierres = [];
        while($row = $result->fetch_assoc()) {
            $cierres[] = $row;
        }
        return $cierres;
    } else {
        return [];
    }
}

// Ejemplo de uso de la función obtenerCierresCaja
$cierresCaja = obtenerCierresCaja($conn);
foreach ($cierresCaja as $cierre) {
    echo "Fecha: " . $cierre['fecha'] . " - Sucursal: " . $cierre['sucursal'] . " - Total: " . $cierre['total_efectivo_caja'] . "<br>";
}

// Cerrar conexión
$conn->close();
?>
