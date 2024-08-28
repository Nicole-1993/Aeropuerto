$(document).ready(function() {
    const vuelos1 = [
        { vuelo: 'AA101', destino: 'Nueva York', hora: '08:00', estado: 'Abordando', puerta: 'A1' },
        { vuelo: 'BA202', destino: 'Londres', hora: '09:30', estado: 'En Espera', puerta: 'B2' },
        { vuelo: 'AF303', destino: 'París', hora: '10:15', estado: 'Cancelado', puerta: 'C3' },
        { vuelo: 'IB404', destino: 'Madrid', hora: '11:00', estado: 'A Tiempo', puerta: 'D4' },
        { vuelo: 'LH505', destino: 'Berlín', hora: '12:30', estado: 'Retrasado', puerta: 'E5' },
        { vuelo: 'DL606', destino: 'Atlanta', hora: '13:00', estado: 'Abordado', puerta: 'F6' },
        { vuelo: 'UA707', destino: 'Chicago', hora: '14:00', estado: 'En Espera', puerta: 'G7' },
        { vuelo: 'KL808', destino: 'Ámsterdam', hora: '15:15', estado: 'Cancelado', puerta: 'H8' },
        { vuelo: 'QF909', destino: 'Sídney', hora: '16:45', estado: 'A Tiempo', puerta: 'I9' }
    ];

    const vuelos2 = [
        { vuelo: 'AA101', destino: 'Nueva Belín', hora: '10:00', estado: 'Cancelado', puerta: 'A1' },
        { vuelo: 'BA202', destino: 'Sídney', hora: '20:30', estado: 'Abordado', puerta: 'B2' },
        { vuelo: 'AF303', destino: 'Argentina', hora: '10:15', estado: 'Retrasado', puerta: 'C3' },
        { vuelo: 'IB404', destino: 'Chile', hora: '11:00', estado: 'Cancelado', puerta: 'D4' },
        { vuelo: 'LH505', destino: 'México', hora: '12:30', estado: 'Retrasado', puerta: 'E5' },
        { vuelo: 'DL606', destino: 'California', hora: '16:00', estado: 'Abordado', puerta: 'F6' },
        { vuelo: 'UA707', destino: 'Perú', hora: '15:50', estado: 'Retrasado', puerta: 'G7' },
        { vuelo: 'KL808', destino: 'Venezuela', hora: '12:25', estado: 'A Tiempo', puerta: 'H8' },
        { vuelo: 'QF909', destino: 'Colombia', hora: '08:20', estado: 'En Espera', puerta: 'I9' }
    ];

    const vuelos3 = [
        { vuelo: 'AA101', destino: 'Alemania', hora: '10:00', estado: 'Cancelado', puerta: 'A1' },
        { vuelo: 'BA202', destino: 'China', hora: '10:30', estado: 'Abordado', puerta: 'B2' },
        { vuelo: 'AF303', destino: 'Italia', hora: '10:15', estado: 'Retrasado', puerta: 'C3' },
        { vuelo: 'IB404', destino: 'Portugal', hora: '11:30', estado: 'Cancelado', puerta: 'D4' },
        { vuelo: 'LH505', destino: 'Canadá', hora: '11:30', estado: 'Retrasado', puerta: 'E5' },
        { vuelo: 'DL606', destino: 'Filipinas', hora: '12:00', estado: 'Abordado', puerta: 'F6' },
        { vuelo: 'UA707', destino: 'Honduras', hora: '12:50', estado: 'Retrasado', puerta: 'G7' },
        { vuelo: 'KL808', destino: 'Jamaica', hora: '12:25', estado: 'A Tiempo', puerta: 'H8' },
        { vuelo: 'QF909', destino: 'Costa Rica', hora: '13:20', estado: 'En Espera', puerta: 'I9' }
    ];

    const todosLosVuelos = [vuelos1, vuelos2, vuelos3];
    let index = 0;

    function mostrarVuelos(vuelos) {
        const $tablaVuelos = $('#tabla-vuelos tbody');
        $tablaVuelos.empty(); // Limpiar la tabla

        vuelos.forEach(function(vuelo) {
            const estadoClass = estadoEstilo(vuelo.estado);
            const fila = `
                <tr>
                    <td>${vuelo.vuelo}</td>
                    <td>${vuelo.destino}</td>
                    <td>${vuelo.hora}</td>
                    <td class="${estadoClass}">${vuelo.estado}</td>
                    <td>${vuelo.puerta}</td>
                </tr>
            `;
            $tablaVuelos.append(fila);
        });
    }

    function estadoEstilo(estado) {
        switch (estado.toLowerCase()) {
            case 'a tiempo':
                return 'estado-a-tiempo';
            case 'cancelado':
                return 'estado-cancelado';
            case 'en espera':
                return 'estado-en-espera';
            case 'abordado':
                return 'estado-abordado';
                case 'retrasado':
                    return 'estado-retrasado';
            default:
                return '';
        }
    }

    function cambiarListado() {
        mostrarVuelos(todosLosVuelos[index]);
        index = (index + 1) % todosLosVuelos.length;
    }

    cambiarListado(); // Mostrar el primer listado inmediatamente
    setInterval(cambiarListado, 5000); // Cambiar el listado cada 5 segundos
});
