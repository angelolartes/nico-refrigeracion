document.getElementById('turnoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const equipo = document.getElementById('equipo').value;
    const fecha = document.getElementById('fecha').value;
    const horario = document.getElementById('horario').value;
    const direccion = document.getElementById('direccion').value;
    const problema = document.getElementById('problema').value;

    const mensaje = `Hola Nico, quiero solicitar un turno:%0A%0A*Equipo:* ${equipo}%0A*Fecha:* ${fecha}%0A*Horario:* ${horario}%0A*Dirección:* ${direccion}%0A*Problema:* ${problema}`;
    
    window.location.href = `https://wa.me/5491172446640?text=${mensaje}`;
});