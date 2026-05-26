document.addEventListener("DOMContentLoaded", function() {
    
    // === 1. MENÚ DE NAVEGACIÓN ===
    const btnAbrir = document.getElementById('abrir-menu');
    const btnCerrar = document.getElementById('cerrar-menu');
    const panelMenu = document.getElementById('panel-menu');
    const overlay = document.getElementById('overlay');
    const enlacesNav = document.querySelectorAll('.enlaces-navegacion a');

    if(btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            panelMenu.classList.add('activo');
            overlay.classList.add('activo');
            document.body.style.overflow = 'hidden';
        });
    }

    function cerrarMenu() {
        if(panelMenu) panelMenu.classList.remove('activo');
        if(overlay) overlay.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }

    if(btnCerrar) btnCerrar.addEventListener('click', cerrarMenu);
    if(overlay) overlay.addEventListener('click', cerrarMenu);
    enlacesNav.forEach(enlace => enlace.addEventListener('click', cerrarMenu));


    // === 2. GALERÍA DE FOTOS ===
    // Deshabilitada: Las fotos no se abren al tocar


    // === 3. CÁTEDRAS (MODAL VISTOSO) ===
    const tarjetasVistosas = document.querySelectorAll('.tarjeta-vistosa');
    const modalVistoso = document.getElementById('modal-info-vistosa');
    const botonCerrarVistoso = document.querySelector('.cerrar-modal-vistosa');

    tarjetasVistosas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            // Extraer datos de los data-attributes
            const titulo = this.getAttribute('data-titulo');
            const desc = this.getAttribute('data-descripcion');
            const contacto = this.getAttribute('data-contacto');
            
            // Intentar extraer el icono (si existe)
            const contenedorIcono = this.querySelector('.icono-contenedor');
            const iconoHtml = contenedorIcono ? contenedorIcono.innerHTML : '<i class="fas fa-info-circle"></i>';
            
            // Rellenar los campos del modal
            document.getElementById('modal-titulo-vistosa').innerText = titulo;
            document.getElementById('modal-descripcion-vistosa').innerText = desc;
            document.getElementById('modal-contacto-vistosa').innerText = contacto;
            document.getElementById('modal-icono-cabecera').innerHTML = iconoHtml;

            // Mostrar el modal
            modalVistoso.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Función cerrar Modal Vistoso
    function cerrarVistoso() {
        modalVistoso.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if(botonCerrarVistoso) botonCerrarVistoso.addEventListener('click', cerrarVistoso);

    // Cerrar al hacer clic fuera de la caja blanca
    window.addEventListener('click', (e) => {
        if (e.target == modalVistoso) cerrarVistoso();
    });

    // === 4. FOTO ALEATORIA PARA PUBLICACIÓN MATANZAS ===
    function generarFotoAleatoria() {
        const numero = Math.floor(Math.random() * 10000);
        return `https://picsum.photos/500/300?random=${numero}`;
    }

    const fotoTarjeta = document.getElementById('foto-tarjeta-matanzas');
    if(fotoTarjeta && !fotoTarjeta.getAttribute('src')) {
        fotoTarjeta.src = generarFotoAleatoria();
    }

    // === 5. FOTO ALEATORIA PARA PUBLICACIÓN DÉCIMA ===
    const fotoTarjetaDecima = document.getElementById('foto-tarjeta-decima');
    if(fotoTarjetaDecima && !fotoTarjetaDecima.getAttribute('src')) {
        fotoTarjetaDecima.src = generarFotoAleatoria();
    }

    // === 6. FOTO ALEATORIA PARA PUBLICACIÓN LECTURA Y ESCRITURA ===
    const fotoTarjetaLectura = document.getElementById('foto-tarjeta-lectura');
    if(fotoTarjetaLectura && !fotoTarjetaLectura.getAttribute('src')) {
        fotoTarjetaLectura.src = generarFotoAleatoria();
    }

});

