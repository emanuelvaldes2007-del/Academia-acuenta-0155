let colaboradorActual = localStorage.getItem('colaborador_actual') || '';
let modulosCompletados = JSON.parse(localStorage.getItem('modulos_completados')) || [];

document.addEventListener('DOMContentLoaded', () => {
    if (colaboradorActual) {
        iniciarSesionVista();
    }
});

function registrarUsuario(e) {
    e.preventDefault();
    const nombreInput = document.getElementById('nombre-colaborador').value.trim();
    if (nombreInput) {
        colaboradorActual = nombreInput;
        localStorage.setItem('colaborador_actual', colaboradorActual);
        iniciarSesionVista();
    }
}

function iniciarSesionVista() {
    document.getElementById('vista-registro').style.display = 'none';
    document.getElementById('vista-menu').style.display = 'block';
    document.getElementById('vista-modulo-pagina').style.display = 'none';
    const displayNombre = document.getElementById('nombre-usuario-display');
    if (displayNombre) {
        displayNombre.textContent = colaboradorActual;
    }
    actualizarProgresoGlobal();
}

function cambiarUsuario() {
    colaboradorActual = '';
    localStorage.removeItem('colaborador_actual');
    document.getElementById('vista-menu').style.display = 'none';
    document.getElementById('vista-modulo-pagina').style.display = 'none';
    document.getElementById('vista-registro').style.display = 'flex';
}

function actualizarProgresoGlobal() {
    const total = 11; // Actualizado a 11 módulos
    const completados = modulosCompletados.length;
    const porcentaje = Math.round((completados / total) * 100);

    const txtProgreso = document.getElementById('texto-progreso');
    if (txtProgreso) txtProgreso.textContent = `${completados} de ${total} Módulos completados (${porcentaje}%)`;

    const barra = document.getElementById('barra-progreso');
    if (barra) barra.style.width = `${porcentaje}%`;

    for (let i = 1; i <= total; i++) {
        const badge = document.getElementById(`badge-${i}`);
        if (badge) {
            if (modulosCompletados.includes(i)) {
                badge.textContent = 'Completado';
                badge.className = 'badge-estado completado';
            } else {
                badge.textContent = 'Pendiente';
                badge.className = 'badge-estado pendiente';
            }
        }
    }
}

const modulosData = {
    1: {
        titulo: "Módulo 1: Cultura, Valores y Reglas Walmart en SuperBodega aCuenta",
        etapas: [
            {
                subtitulo: "Etapa 1: Pilares Institucionales y Principios Walmart",
                contenido: `
                    <p><strong>Nuestra Propuesta de Valor:</strong> En SuperBodega aCuenta ofrecemos los precios más bajos para las familias chilenas, manteniendo una operación eficiente, simple y segura bajo el respaldo global de Walmart.</p><br>
                    
                    <p><strong>Los 4 Valores Fundamentales:</strong></p>
                    <ul>
                        <li><strong>Servicio al Cliente:</strong> Poner siempre al cliente en el centro de todas nuestras decisiones.</li>
                        <li><strong>Respeto por el Individuo:</strong> Escuchar, valorar la diversidad y promover un trato digno e inclusivo.</li>
                        <li><strong>Luchar por la Excelencia:</strong> Innovar, mantener estándares de calidad y superar nuestras metas operacionales.</li>
                        <li><strong>Actuar con Integridad:</strong> Ser honestos, transparentes y éticos en cada una de nuestras acciones.</li>
                    </ul>

                    <!-- IMAGEN ACOMPAÑANTE VALORES -->
                    <div style="text-align: center; margin-top: 1.5rem;">
                        <img src="valores.png" alt="Valores Walmart SuperBodega aCuenta" style="max-width: 320px; width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">
                    </div>
                `
            },
            {
                subtitulo: "Etapa 2: Reglas Cardinales de Servicio y Convivencia",
                contenido: `<p>En Walmart y SuperBodega aCuenta guiamos nuestro actuar diario bajo las reglas cardinales de servicio al cliente y convivencia:</p><br><ul><li><strong>La Regla de Oro:</strong> <ol style="margin-left: 1.2rem; margin-top: 0.3rem;"><li>El cliente siempre tiene la razón.</li><li>Y, si no la tiene, remítase al punto anterior.</li></ol></li><br><li><strong>La Regla de los 3 Metros:</strong> <em>"Si un cliente se encuentra a menos de 3 metros de distancia, debes mirarlo a los ojos, sonreírle y saludarlo amablemente ofreciéndole tu ayuda."</em></li><br><li><strong>La Regla de Platino:</strong> <em>"Trata a los demás como ELLOS quieren ser tratados."</em></li><br><li><strong>La Regla de la Puesta del Sol (Sundown Rule):</strong> <em>"Responder a las solicitudes, requerimientos o problemas el mismo día en que son recibidos."</em></li></ul>`
            },
            {
                subtitulo: "Etapa 3: Seguridad Operacional y Resguardo de Vías",
                contenido: `<p><strong>Norma Crítica de Prevención de Riesgos:</strong></p><div class="alerta-seguridad" style="background: #fce8e6; border-left: 4px solid #d00018; padding: 1rem; margin: 1rem 0; border-radius: 4px;"><strong>Pasillos Despejados:</strong> Jamás debes dejar traspaletas, pallets vacíos o cajas acumuladas bloqueando las vías de tránsito.</div><br><p><strong>Uso de Elementos de Protección Personal (EPP):</strong> Utiliza siempre tus zapatos de seguridad.</p>`
            }
        ],
        preguntas: [
            {
                enunciado: "Un cliente se acerca molesto consultando si hay un producto en bodega antes de que termine tu turno. Aplicando la 'Regla de la Puesta del Sol', ¿qué debes hacer?",
                opciones: ["Decirle al cliente que vuelva mañana porque tu turno está por terminar.", "Gestionar la respuesta o solución el mismo día antes de irte, sin dejar el requerimiento pendiente.", "Ignorar al cliente y pedirle a un compañero que se haga cargo.", "Anotar la consulta en un papel para el turno siguiente."],
                correcta: 1
            },
            {
                enunciado: "¿En qué consiste la 'Regla de los 3 Metros' en la atención al cliente?",
                opciones: ["Mantener una distancia de 3 metros de los clientes en todo momento.", "Si un cliente está a menos de 3 metros, mirarlo a los ojos, sonreír, saludar y ofrecerle ayuda.", "Solo aplica para atender a clientes que lleven más de 3 carros de compra.", "Delimitar una zona de seguridad alrededor de las máquinas apiladoras."],
                correcta: 1
            },
            {
                enunciado: "Estás reponiendo abarrotes y necesitas ir a bodega por más mercadería. ¿Qué haces con la traspaleta en el pasillo?",
                opciones: ["Dejarla cargada en el pasillo.", "Retirarla y despejar el pasillo antes de ir a bodega para evitar accidentes.", "Moverla al pasillo vecino.", "Pedirle a un cliente que la cuide."],
                correcta: 1
            },
            {
                enunciado: "¿Qué acción representa mejor el valor de 'Actuar con Integridad'?",
                opciones: ["Ignorar un producto dañado.", "Reportar de forma transparente y honesta un error en el conteo de mercadería o un accidente.", "Registrar la asistencia de un compañero tarde.", "Guardar mercadería reservada."],
                correcta: 1
            },
            {
                enunciado: "¿Por qué es obligatorio el uso de Zapatos de Seguridad?",
                opciones: ["Es un requisito estético.", "Para prevenir accidentes laborales como aplastamientos de pies o cortes.", "Solo porque lo exige el prevencionista.", "Para no ensuciar la ropa."],
                correcta: 1
            }
        ]
    },
    2: {
        titulo: "Módulo 2: Nivel de Servicio en Góndola (NSG) y Reposición",
        etapas: [
            {
                subtitulo: "Etapa 1: Indicador NSG y Quiebres Visuales",
                contenido: `<p><strong>¿Qué es el Nivel de Servicio en Góndola (NSG)?</strong></p><p>Es el indicador operacional que mide si los productos con inventario disponible en sistema se encuentran efectivamente expuestos a la venta en la góndola.</p><div class="alerta-meta" style="background: #e6f4ea; border-left: 4px solid #137333; padding: 1rem; margin: 1rem 0; border-radius: 4px;"><strong>🎯 Meta Diaria de Tienda:</strong> Mantener el NSG <strong>sobre el 96,5%</strong>.</div><br><p>Un <strong>quiebre visual</strong> ocurre cuando hay stock en la bodega de la tienda, pero la repisa está vacía. Esto perjudica directamente la experiencia del cliente y las ventas del local.</p>`
            },
            {
                subtitulo: "Etapa 2: Aplicación del Criterio FIFO (Rotación de Inventario)",
                contenido: `<p><strong>Metodología FIFO (First In, First Out / Primeras Entradas, Primeras Salidas):</strong></p><p>Al realizar la reposición nocturna o durante la jornada, se debe ordenar el producto de acuerdo a su fecha de vencimiento:</p><ul><li><strong>Adelante (Frenteo):</strong> Los productos con vencimiento más próximo.</li><li><strong>Atrás:</strong> Los productos de recién llegada o con fecha de caducidad más lejana.</li></ul><p>Esto evita que los productos expiren en la repisa y se generen pérdidas innecesarias por merma de vencimiento.</p>`
            },
            {
                subtitulo: "Etapa 3: Paso a Paso Operativo en Sala con Zebra y Me@Walmart",
                contenido: `
                    <p>Sigue este flujo estándar de trabajo para garantizar el cumplimiento de la meta del Nivel de Servicio en Góndola:</p>
                    <div class="flujo-pasos">
                        <div class="tarjeta-paso">
                            <div class="numero-paso">1</div>
                            <div class="contenido-paso"><h3>Impresión del Reporte de NSG</h3><p>Imprime el reporte correspondiente al turno actual según la sección (ACP, PPS o GM).</p></div>
                        </div>
                        <div class="tarjeta-paso">
                            <div class="numero-paso">2</div>
                            <div class="contenido-paso"><h3>Búsqueda de Productos en Sala</h3><p>Dirígete a los pasillos con el reporte impreso para localizar físicamente cada producto indicado.</p></div>
                        </div>
                        <div class="tarjeta-paso">
                            <div class="numero-paso">3</div>
                            <div class="contenido-paso"><h3>Verificar Reposición y Flejes de Precio</h3><p>Comprueba que el producto esté bien repuesto bajo criterio FIFO y que el fleje de precio esté actualizado.</p></div>
                        </div>
                        <div class="tarjeta-paso">
                            <div class="numero-paso">4</div>
                            <div class="contenido-paso"><h3>Ingresar a Me@Walmart en la Pistola Zebra</h3><p>Inicia sesión en la aplicación corporativa Me@Walmart utilizando tu usuario oficial.</p></div>
                            <div class="contenedor-img-paso"><img src="image_79a0c8.png" alt="Me@Walmart"></div>
                        </div>
                        <div class="tarjeta-paso">
                            <div class="numero-paso">5</div>
                            <div class="contenido-paso"><h3>Disponibilidad > Mi Repo</h3><p>Abre el menú, ingresa a la sección de Disponibilidad y selecciona la opción Mi Repo.</p></div>
                            <div class="contenedor-img-paso"><img src="IMG_1313.png" alt="Mi Repo"></div>
                        </div>
                        <div class="tarjeta-paso">
                            <div class="numero-paso">6</div>
                            <div class="contenido-paso"><h3>Pasillos, Escaneo y Registro</h3><p>Selecciona Pasillo, escanea el código de barras con el scanner e ingresa la existencia disponible.</p></div>
                            <div class="contenedor-img-paso grupo-imagenes"><img src="IMG_1314.jpg" alt="Pasillos"><img src="IMG_1315.png" alt="Escaneo"></div>
                        </div>
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "Al reponer lácteos notas que en la repisa quedan 3 yogures con vencimiento en 5 días y la caja nueva vence en 20 días. ¿Cómo debes reponer?",
                opciones: ["Poner los yogures nuevos adelante para que la góndola se vea llena rápido.", "Mover los 3 yogures antiguos hacia adelante y ubicar los yogures nuevos en la parte posterior.", "Dejar los yogures viejos al fondo y mezclar los nuevos adelante.", "Retirar los 3 yogures viejos y botarlos a la basura."],
                correcta: 1
            },
            {
                enunciado: "Si el reporte de NSG arroja un 92% en la mañana, ¿qué significa esta cifra para la sala?",
                opciones: ["Que la tienda sobrepasó la meta diaria de ventas con éxito.", "Que estamos bajo la meta del 96,5% debido a productos con stock en bodega que no están repuestos en góndola.", "Que el 92% de las cajas registradoras están funcionando correctamente.", "Que se debe cerrar la bodega hasta el turno de la tarde."],
                correcta: 1
            },
            {
                enunciado: "¿Qué define concretamente a un 'quiebre visual' en la sala de ventas?",
                opciones: ["Cuando el producto no existe en el centro de distribución nacional.", "Cuando hay stock disponible en el sistema/bodega pero la góndola se encuentra vacía.", "Cuando el precio impreso en la etiqueta de la góndola está roto o ilegible.", "Cuando la góndola se rompe físicamente por exceso de peso."],
                correcta: 1
            },
            {
                enunciado: "¿Cuál es la meta diaria que debe mantener la tienda respecto al indicador Nivel de Servicio en Góndola (NSG)?",
                opciones: ["Sobre el 80,0%", "Sobre el 90,0%", "Sobre el 96,5%", "100% de manera estricta sin excepción"],
                correcta: 2
            },
            {
                enunciado: "¿Qué consecuencia directa trae para el negocio no aplicar correctamente la metodología FIFO en productos perecibles?",
                opciones: ["Aumento de la merma por productos vencidos en la repisa y pérdidas para la tienda.", "Sanciones inmediatas por parte de los clientes en las cajas.", "Un incremento desmedido en las ventas del local.", "Que el sistema bloquee el ingreso de nuevas mercaderías a bodega."],
                correcta: 0
            }
        ]
    },
    3: {
        titulo: "Módulo 3: Prevención de Mermas y Control de Inventario",
        etapas: [
            {
                subtitulo: "Etapa 1: Orígenes y Tipos de Mermas",
                contenido: `<p>La merma es la pérdida no planificada de inventario. Afecta los resultados económicos de SuperBodega aCuenta y el inventario disponible en sistema.</p><br><p><strong>Causas principales de merma operativa:</strong></p><ul><li>Mala manipulación de traspaletas (cajas caídas o aplastadas).</li><li>Falta de rotación FIFO (vencimiento de productos).</li><li>Empaques dañados por fraccionamiento o aperturas no autorizadas.</li></ul>`
            },
            {
                subtitulo: "Etapa 2: Procedimiento de Retiro y Registro",
                contenido: `<p><strong>Protocolo ante mercadería dañada o destruida:</strong></p><ol><li>Retirar inmediatamente el producto de la vista del cliente.</li><li>Llevarlo a la <strong>Zona de Merma Oportuna / Bodega de Ajustes</strong>.</li><li>Escanear y registrar el producto en el terminal para ajustar el stock del sistema.</li></ol><div class="alerta-seguridad" style="background: #fce8e6; border-left: 4px solid #d00018; padding: 1rem; margin: 1rem 0; border-radius: 4px;"><strong>Importante:</strong> Nunca debes desechar mercadería a la basura sin antes haber realizado el registro en sistema con la autorización del encargado.</div>`
            }
        ],
        preguntas: [
            {
                enunciado: "Durante la reposición de aceites, se cae una botella y se rompe en el pasillo. ¿Cuál es la secuencia de acción correcta?",
                opciones: ["Limpiar el derrame, llevar la botella rota a la zona de merma para su registro y avisar al encargado.", "Secar el piso con cartón y botar la botella rota directamente en el contenedor exterior.", "Dejar la botella rota en la repisa de abajo y continuar reponiendo.", "Ignorar el derrame y pedirle a otro compañero que se haga cargo."],
                correcta: 0
            },
            {
                enunciado: "¿Por qué es obligatorio registrar en sistema la mercadería dañada antes de procesarla o desecharla?",
                opciones: ["Para que el sistema descuente la unidad del inventario real y solicite reabastecimiento.", "Para cobrarle el valor del producto al repartidor de la central.", "No es obligatorio, solo se hace si el encargado tiene tiempo.", "Para regalar el producto dañado a los clientes."],
                correcta: 0
            },
            {
                enunciado: "¿Cuál de las siguientes situaciones representa una causa directa de merma operativa por mala manipulación?",
                opciones: ["Revisar las fechas de vencimiento de los yogures todos los días.", "Apostar cajas de cartón frágiles superando la altura máxima permitida y provocar su caída.", "Escanear correctamente los productos al momento de reponer.", "Frentear los productos en la góndola respetando el espacio asignado."],
                correcta: 1
            },
            {
                enunciado: "Encuentras un paquete de galletas abierto y derramado en la góndola. ¿Qué debes hacer inmediatamente?",
                opciones: ["Esconderlo detrás de las cajas buenas para que no se vea feo.", "Retirarlo de la vista del cliente y trasladarlo al área de merma para su debido registro.", "Regalarlo al primer cliente que pase por el pasillo.", "Dejarlo en el carro de Pick Up más cercano."],
                correcta: 1
            },
            {
                enunciado: "¿Qué riesgo existe si se bota mercadería destruida a la basura sin previo registro en el sistema?",
                opciones: ["Que el sistema siga pensando que el producto existe en tienda, provocando descuadres y quiebres de stock.", "Que el camión de la basura se niegue a llevarse los residuos.", "Que el indicador NSG aumente automáticamente al 100%.", "No genera ningún riesgo ni impacto operacional."],
                correcta: 0
            }
        ]
    },
    4: {
        titulo: "Módulo 4: Operación de Cajas y Experiencia de Compra",
        etapas: [
            {
                subtitulo: "Etapa 1: Estándares de Atención y Escaneo Preciso",
                contenido: `<p>La línea de cajas es el último punto de contacto de nuestros clientes. Un cobro ágil y amable garantiza una experiencia positiva.</p><br><ul><li><strong>Saludo Obligatorio:</strong> Dar siempre la bienvenida con amabilidad y educación.</li><li><strong>Marcación Precisa:</strong> Escanear cada artículo de manera individual. Nunca multiplicar manualmente salvo en artículos idénticos autorizados por sistema.</li><li><strong>Cuidado del Producto:</strong> Manipular los alimentos con precaución, separando artículos de limpieza/químicos de los alimentos frescos o perecibles.</li></ul><br><div class="alerta-seguridad" style="background: #fce8e6; border-left: 4px solid #d00018; padding: 1rem; margin: 1rem 0; border-radius: 4px;"><strong>Control de Carros:</strong> Verificar siempre el fondo de los carros de compra y artículos voluminosos (como sacos de alimento para mascotas o packs de bebidas) antes de cerrar la cuenta.</div>`
            },
            {
                subtitulo: "Etapa 2: Verificación de Billetes y Detección de Falsificaciones (Método M.I.T.)",
                contenido: `
                    <p>Para prevenir el ingreso de dinero falso a la caja, es recomendable aplicar siempre el <strong>Método M.I.T. (Mirar, Inclinar y Tocar)</strong> al recibir pagos en efectivo:</p><br>
                    
                    <ul>
                        <li><strong>M - MIRAR:</strong> Pon el billete contra la luz. Busca la marca de agua, el hilo de seguridad y el motivo complementario.</li>
                        <li><strong>I - INCLINAR:</strong> Mueve el billete suavemente frente a tus ojos para observar el cambio de color o la franja 3D.</li>
                        <li><strong>T - TOCAR:</strong> Pasa tus dedos por la superficie para sentir la textura áspera y el relieve.</li>
                    </ul>

                    <p style="margin-top: 1.5rem; font-weight: 600;">Referencia Visual de Verificación de Billetes:</p>
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
                        <img src="billete.png" alt="Verificación de Billete 1" style="max-width: 31%; height: auto; border-radius: 6px; border: 1px solid #ccc;">
                        <img src="billete2.png" alt="Verificación de Billete 2" style="max-width: 31%; height: auto; border-radius: 6px; border: 1px solid #ccc;">
                        <img src="billete3.png" alt="Verificación de Billete 3" style="max-width: 31%; height: auto; border-radius: 6px; border: 1px solid #ccc;">
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "Un cliente paga una compra con billetes de alta denominación. ¿Cómo debes aplicar el método M.I.T. para verificar que no sean falsos?",
                opciones: ["Mirar la marca de agua a luz, Inclinar para ver el cambio de color o franja 3D, y Tocar para sentir la textura áspera y el relieve.", "Mirar la fecha de emisión, Inclinar la billetera del cliente y Tocar con un lápiz detector.", "Pasar los billetes rápido bajo la luz de la caja sin tocarlos ni inclinar los bordes.", "Confiar en el cliente y guardarlos directamente en el cajón si se ven limpios."],
                correcta: 0
            },
            {
                enunciado: "Un cliente lleva 10 leches de frutilla y 10 leches de chocolate. ¿Cuál es el método de escaneo correcto?",
                opciones: ["Escanear una leche de frutilla y multiplicarla por 20 para avanzar rápido.", "Escanear las 10 leches de frutilla y luego escanear las 10 leches de chocolate de forma precisa.", "Ingresar el precio total manualmente sin pasar las leches por el scanner.", "Pedirle al cliente que cuente las leches en voz alta."],
                correcta: 1
            },
            {
                enunciado: "¿Por qué es fundamental revisar la parte inferior (parrilla baja) de los carros de compra antes de cobrar?",
                opciones: ["Para verificar si el carro está limpio para el siguiente cliente.", "Para asegurar que no queden productos voluminosos o sacos sin escanear y prevenir pérdidas.", "Para comprobar si el carro tiene fallas en las ruedas.", "Para regalar un descuento adicional si el carro viene lleno."],
                correcta: 1
            },
            {
                enunciado: "Al pasar por caja los productos del cliente en, ¿qué precaución principal debes tener?",
                opciones: ["Juntar productos de limpieza y detergentes junto con productos frescos y carnes.", "Separar strictly los productos químicos y de limpieza de los alimentos para evitar contaminación.", "Mezclar todo al finalizar el escaneo de productos.", "Dejar los productos frágiles al borde de la caja."],
                correcta: 1
            },
            {
                enunciado: "Dentro del método M.I.T. para la revisión de billetes, ¿qué elemento en específico se busca al aplicar el paso 'INCLINAR'?",
                opciones: ["La firma del presidente del Banco Central.", "El cambio de color en la tinta de variabilidad óptica o el movimiento del efecto en la franja 3D.", "La aspereza del papel en el número impreso.", "La marca de agua a contraluz."],
                correcta: 1
            }
        ]
    },
    5: {
        titulo: "Módulo 5: Pedidos Pick Up y Gestión Instaleap",
        etapas: [
            {
                subtitulo: "Etapa 1: Introducción y Propósito del Servicio Pick Up",
                contenido: `<div class="alerta-meta" style="font-size: 1.05rem; line-height: 1.5; color: #004085; background-color: #cce5ff; border-left: 4px solid #0066c0; padding: 1rem; border-radius: 4px;">"Los pedidos Pick Up son una labor en el día a día de nuestro local, ofrecemos la omnicanalidad a nuestros clientes para que la experiencia de ellos sea siempre mejor. Es importante realizar los pedidos con responsabilidad y compromiso para dar cumplimiento con los KPIs de nuestro local."</div><br><p>Como recolector de Pick Up, eres los ojos del cliente en la tienda. La velocidad, la exactitud en la búsqueda y el cumplimiento de los tiempos de entrega marcan la excelencia de nuestro servicio.</p>`
            },
            {
                subtitulo: "Etapa 2: Proceso de Armado y Protocolo de Quiebres",
                contenido: `<p><strong>Paso a Paso en Sala de Ventas:</strong></p><ol><li><strong>Búsqueda y Escaneo:</strong> Dirígete al pasillo indicado por la aplicación, busca el producto y escanea su código de barras.</li><li><strong>Producto no encontrado en góndola:</strong> Escanea la ubicación con tu <strong>pistola Zebra</strong> para verificar el stock del sistema en tienda y altillos.</li><li><strong>Autorización de Quiebre:</strong> Si el producto no aparece, da aviso al <strong>encargado de turno</strong> para su autorización y posterior llamada al cliente para ofrecer un sustituto.</li></ol>`
            },
            {
                subtitulo: "Etapa 3: Empaque, Almacenamiento y Control Tower (Instaleap)",
                contenido: `<p><strong>Paso a Paso al Finalizar la Recolección:</strong></p><ol><li><strong>Traslado a Sala Pick Up:</strong> Lleva el carro a la sala para el empaque correcto.</li><li><strong>Secos vs Fríos:</strong> Separar y almacenar de inmediato en sus respectivos coolers o estantes.</li><li><strong>Rotulación:</strong> Escribir claramente el <strong>nombre del cliente</strong> en cada bolsa.</li><li><strong>Cierre:</strong> Finalizar en el <strong>Control Tower de Instaleap</strong> e imprimir la lista para la revisión de guardias.</li></ol>`
            }
        ],
        preguntas: [
            {
                enunciado: "No encuentras un aceite en la góndola durante la recolección Pick Up. ¿Cuál es el orden correcto del procedimiento?",
                opciones: ["Llamar al cliente de inmediato y si no contesta cancelar todo el pedido.", "Revisar stock con pistola Zebra, avisar al encargado de turno, solicitar autorización de quiebre y llamar al cliente para ofrecer un sustituto.", "Remover el producto de la aplicación directamente sin avisarle a nadie.", "Reemplazar el aceite por una bebida sin consultar al cliente."],
                correcta: 1
            },
            {
                enunciado: "Al momento de empacar un pedido con productos secos, yogures (fríos) y helados (congelados), ¿cómo se deben almacenar?",
                opciones: ["Guardar todo en una misma bolsa grande y dejarla en la góndola de secos.", "Separar en bolsas, rotular con el nombre del cliente y poner secos en góndola, y fríos/congelados en sus respectivos coolers.", "Dejar las bolsas de helados sobre la mesa de la sala Pick Up hasta que llegue el cliente.", "Empacar solo los secos y dejar los fríos sin bolsa dentro del congelador."],
                correcta: 1
            },
            {
                enunciado: "¿Qué documento se debe obtener al finalizar el pedido en el Control Tower de Instaleap y cuál es su objetivo?",
                opciones: ["La boleta fiscal para entregársela al reposador de sala.", "Imprimir la lista de productos para la revisión de los guardias en la salida del local.", "Un comprobante de asistencia del colaborador.", "La etiqueta de precio de la góndola."],
                correcta: 1
            },
            {
                enunciado: "¿Por qué es tan importante rotular claramente el nombre del cliente en cada una de las bolsas armadas?",
                opciones: ["Para evitar confusiones o entregas cruzadas al momento en que el cliente o el repartidor retire la compra.", "Porque la ley de etiquetado lo exige.", "Solo para saber qué bolsas pertenecen a alimentos y cuáles a aseo.", "Para que el supervisor de Pick Up valide la firma del cliente."],
                correcta: 0
            },
            {
                enunciado: "Si durante la llamada por un quiebre el cliente rechaza la opción de producto sustituto ofrecida, ¿qué debes hacer?",
                opciones: ["Agregar el producto sustituto de todas formas.", "Remover el producto del pedido en la aplicación respetando la decisión del cliente.", "Cancelar la orden completa en Instaleap.", "Cobrar el producto aunque no se lo entregues."],
                correcta: 1
            }
        ]
    },
    6: {
        titulo: "Módulo 6: SMART (Gestión de Inventario y Envases)",
        etapas: [
            {
                subtitulo: "Etapa 1: Ajuste de Inventario en SMART (Paso a Paso)",
                contenido: `
                    <div class="alerta-meta" style="font-size: 1.05rem; line-height: 1.5; color: #004085; background-color: #cce5ff; border-left: 4px solid #0066c0; padding: 1rem; border-radius: 4px;">
                        "El ajuste de nuestro inventario es sumamente importante para nuestros clientes ya que un mal ajuste de un producto puede provocar que este mismo no siga llegando porque ya habrá stock en el sistema y también nos alertará sobre este en los NSG."
                    </div>
                    
                    <p style="margin-top: 1.2rem;">Sigue este flujo operativo en la terminal ZEBRA para realizar el ajuste de inventario de forma correcta:</p>

                    <div class="flujo-pasos">
                        <div class="tarjeta-paso">
                            <div class="numero-paso">1</div>
                            <div class="contenido-paso">
                                <h3>Acceso a Legado (Legacy)</h3>
                                <p>En la pantalla principal de la terminal ZEBRA, ingresar a la aplicación <strong>Legado</strong> e iniciar sesión con tu usuario y contraseña corporativa.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="IMG_1356.jpeg" alt="Legado">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">2</div>
                            <div class="contenido-paso">
                                <h3>Inventario Perpetuo</h3>
                                <p>En el menú de Terminal Portátil, seleccionar la opción <strong>Inventario Perpetuo</strong> y presionar <strong>ENTER</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="IMG_1357.jpg" alt="Inventario Perpetuo">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">3</div>
                            <div class="contenido-paso">
                                <h3>Selección de Múltiples Departamentos</h3>
                                <p>Como recomendación operacional, seleccionar la opción de ajustar en la sección de <strong>Múltiples Departamentos</strong> para poder procesar varios dptos. a la vez sin salir del menú.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="IMG_1360.jpg" alt="Ajuste Múltiple">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">4</div>
                            <div class="contenido-paso">
                                <h3>Escaneo de Producto y Cambio de Ubicación (F5)</h3>
                                <p>Escanear el código <strong>UPC o Item</strong> del producto a ajustar.</p>
                                <div style="background: #e2e8f0; padding: 0.6rem 0.8rem; border-radius: 6px; margin-top: 0.5rem; font-size: 0.9rem;">
                                    💡 <strong>Tip operacional:</strong> Al presionar la tecla <strong>F5</strong> cambiamos la ubicación del ajuste a <em>Depósito/Bodega</em>. Para volver a <em>Piso de Ventas</em>, presionamos nuevamente <strong>F5</strong>.
                                </div>
                            </div>
                            <div class="contenedor-img-paso grupo-imagenes">
                                <img src="IMG_1361.jpg" alt="Piso Ventas">
                                <img src="IMG_1362.jpg" alt="Depósito">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">5</div>
                            <div class="contenido-paso">
                                <h3>Cierre y Finalización de Ajuste (F10)</h3>
                                <p>Luego de ingresar la cantidad física a ajustar, presionar la tecla <strong>F10</strong> para finalizar. Se imprimirá un reporte físico del ajuste.</p>
                                <p style="margin-top: 0.4rem; color: #d00018; font-weight: 600;">⚠ Para dar por finalizado por completo el proceso, se debe ingresar nuevamente a la sección de ajuste de dptos. múltiples y presionar F10 otra vez.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                subtitulo: "Etapa 2: Devolución de Envases y Reclamo de Mercadería (Paso a Paso)",
                contenido: `
                    <p>Sigue esta secuencia en el sistema SMART para tramitar devoluciones de envases y reclamos a proveedores:</p>

                    <div class="flujo-pasos">
                        <div class="tarjeta-paso">
                            <div class="numero-paso">1</div>
                            <div class="contenido-paso">
                                <h3>Acceso al Menú Principal</h3>
                                <p>Ingresar al sistema SMART y dirigirse a la opción <strong>Terminal Portátil</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso"><img src="cap.png" alt="Terminal Portátil"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">2</div>
                            <div class="contenido-paso">
                                <h3>Procesos d'Depósito</h3>
                                <p>En el submenú de Terminal Portátil, seleccionar <strong>Procesos d'Depósito</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso"><img src="cap0.png" alt="Procesos Depósito"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">3</div>
                            <div class="contenido-paso">
                                <h3>Registra Mercadería</h3>
                                <p>Dentro de Procesos de Depósito, presionar sobre <strong>Registra Mercadería</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso"><img src="cap1.png" alt="Registra Mercadería"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">4</div>
                            <div class="contenido-paso">
                                <h3>Selección de División y Navegación a RCL</h3>
                                <p>Ingresar el número de División a devolver (Ejemplo: <strong>Div 28</strong> para envases de bebida). Luego presionar <strong>ENTER</strong> hasta posicionarse en la casilla <strong>RCL</strong> (Reclamo).</p>
                            </div>
                            <div class="contenedor-img-paso"><img src="cap3.png" alt="División 28 RCL"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">5</div>
                            <div class="contenido-paso">
                                <h3>Salida y Reclam Mcía</h3>
                                <p>Seleccionar la opción <strong>2 = Salida</strong> y posteriormente presionar el número <strong>4 = Rclam Mcía</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso grupo-imagenes">
                                <img src="cap3.png" alt="Salida">
                                <img src="cap5.png" alt="Rclam Mcía">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">6</div>
                            <div class="contenido-paso">
                                <h3>Tipo de Reclamo e Inicio con F9</h3>
                                <p>Seleccionar el número <strong>1 = Defectos</strong>. Cuando aparezca el número de reclamo generado, presionar la tecla <strong>F9</strong> para habilitar el ingreso de items.</p>
                            </div>
                            <div class="contenedor-img-paso grupo-imagenes">
                                <img src="cap4.png" alt="Defectos">
                                <img src="cap6.png" alt="F9 Ingr Item">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">7</div>
                            <div class="contenido-paso">
                                <h3>Pistoleo e Ingreso de Items</h3>
                                <p>Al pistolear el item, el sistema detectará automáticamente el proveedor. Confirmar presionando <strong>"Y"</strong> dos veces. Continuar ingresando items y al finalizar presionar la tecla <strong>F5</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso"><img src="cap7.png" alt="Confirmar Y"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">8</div>
                            <div class="contenido-paso">
                                <h3>Confirmación de Monto de Impuesto y Código Postal</h3>
                                <p>Al presionar <strong>F5</strong> aparecerá el mensaje <em>¿Monto Impues Correct?</em>; debemos presionar la letra <strong>"Y"</strong>. Luego, presionar el número <strong>"2"</strong> (OTRO) y luego <strong>"N"</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso grupo-imagenes">
                                <img src="cap8.png" alt="Monto Impuesto Correcto">
                                <img src="cap9.png" alt="Cod-Post OTRO">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">9</div>
                            <div class="contenido-paso">
                                <h3>Autorización y Cierre de Reclamo</h3>
                                <p>Presionar <strong>"F5"</strong> para finalizar. A continuación, presionar <strong>"Y"</strong> para autorizar el proveedor y nuevamente <strong>"Y"</strong> para confirmar memo, finalizando con <strong>F5</strong>.</p>
                            </div>
                            <div class="contenedor-img-paso grupo-imagenes">
                                <img src="cap10.png" alt="Confirmar F5">
                                <img src="cap11.png" alt="Autorización Proveedor Y Memo">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">10</div>
                            <div class="contenido-paso">
                                <h3>Ingreso Datos Transportista e Impresión</h3>
                                <p>Rellenar los datos del transportista (RUT, dígito verificador y patente del vehículo) y presionar <strong>ENTER</strong>. Aparecerá la pantalla de confirmación y comenzarán a imprimirse automáticamente las facturas de devolución.</p>
                            </div>
                            <div class="contenedor-img-paso"><img src="cap12.png" alt="Ruta Transportista"></div>
                        </div>
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "¿Qué tecla de la ZEBRA permite alternar la ubicación del ajuste entre 'Piso Ventas' y 'Depósito'?",
                opciones: ["F3", "F5", "F10", "Enter"],
                correcta: 1
            },
            {
                enunciado: "Para dar por finalizado por completo el ajuste y procesar el reporte impreso, ¿cuál es el paso final indispensable?",
                opciones: ["Reiniciar la pistola Zebra.", "Presionar F10, volver a ingresar a la sección de ajuste de dptos. múltiples y presionar nuevamente F10.", "Sacarle la batería a la terminal.", "Apagar la impresora de red."],
                correcta: 1
            },
            {
                enunciado: "Al tramitar una devolución de envases de bebida en el menú de Registra Mercadería de SMART, ¿en qué columna se debe posicionar para iniciar el reclamo?",
                opciones: ["P.O.", "FAC", "RCL", "MTR"],
                correcta: 2
            },
            {
                enunciado: "¿Qué tecla activa la pantalla para comenzar a ingresar/pistolear items en el registro de reclamo?",
                opciones: ["F3", "F5", "F9", "F10"],
                correcta: 2
            }
        ]
    },
    7: {
        titulo: "Módulo 7: Recepción de Proveedores",
        etapas: [
            {
                subtitulo: "Etapa 1: Paso a Paso Operativo de Recepción en Terminal",
                contenido: `
                    <p>Sigue esta secuencia estándar en la terminal ZEBRA para procesar la entrada de mercadería de proveedores directos:</p>

                    <div style="background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 10px; padding: 1.25rem; margin: 1rem 0 1.5rem 0;">
                        <h4 style="color: #3730a3; margin-bottom: 0.5rem;">📄 Referencia Visual: Lectura de Datos en Factura del Proveedor</h4>
                        <p style="font-size: 0.9rem; color: #4338ca; margin-bottom: 1rem;">Utiliza la siguiente guía gráfica para identificar rápidamente los datos clave en la factura del proveedor:</p>
                        
                        <div class="tarjeta-paso">
                            <div class="contenedor-img-paso">
                                <img src="155.jpg" alt="Factura de Proveedor Marcada">
                            </div>
                            <div style="flex: 1;">
                                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
                                    <li style="background: #ffffff; padding: 0.6rem 0.8rem; border-radius: 6px; border-left: 5px solid #0071ce;"><strong style="color: #0071ce;">🟦 Color Azul:</strong> Número de Factura.</li>
                                    <li style="background: #ffffff; padding: 0.6rem 0.8rem; border-radius: 6px; border-left: 5px solid #d00018;"><strong style="color: #d00018;">🔴 Color Rojo:</strong> Orden de Compra (OC / PO).</li>
                                    <li style="background: #ffffff; padding: 0.6rem 0.8rem; border-radius: 6px; border-left: 5px solid #7e22ce;"><strong style="color: #7e22ce;">🟣 Color Morado:</strong> Código Item y Descripción.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="flujo-pasos">
                        <div class="tarjeta-paso">
                            <div class="numero-paso">1</div>
                            <div class="contenido-paso"><h3>Ingreso a la App Recepción</h3><p>En la pantalla de la terminal ZEBRA, seleccionar e ingresar a la aplicación <strong>App Recepción</strong>.</p></div>
                            <div class="contenedor-img-paso"><img src="IMG_1372.jpeg" alt="App Recepción"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">2</div>
                            <div class="contenido-paso"><h3>Selección de Recepción Directa</h3><p>En el menú principal de la App Recibo, presionar la opción <strong>Comenzar Recepción </strong>.</p></div>
                            <div class="contenedor-img-paso"><img src="IMG_1373.jpeg" alt="Comenzar Recepción"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">3</div>
                            <div class="contenido-paso"><h3>Ingreso de Orden de Compra (OC) y Factura</h3><p>Ingresar el número de <strong>Orden de Compra (PO / OC)</strong> impreso en la factura y confirmarlo. Luego, ingresar el número de <strong>Factura</strong> correspondiente.</p></div>
                            <div class="contenedor-img-paso"><img src="IMG_1375.jpeg" alt="Ingreso OC"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">4</div>
                            <div class="contenido-paso"><h3>Escaneo (Pistoleo) y Finalización</h3><p>Comenzar el pistoleo de cada uno de los productos entregados por el proveedor. Cuando la cantidad coincida y todo esté verificado, presionar el botón <strong>Finalizar</strong> para cerrar la factura.</p></div>
                        </div>
                    </div>
                `
            },
            {
                subtitulo: "Etapa 2: Control de Calidad y Cadena de Frío",
                contenido: `<p><strong>Criterios de Aceptación y Rechazo:</strong></p><br><ul><li><strong>Productos Perecibles / Congelados:</strong> Controlar la temperatura del camión antes de descargar y verificar las fechas de vencimiento.</li></ul>`
            }
        ],
        preguntas: [
            {
                enunciado: "¿En qué opción del menú principal de la App Recibo se debe ingresar para procesar a un proveedor directo?",
                opciones: ["Recepción Centralizada", "Recepción Directa", "Recepción de Transferencia", "Ajuste SMART"],
                correcta: 1
            },
            {
                enunciado: "¿Qué dato indispensable impreso en la factura del proveedor se debe ingresar primero en la terminal ZEBRA?",
                opciones: ["El número de la patente del camión.", "El número de la Orden de Compra (OC / PO) y el número de Factura.", "El Rut del chofer.", "La hora de llegada."],
                correcta: 1
            },
            {
                enunciado: "Una vez finalizado el pistoleo completo de los productos de una factura, ¿cuál es la acción para cerrar el documento?",
                opciones: ["Reiniciar la terminal ZEBRA.", "Presionar el botón 'Finalizar' para dar por concluida la factura.", "Borrar el historial de compras.", "Firmar la factura sin cerrar en la aplicación."],
                correcta: 1
            }
        ]
    },
    8: {
        titulo: "Módulo 8: Modulares - Sala",
        etapas: [
            {
                subtitulo: "Etapa 1: Planogramas y Plano Modular",
                contenido: `<p><strong>¿Qué es un Planograma / Modular?</strong></p><p>Es la representación gráfica oficial que define la ubicación exacta, cantidad de caras (frentes) y repisas asignadas a cada producto dentro de las góndolas de la sala.</p><br><ul><li><strong>Respetar las Caras (Frenteo):</strong> No expandir productos ni tapar espacios vacíos con mercadería que no corresponde al plano.</li><li><strong>Flejes de Precio Ajustados:</strong> Cada producto debe tener su fleje de precio actualizado justo debajo de su primera cara a la izquierda.</li><li><strong>Alineación de Repisas:</strong> Mantener la altura marcada en el plano para optimizar el espacio vertical.</li></ul>`
            },
            {
                subtitulo: "Etapa 2: Paso a Paso para Buscar e Imprimir un Modular",
                contenido: `
                    <p>Sigue esta secuencia paso a paso en la terminal ZEBRA para visualizar e imprimir planogramas modulares:</p>

                    <div class="flujo-pasos">
                        <div class="tarjeta-paso">
                            <div class="numero-paso">1</div>
                            <div class="contenido-paso"><h3>Ingreso a la App Inventory Management</h3><p>En la pantalla principal de la terminal ZEBRA, seleccionar e ingresar a la aplicación <strong>Inventory Management</strong>.</p></div>
                            <div class="contenedor-img-paso"><img src="Mod.png" alt="Inventory Management"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">2</div>
                            <div class="contenido-paso"><h3>Desplegar Menú Principal</h3><p>Presionar las <strong>3 líneas</strong> (menú hamburguesa) ubicadas en la esquina superior izquierda de la pantalla.</p></div>
                            <div class="contenedor-img-paso"><img src="mod1.png" alt="Piso de Venta Menú"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">3</div>
                            <div class="contenido-paso"><h3>Acceso a Modulares/Ub. Sala</h3><p>En el panel lateral desplegado, seleccionar la opción <strong>Modulares/Ub. Sala</strong>.</p></div>
                            <div class="contenedor-img-paso"><img src="mod2.png" alt="Modulares Ub Sala"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">4</div>
                            <div class="contenido-paso"><h3>Seleccionar Modular</h3><p>Dentro de la <strong>App Modulares</strong>, presionar sobre la sección <strong>Modular</strong>.</p></div>
                            <div class="contenedor-img-paso"><img src="mod3.png" alt="App Modulares Modular"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">5</div>
                            <div class="contenido-paso">
                                <h3>Pestañas de Estado de Modulares</h3>
                                <p>En la parte superior encontraremos 3 opciones de estado importantes:</p>
                                <ul style="list-style: none; padding-left: 0; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.92rem;">
                                    <li><strong style="color: #137333;">🟢 Listo / Tarde:</strong> Modulares listos para implementar en sala. <em style="color: #555;">Nota: Si nos pasamos de la fecha límite, quedarán marcados como "Tarde".</em></li>
                                    <li><strong style="color: #0071ce;">🔵 Futuros:</strong> Modulares programados y próximos a cambiar dentro del local.</li>
                                    <li><strong style="color: #d97706;">🟠 Actual:</strong> Modulares vigentes que están en uso actualmente sin cambios activos.</li>
                                </ul>
                            </div>
                            <div class="contenedor-img-paso"><img src="mod4.png" alt="Pestañas de estado"></div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">6</div>
                            <div class="contenido-paso">
                                <h3>Vista Detallada e Impresión</h3>
                                <p>Al ingresar a un modular (por ejemplo, <em>2001 HAMBURGUESA</em>), se visualiza la estructura (como las 4 secciones/metros de extensión).</p>
                                <div style="background: #eef2ff; border-left: 4px solid #0071ce; padding: 0.75rem; border-radius: 6px; margin-top: 0.6rem; font-size: 0.9rem; color: #1e40af;">
                                    💡 <strong>SUGERENCIA DE TRABAJO:</strong> Para trabajarlo de manera más cómoda en sala, se recomienda presionar el botón <strong>Imprimir</strong> y elegir <strong>Seleccionar documentos</strong>.
                                </div>
                            </div>
                            <div class="contenedor-img-paso"><img src="mod5.png" alt="Vista Detallada Modular"></div>
                        </div>
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "Si un producto de tu pasillo se agota por completo, ¿por qué NO debes tapar ese espacio vacante corriendo el producto vecino?",
                opciones: ["Porque altera la capacidad oficial del plano (modular), oculta el quiebre visual y dificulta la reposición correcta.", "Porque los clientes prefieren ver las góndolas desordenadas.", "Porque el sistema cobra una multa automática.", "No hay problema, se puede tapar con cualquier producto."],
                correcta: 0
            },
            {
                enunciado: "¿Dónde debe ubicarse correctamente el fleje con el precio del producto según la norma del plano modular?",
                opciones: ["Al centro de la repisa superior.", "Justo debajo del producto, alineado con su primera cara a la izquierda.", "Pegado en la parte posterior del producto.", "Al inicio del pasillo en un cartel grande."],
                correcta: 1
            },
            {
                enunciado: "¿En qué aplicación de la terminal ZEBRA se realiza la consulta e impresión de modulares?",
                opciones: ["App Recepción", "Inventory Management", "Legado / SMART", "Instaleap"],
                correcta: 1
            },
            {
                enunciado: "Dentro de la App Modulares, ¿qué indica la pestaña con estado 'Futuro'?",
                opciones: ["Modulares que fueron eliminados el año pasado.", "Modulares programados y próximos a cambiar dentro de la sala.", "Modulares que ya están vencidos y mermados.", "Productos que no tienen precio registrado."],
                correcta: 1
            }
        ]
    },
    9: {
        titulo: "Módulo 9: Rebaja Norma de Retiro (RNR)",
        etapas: [
            {
                subtitulo: "Proceso Operativo Rebaja Norma de Retiro (RNR)",
                contenido: `
                    <p><strong>Introducción:</strong> La Rebaja Norma de Retiro (RNR) es un proceso operativo clave de Walmart Chile que busca disminuir el desperdicio de alimentos y productos en las tiendas, aplicando un descuento promocional a aquellos artículos próximos a su fecha de vencimiento que aún se encuentran en óptimas condiciones para el consumo.</p>
                    <br>
                    <div class="flujo-pasos">
                        <div class="tarjeta-paso">
                            <div class="numero-paso">1</div>
                            <div class="contenido-paso">
                                <h3>Paso 1: Identificación y Selección</h3>
                                <p>Recorre todas las góndolas correspondientes y revisa minuciosamente las fechas de vencimiento de los productos. Retira aquellos que se encuentren dentro del plazo norma de retiro y comprueba que sus envases estén en buenas condiciones de sellado e higiene.</p>
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">2</div>
                            <div class="contenido-paso">
                                <h3>Paso 2: Acceso a la ZEBRA</h3>
                                <p>En la pantalla principal con la lista de aplicaciones, localiza y abre la app <strong>Intl Claims</strong>, e inicia sesión con tus credenciales. Asegúrate de tener una impresora encendida y vinculada.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="claims.png" alt="Acceso a la app Intl Claims">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">3</div>
                            <div class="contenido-paso">
                                <h3>Paso 3: Pantalla de Escaneo</h3>
                                <p>Una vez dentro de la app de <strong>Claims</strong>, verás la pantalla de Inicio rápido con la leyenda <em>"Escanea ítems y genera etiquetas en un solo lugar"</em>. Toma el lector y presiona el gatillo físico o los botones amarillos laterales para escanear el código de barras original del producto.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="claims1.png" alt="Pantalla de Escaneo en Claims">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">4</div>
                            <div class="contenido-paso">
                                <h3>Paso 4: Selección del Proceso (RNR)</h3>
                                <p>Al escanear el artículo (ejemplo: Plateada Chilena del Depto 93 con un precio regular de $5.790), la pantalla mostrará los detalles completos de la consulta. En la barra inferior de opciones, presiona sobre el botón verde <strong>RNR</strong> para seleccionar este destino promocional.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="rnr.png" alt="Selección de opción RNR">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">5</div>
                            <div class="contenido-paso">
                                <h3>Paso 5: Confirmar Rebaja e Impresión</h3>
                                <p>El sistema te pedirá confirmación mediante el mensaje emergente <strong>"Confirmar RNR: Valida que el ítem escaneado esté habilitado para RNR en tu local"</strong>. Confirma las condiciones físicas del producto y presiona <strong>CONFIRMAR</strong>. La impresora portátil Bluetooth emitirá de inmediato la etiqueta amarilla autoadhesiva con el precio rebajado.</p>
                            </div>
                            <div class="contenedor-img-paso">
                                <img src="impresion.png" alt="Confirmar RNR e impresión de etiqueta">
                            </div>
                        </div>

                        <div class="tarjeta-paso">
                            <div class="numero-paso">6</div>
                            <div class="contenido-paso">
                                <h3>Paso 6: Rotulado de producto y exhibición</h3>
                                <p>Despega la etiqueta amarilla y pégala de forma visible en la cara frontal del producto <strong>cubriendo totalmente el código de barras original</strong> del fabricante para asegurar que las cajas registradoras cobren el valor rebajado sin problemas. Finalmente, exhibe los productos rotulados en la góndola.</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "¿Cuál es el propósito principal del procedimiento de Rebaja Norma de Retiro (RNR)?",
                opciones: ["Vender productos defectuosos.", "Ofrecer productos próximos a vencer con un precio rebajado para evitar su vencimiento y reducir la merma.", "Aumentar el precio de los productos de mayor demanda.", "Cambiar la marca de los productos en góndola."],
                correcta: 1
            },
            {
                enunciado: "Al colocar la etiqueta con el código de barras RNR en el producto rebajado, ¿dónde se debe pegar?",
                opciones: ["Al lado del código original sin taparlo.", "Sobre el código de barras original para asegurar que en caja se escanee el precio rebajado.", "En el fondo de la caja del embalaje.", "En la parte superior de la tapa únicamente."],
                correcta: 1
            }
        ]
    },
    10: {
        titulo: "Módulo 10: Mantenimiento Operacional de Sala",
        etapas: [
            {
                subtitulo: "Etapa 1: Uso de Horno Dely",
                contenido: `
                    <p><strong>Operación, Uso y Limpieza del Horno Dely:</strong></p>
                    <p>Revisa atentamente el siguiente video explicativo sobre el procedimiento correcto de uso y operación del horno Dely:</p>
                    
                    <!-- REPRODUCTOR DE VIDEO LOCAL CON SOPORTE MÓVIL Y PRELOAD -->
                    <div style="max-width: 100%; margin: 1rem 0; text-align: center;">
                        <video controls playsinline preload="metadata" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                            <source src="horno_dely.mp4" type="video/mp4">
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>

                    <ul style="margin-top: 1rem;">
                        <li><strong>Precalentamiento:</strong> Encender el equipo y seleccionar el programa predeterminado de cocción.</li>
                        <li><strong>Carga Segura:</strong> Utilizar guantes térmicos para alta temperatura al introducir o retirar las espadas/bandejas.</li>
                        <li><strong>Limpieza Diaria:</strong> Al finalizar la jornada, aplicar desengrasante grado alimenticio cuando el horno haya bajado de 40°C. Limpiar cristales y bandeja junta-grasa.</li>
                    </ul>
                `
            },
            {
                subtitulo: "Etapa 2: Uso y Arreglo de Balanza de Carnicería",
                contenido: `
                    <p><strong>Fallas Comunes y Soluciones Operacionales:</strong></p>
                    <ol style="margin-bottom: 1.5rem; line-height: 1.6;">
                        <li><strong>La balanza no imprime etiquetas:</strong> Verificar que el rollo esté colocado correctamente y el cabezal térmico esté limpio y cerrado.</li>
                        <li><strong>Desviación en el peso (Descalibración):</strong> Asegúrese de que no haya objetos tocando el plato y realice un reinicio de la balanza apagándola y encendiéndola de nuevo.</li>
                        <li><strong>Error de comunicación con el sistema:</strong> Revise que el cable de red ethernet esté bien conectado en la parte posterior del equipo.</li>
                    </ol>

                    <p><strong>Video Instructivo - Uso y Cambio de Rollo:</strong></p>
                    <!-- REPRODUCTOR DE VIDEO LOCAL CON SOPORTE MÓVIL Y PRELOAD -->
                    <div style="max-width: 100%; margin: 1rem 0; text-align: center;">
                        <video controls playsinline preload="metadata" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                            <source src="balanza_carniceria.mp4" type="video/mp4">
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>

                    <!-- ENLACE DE RESPALDO A YOUTUBE SHORT -->
                    <div style="margin-top: 1rem; text-align: center; background: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 8px;">
                        <p style="font-size: 0.9rem; color: #b91c1c; margin-bottom: 6px; font-weight: 600;">¿Problemas para reproducir el video en la web?</p>
                        <a href="https://www.youtube.com/shorts/S9glswmo30w" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; background: #ff0000; color: white; padding: 8px 16px; border-radius: 6px; font-size: 0.9rem; font-weight: bold; text-decoration: none; box-shadow: 0 2px 5px rgba(255,0,0,0.2);">
                            ▶ Ver video directamente en YouTube (Shorts)
                        </a>
                    </div>
                `
            },
            {
                subtitulo: "Etapa 3: Arreglar Balanza de Dely",
                contenido: `
                    <p>Aquí mostramos el video paso a paso para arreglar la balanza:</p>
                    
                    <!-- REPRODUCTOR DE VIDEO LOCAL CON SOPORTE MÓVIL Y PRELOAD -->
                    <div style="max-width: 100%; margin: 1rem 0; text-align: center;">
                        <video controls playsinline preload="metadata" style="width: 100%; max-width: 600px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                            <source src="balanza_dely1.mp4" type="video/mp4">
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    </div>

                    <!-- ENLACE DE RESPALDO A YOUTUBE SHORT -->
                    <div style="margin-top: 1rem; text-align: center; background: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 8px;">
                        <p style="font-size: 0.9rem; color: #b91c1c; margin-bottom: 6px; font-weight: 600;">¿Problemas para reproducir el video en la web?</p>
                        <a href="https://www.youtube.com/shorts/QttlYTjw7zU" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; background: #ff0000; color: white; padding: 8px 16px; border-radius: 6px; font-size: 0.9rem; font-weight: bold; text-decoration: none; box-shadow: 0 2px 5px rgba(255,0,0,0.2);">
                            ▶ Ver video directamente en YouTube (Shorts)
                        </a>
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "Si la balanza de Dely está imprimiendo las etiquetas con líneas blancas borrosas o ilegibles, ¿cuál es la primera acción de mantenimiento correctivo?",
                opciones: ["Golpear la balanza con la mano.", "Apagar la balanza y limpiar suavemente el cabezal térmico con alcohol isopropílico.", "Cambiar la balanza por una nueva inmediatamente.", "Remojar el cabezal con agua de la llave."],
                correcta: 1
            },
            {
                enunciado: "¿En qué momento se debe realizar la limpieza profunda con desengrasante del Horno Dely?",
                opciones: ["Con el horno encendido a máxima temperatura.", "Al finalizar el turno, cuando la temperatura interna haya bajado a un nivel seguro (menos de 40°C).", "Una vez al mes únicamente.", "Mientras los pollos se están cocinando."],
                correcta: 1
            },
            {
                enunciado: "Si la balanza de carnicería presenta un error de comunicación con el sistema, ¿qué se debe revisar primero?",
                opciones: ["Que el cable de red ethernet esté bien conectado en la posterior.", "Cambiar la pantalla táctil.", "Llamar al chofer del camión.", "Cambiar la balanza de mesa."],
                correcta: 0
            }
        ]
    },
    11: {
        titulo: "Módulo 11: Seguridad Alimentaria - Refresh y Descongelamiento",
        esEspecialSeguridad: true,
        headerInfo: {
            subtitulo: "SEGURIDAD ALIMENTARIA · REFORZAMIENTO Nº 06/2026",
            titulo: "Refresh y Descongelamiento",
            kpis: [
                { valor: "-18°C", label: "TEMP. CONGELACIÓN" },
                { valor: "2", label: "PROCESOS DISTINTOS" },
                { valor: "R-21", label: "FORMULARIO CLAVE" },
                { valor: "0", label: "VECES SE RECONGELAN" }
            ]
        },
        pestanas: [
            {
                id: "conceptos",
                nombre: "📋 Conceptos",
                contenido: `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">R</span>
                            Mapa de Responsabilidades
                        </h3>
                        <div style="text-align: center; margin: 1.5rem 0;">
                            <div style="background: #0284c7; color: white; padding: 10px 20px; border-radius: 8px; font-weight: bold; display: inline-block;">Gerente / Jefe de Tienda</div>
                            <div style="width: 2px; height: 15px; background: #94a3b8; margin: 0 auto;"></div>
                            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                                <div style="background: #f1f5f9; border: 1px solid #0284c7; padding: 8px 15px; border-radius: 6px; font-weight: 600; color: #334155;">Subgerente</div>
                                <div style="background: #f1f5f9; border: 1px solid #0284c7; padding: 8px 15px; border-radius: 6px; font-weight: 600; color: #334155;">Jefe de Área</div>
                                <div style="background: #f1f5f9; border: 1px solid #0284c7; padding: 8px 15px; border-radius: 6px; font-weight: 600; color: #334155;">Responsable Turno</div>
                            </div>
                        </div>
                        <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 1rem; border-radius: 4px; color: #1e293b; font-size: 0.92rem;">
                            Todos los niveles son responsables de garantizar el correcto proceso de descongelación para <strong>evitar riesgo de inocuidad</strong> en los productos.
                        </div>
                    </div>

                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">?</span>
                            Refresh vs Descongelamiento
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: #0c4a6e; color: white; border-radius: 8px; padding: 1.2rem;">
                                <div style="font-size: 0.8rem; text-transform: uppercase; opacity: 0.8; font-weight: bold;">PROCESO 1</div>
                                <h4 style="font-size: 1.3rem; margin: 0.2rem 0 1rem 0; color: #ffffff;">REFRESH</h4>
                                <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8; font-size: 0.92rem;">
                                    <li>› <strong>Producto listo para venta directa</strong></li>
                                    <li>› Cámara refrigerada o T° amb. según producto</li>
                                    <li>› Fecha: según ficha del producto</li>
                                    <li>› <em>Ejemplos: tortas, pasteles, pan granel</em></li>
                                </ul>
                            </div>
                            <div style="background: #15803d; color: white; border-radius: 8px; padding: 1.2rem;">
                                <div style="font-size: 0.8rem; text-transform: uppercase; opacity: 0.8; font-weight: bold;">PROCESO 2</div>
                                <h4 style="font-size: 1.3rem; margin: 0.2rem 0 1rem 0; color: #ffffff;">DESCONGELAMIENTO</h4>
                                <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8; font-size: 0.92rem;">
                                    <li>› <strong>Materia prima para cocción posterior</strong></li>
                                    <li>› SIEMPRE en cámara refrigerada</li>
                                    <li>› Fecha: según etiqueta del proveedor</li>
                                    <li>› <em>Ejemplos: pan hamburguesa, hot dog</em></li>
                                </ul>
                            </div>
                        </div>

                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
                            <thead>
                                <tr style="background: #0284c7; color: white;">
                                    <th style="padding: 10px; border-radius: 6px 0 0 0;">Característica</th>
                                    <th style="padding: 10px;">Refresh</th>
                                    <th style="padding: 10px; border-radius: 0 6px 0 0;">Descongelamiento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #e2e8f0;">
                                    <td style="padding: 10px; font-weight: bold; color: #334155;">Destino final</td>
                                    <td style="padding: 10px;">Venta directa al cliente</td>
                                    <td style="padding: 10px;">Proceso posterior (cocción)</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                                    <td style="padding: 10px; font-weight: bold; color: #334155;">Lugar</td>
                                    <td style="padding: 10px;">Cámara o T° ambiente</td>
                                    <td style="padding: 10px;">SIEMPRE en cámara refrigerada</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; font-weight: bold; color: #334155;">Registro R-21</td>
                                    <td style="padding: 10px; color: #16a34a; font-weight: bold;">✔ Obligatorio</td>
                                    <td style="padding: 10px; color: #16a34a; font-weight: bold;">✔ Obligatorio</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">Z</span>
                            Zona Refresh Correcta en Cámara
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
                            <div style="border: 1px solid #0284c7; background: #f0f9ff; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #0284c7; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">C</div>
                                <h5 style="margin: 0 0 6px 0; color: #0369a1; font-size: 1rem;">Cartel visible</h5>
                                <p style="font-size: 0.85rem; color: #475569; margin: 0;">Letrero "ZONA REFRESH" visible y bien ubicado en todo momento.</p>
                            </div>
                            <div style="border: 1px solid #16a34a; background: #f0fdf4; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #16a34a; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">S</div>
                                <h5 style="margin: 0 0 6px 0; color: #15803d; font-size: 1rem;">Separación por tipo</h5>
                                <p style="font-size: 0.85rem; color: #475569; margin: 0;">Productos separados: Hamburguesa / Hot Dog / Tortas.</p>
                            </div>
                            <div style="border: 1px solid #d97706; background: #fffbeb; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #d97706; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">F</div>
                                <h5 style="margin: 0 0 6px 0; color: #b45309; font-size: 1rem;">Fecha en cada bandeja</h5>
                                <p style="font-size: 0.85rem; color: #475569; margin: 0;">Cada bandeja con etiqueta de fecha de descongelación visible.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "refresh",
                nombre: "❄ Refresh",
                contenido: `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">1</span>
                            Proceso Refresh — Tortas y Pan — Paso a Paso
                        </h3>

                        <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 0.8rem 1rem; border-radius: 4px; font-weight: 600; color: #b45309; margin-bottom: 1.5rem; font-size: 0.9rem;">
                            ⚠️ Seguir estos pasos en orden. Cada uno es obligatorio.
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">1</span>
                                    <h4 style="margin: 0; color: #0369a1;">Recibir producto congelado</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Verificar estado y temperatura <strong>-18°C</strong>. No aceptar productos parcialmente descongelados.</p>
                            </div>
                            <div style="text-align: center; color: #0284c7; font-weight: bold;">↓</div>

                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">2</span>
                                    <h4 style="margin: 0; color: #0369a1;">Trasladar a zona refrigerada señalizada</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Cámara de refrigeración con cartel <strong>ZONA REFRESH</strong> visible y correctamente identificada.</p>
                            </div>
                            <div style="text-align: center; color: #0284c7; font-weight: bold;">↓</div>

                            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #d97706; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">3</span>
                                    <h4 style="margin: 0; color: #b45309;">⚠️ INMEDIATAMENTE: Marcar fecha de inicio</h4>
                                </div>
                                <p style="margin: 0 0 10px 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">La fecha rige desde que el producto entra a la cámara.</p>
                                <div style="display: flex; gap: 10px; flex-wrap: wrap; padding-left: 36px;">
                                    <div style="background: #e0f2fe; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; color: #0369a1;"><strong>Con calendario en etiqueta:</strong> marcar en etiqueta original</div>
                                    <div style="background: #fef3c7; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; color: #b45309;"><strong>Sin calendario:</strong> colocar cartel con fecha de inicio</div>
                                </div>
                            </div>
                            <div style="text-align: center; color: #0284c7; font-weight: bold;">↓</div>

                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">4</span>
                                    <h4 style="margin: 0; color: #0369a1;">Completar 1ª parte Registro FOOD SAFETY-R-21</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Producto, marca, cantidad, lote, vencimiento congelado, fecha ingreso, temperatura inicio, responsable.</p>
                            </div>
                            <div style="text-align: center; color: #0284c7; font-weight: bold;">↓</div>

                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">5</span>
                                    <h4 style="margin: 0; color: #0369a1;">Controlar permanencia en cámara</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Tortas y pasteles: cámara refrigerada. Panes (según producto): pueden ir a temperatura ambiente para venta a granel.</p>
                            </div>
                            <div style="text-align: center; color: #0284c7; font-weight: bold;">↓</div>

                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">6</span>
                                    <h4 style="margin: 0; color: #0369a1;">Completar 2ª parte Registro al término</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">T° del producto, T° primera medición, vencimiento descongelado, evaluación sensorial, acción correctiva si aplica.</p>
                            </div>
                            <div style="text-align: center; color: #16a34a; font-weight: bold;">↓</div>

                            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                                    <span style="background: #16a34a; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">7</span>
                                    <h4 style="margin: 0; color: #15803d;">✔ Producto listo para venta</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Reponer en vitrina o área de venta a granel.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "descongelamiento",
                nombre: "🔪 Descongelamiento",
                contenido: `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 0.8rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">2</span>
                            Proceso Descongelamiento — Pan para Cocción
                        </h3>

                        <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 0.8rem 1rem; border-radius: 4px; color: #0369a1; font-weight: 600; margin-bottom: 1.5rem; font-size: 0.9rem;">
                            Aplica para materias primas (pan congelado) que serán horneadas o cocinadas posteriormente.
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">1</span>
                                    <h4 style="margin: 0; color: #0369a1;">Recibir materia prima congelada</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Pan hamburguesa, hot dog, etc. Verificar condiciones de congelación a <strong>-18°C</strong>.</p>
                            </div>
                            <div style="text-align: center; color: #d97706; font-weight: bold;">↓</div>

                            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                                    <span style="background: #d97706; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">2</span>
                                    <h4 style="margin: 0; color: #b45309;">⚠️ Trasladar SIEMPRE a cámara refrigerada</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">NUNCA a temperatura ambiente. El descongelamiento de materias primas para cocción siempre debe hacerse en frío.</p>
                            </div>
                            <div style="text-align: center; color: #d97706; font-weight: bold;">↓</div>

                            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                                    <span style="background: #d97706; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">3</span>
                                    <h4 style="margin: 0; color: #b45309;">⚠️ Señalizar zona y marcar fecha en producto</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Zona con cartel de identificación | Fecha de ingreso a cámara en etiqueta.</p>
                            </div>
                            <div style="text-align: center; color: #0284c7; font-weight: bold;">↓</div>

                            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                                    <span style="background: #0284c7; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">4</span>
                                    <h4 style="margin: 0; color: #0369a1;">Completar 1ª parte Registro FOOD SAFETY-R-21</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Al inicio. No olvidar registrar nombre del responsable.</p>
                            </div>
                            <div style="text-align: center; color: #16a34a; font-weight: bold;">↓</div>

                            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                                    <span style="background: #16a34a; color: white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem;">5</span>
                                    <h4 style="margin: 0; color: #15803d;">✔ Llevar a cocción + cerrar Registro</h4>
                                </div>
                                <p style="margin: 0; font-size: 0.9rem; color: #334155; padding-left: 36px;">Completar 2da parte del Registro. El pan está listo para horneado.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">?</span>
                            Árbol de Decisión — Permanencia en Cámara
                        </h3>

                        <div style="background: #0284c7; color: white; padding: 12px; border-radius: 8px; text-align: center; font-weight: bold; margin-bottom: 1rem;">
                            ¿El proveedor indica vida útil una vez descongelado el producto?
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div style="text-align: center;">
                                <div style="border: 2px solid #16a34a; color: #16a34a; padding: 6px 15px; border-radius: 20px; font-weight: bold; display: inline-block; margin-bottom: 8px;">SÍ indica</div>
                                <div style="font-size: 1.2rem; color: #64748b;">↓</div>
                                <div style="background: #f0fdf4; border: 1px solid #16a34a; border-radius: 8px; padding: 1rem; color: #15803d; font-weight: 600; font-size: 0.9rem;">
                                    Respetar la fecha que indica la etiqueta del proveedor
                                </div>
                            </div>
                            <div style="text-align: center;">
                                <div style="border: 2px solid #ef4444; color: #ef4444; padding: 6px 15px; border-radius: 20px; font-weight: bold; display: inline-block; margin-bottom: 8px;">NO indica</div>
                                <div style="font-size: 1.2rem; color: #64748b;">↓</div>
                                <div style="background: #fef2f2; border: 1px solid #ef4444; border-radius: 8px; padding: 1rem; color: #b91c1c; font-weight: 600; font-size: 0.9rem;">
                                    Solo para producción del día. NO dejar para el día siguiente.
                                </div>
                            </div>
                        </div>

                        <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; border-radius: 4px; color: #991b1b; font-weight: bold; font-size: 0.92rem;">
                            🚫 Un producto descongelado NO vuelve a congelarse JAMÁS.
                        </div>
                    </div>
                `
            },
            {
                id: "trazabilidad",
                nombre: "📁 Trazabilidad",
                contenido: `
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">F</span>
                            Formulario FOOD SAFETY-R-21 (Ejemplo Real)
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: start;">
                            <div style="text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; background: #f8fafc;">
                                <img src="Formulario1.png" alt="Formulario FOOD SAFETY R-21" style="max-width: 100%; height: auto; border-radius: 6px;">
                            </div>
                            <div>
                                <h4 style="margin: 0 0 10px 0; color: #0284c7;">Registro de Refresh y Descongelamiento</h4>
                                <p style="font-size: 0.9rem; color: #334155; line-height: 1.5;">El formulario <strong>FOOD SAFETY-R-21</strong> es el documento oficial y obligatorio para registrar el ciclo completo de descongelación de cualquier producto alimentario en la tienda.</p>
                                
                                <div style="background: #f1f5f9; padding: 10px; border-radius: 6px; margin: 10px 0; font-size: 0.88rem; color: #334155;">
                                    <p style="margin: 0 0 6px 0;"><strong>Parte 1 (Al inicio):</strong> Registra nombre del producto, lote, cantidad, temperatura de inicio (-18°C) y el colaborador responsable.</p>
                                    <p style="margin: 0;"><strong>Parte 2 (Al término):</strong> Registra las mediciones de temperatura finales, vencimiento calculado para descongelado y evaluación sensorial.</p>
                                </div>

                                <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 10px; border-radius: 6px; font-size: 0.88rem; color: #b45309;">
                                    💡 <strong>Recordatorio Crítico:</strong> Los datos deben ingresarse en el momento exacto en que ocurren los eventos (ingreso a cámara y egreso). No se permite el llenado extemporáneo.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
                        <h3 style="color: #1e3a8a; display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <span style="background: #0284c7; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">L</span>
                            Libro de Trazabilidad (Ejemplo Real)
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: start;">
                            <div style="text-align: center; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; background: #f8fafc;">
                                <img src="trazabilidad.png" alt="Libro de Trazabilidad Real" style="max-width: 100%; max-height: 400px; height: auto; border-radius: 6px;">
                            </div>
                            <div>
                                <h4 style="margin: 0 0 10px 0; color: #0284c7;">Respaldo Físico de Etiquetas de Origen</h4>
                                <p style="font-size: 0.9rem; color: #334155; line-height: 1.5;">El Libro de Trazabilidad respalda de forma física la procedencia y lote de cada producto elaborado.</p>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 12px 0;">
                                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; font-size: 0.85rem;">
                                        <strong style="color: #0369a1;">Caso 1: Bandeja Completa</strong>
                                        <p style="margin: 4px 0 0 0; color: #475569;">Rescata la etiqueta original del envase, pégala en el libro y anota responsable, turno y fecha de reposición.</p>
                                    </div>
                                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; font-size: 0.85rem;">
                                        <strong style="color: #0369a1;">Caso 2: Bandeja Parcial</strong>
                                        <p style="margin: 4px 0 0 0; color: #475569;">Mantén la etiqueta original en lo que queda de la bandeja en cámara, y escribe <em>"etiqueta en cámara"</em> con los datos de lote/vencimiento.</p>
                                    </div>
                                </div>

                                <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 10px; border-radius: 4px; font-size: 0.88rem; color: #991b1b; font-weight: 600;">
                                    ⚠️ Punto Clave de Auditoría: La ausencia de etiquetas de origen correspondientes a los lotes en exhibición o preparación constituye una falta grave a las normas de Food Safety.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.5rem;">
                        <h3 style="color: #dc2626; display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <span style="background: #dc2626; color: white; border-radius: 6px; padding: 2px 8px; font-size: 0.9rem;">!</span>
                            Puntos SIEMPRE Obligatorios
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                            <div style="border: 1px solid #0284c7; background: #f0f9ff; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #0284c7; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">C</div>
                                <strong style="color: #0369a1; font-size: 0.9rem;">Cartel visible</strong>
                                <p style="font-size: 0.8rem; color: #475569; margin: 4px 0 0 0;">Zona refresh con cartel visible en todo momento.</p>
                            </div>
                            <div style="border: 1px solid #d97706; background: #fffbeb; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #d97706; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">F</div>
                                <strong style="color: #b45309; font-size: 0.9rem;">Fecha inmediata</strong>
                                <p style="font-size: 0.8rem; color: #475569; margin: 4px 0 0 0;">Marcar la fecha de inicio en el momento exacto que entra a cámara.</p>
                            </div>
                            <div style="border: 1px solid #ef4444; background: #fef2f2; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #ef4444; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">N</div>
                                <strong style="color: #b91c1c; font-size: 0.9rem;">No recongelar</strong>
                                <p style="font-size: 0.8rem; color: #475569; margin: 4px 0 0 0;">Un producto descongelado NO vuelve a congelarse JAMÁS.</p>
                            </div>
                            <div style="border: 1px solid #16a34a; background: #f0fdf4; border-radius: 8px; padding: 1rem; text-align: center;">
                                <div style="width: 35px; height: 35px; background: #16a34a; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 8px auto;">SP</div>
                                <strong style="color: #15803d; font-size: 0.9rem;">SharePoint</strong>
                                <p style="font-size: 0.8rem; color: #475569; margin: 4px 0 0 0;">Info publicada en la Biblioteca de Seguridad Alimentaria.</p>
                            </div>
                        </div>
                    </div>
                `
            }
        ],
        preguntas: [
            {
                enunciado: "¿Cuál es la principal diferencia entre el proceso REFRESH y el proceso DESCONGELAMIENTO?",
                opciones: [
                    "El Refresh es para productos congelados y el Descongelamiento para verduras.",
                    "El Refresh es para productos de venta directa al cliente y el Descongelamiento es para materias primas de cocción posterior.",
                    "El Refresh no requiere registro en formulario R-21.",
                    "El Descongelamiento se hace a temperatura ambiente."
                ],
                correcta: 1
            },
            {
                enunciado: "¿En qué momento exacto se debe marcar la fecha de inicio de descongelación en el producto?",
                opciones: [
                    "Al finalizar el turno de la tarde.",
                    "Al día siguiente cuando empiece a hornearse.",
                    "Inmediatamente en el momento en que el producto entra a la cámara refrigerada.",
                    "Solo cuando el cliente pregunte por la fecha."
                ],
                correcta: 2
            },
            {
                enunciado: "Si un producto descongelado sobra al final del turno, ¿se puede volver a congelar en la cámara?",
                opciones: [
                    "Sí, si se envuelve en alusa foil.",
                    "Sí, pero solo por 24 horas máximo.",
                    "NO, un producto descongelado jamás vuelve a congelarse.",
                    "Solo si el Jefe de Local lo autoriza."
                ],
                correcta: 2
            },
            {
                enunciado: "¿Cuál es el formulario oficial obligatorio para registrar el ciclo de descongelación?",
                opciones: [
                    "FOOD SAFETY-R-21",
                    "Ajuste SMART F5",
                    "Reporte NSG 96%",
                    "Guía de Recepción Directa"
                ],
                correcta: 0
            }
        ]
    }
};

let moduloActualId = null;
let etapaActualIdx = 0;
let pestanaActualIdx = 0;

function abrirModulo(id) {
    moduloActualId = id;
    etapaActualIdx = 0;
    pestanaActualIdx = 0;
    const vMenu = document.getElementById('vista-menu');
    if (vMenu) vMenu.style.display = 'none';

    const contenedor = document.getElementById('vista-modulo-pagina');
    if (contenedor) {
        contenedor.style.display = 'block';
        renderizarEtapa();
    }
}

function cambiarPestanaEspecial(idx) {
    pestanaActualIdx = idx;
    renderizarEtapa();
}

function renderizarEtapa() {
    const mod = modulosData[moduloActualId];
    const contenedor = document.getElementById('vista-modulo-pagina');
    if (!contenedor) return;

    if (mod.esEspecialSeguridad) {
        if (pestanaActualIdx < mod.pestanas.length) {
            const pestanaActiva = mod.pestanas[pestanaActualIdx];
            
            let html = `
                <div class="contenedor-pantalla-nueva">
                    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
                        <div style="font-size: 0.8rem; letter-spacing: 1px; color: #93c5fd; font-weight: bold; text-transform: uppercase; margin-bottom: 4px;">
                            ${mod.headerInfo.subtitulo}
                        </div>
                        <h1 style="margin: 0 0 1.2rem 0; font-size: 1.8rem; color: #ffffff;">${mod.headerInfo.titulo}</h1>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 1rem;">
                            ${mod.headerInfo.kpis.map(kpi => `
                                <div style="text-align: center; background: rgba(255,255,255,0.07); padding: 8px; border-radius: 8px;">
                                    <div style="font-size: 1.4rem; font-weight: 800; color: #facc15;">${kpi.valor}</div>
                                    <div style="font-size: 0.68rem; text-transform: uppercase; color: #e2e8f0; font-weight: 600;">${kpi.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div style="display: flex; gap: 8px; overflow-x: auto; border-bottom: 2px solid #e2e8f0; margin-bottom: 1.5rem; padding-bottom: 4px;">
                        ${mod.pestanas.map((p, idx) => `
                            <button onclick="cambiarPestanaEspecial(${idx})" style="
                                padding: 10px 16px; 
                                border: none; 
                                background: ${idx === pestanaActualIdx ? '#0284c7' : 'transparent'}; 
                                color: ${idx === pestanaActualIdx ? 'white' : '#64748b'}; 
                                font-weight: bold; 
                                border-radius: 6px 6px 0 0; 
                                cursor: pointer; 
                                font-size: 0.9rem;
                                white-space: nowrap;
                                transition: all 0.2s;
                            ">
                                ${p.nombre}
                            </button>
                        `).join('')}
                        <button onclick="cambiarPestanaEspecial(${mod.pestanas.length})" style="
                            padding: 10px 16px; 
                            border: none; 
                            background: ${pestanaActualIdx === mod.pestanas.length ? '#16a34a' : 'transparent'}; 
                            color: ${pestanaActualIdx === mod.pestanas.length ? 'white' : '#16a34a'}; 
                            font-weight: bold; 
                            border-radius: 6px 6px 0 0; 
                            cursor: pointer; 
                            font-size: 0.9rem;
                            white-space: nowrap;
                        ">
                            🧩 Quiz Evaluativo
                        </button>
                    </div>

                    <div style="line-height: 1.6;">
                        ${pestanaActiva.contenido}
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #ddd;">
                        <button class="btn-volver-menu" onclick="volverAlMenu()">← Volver al Menú</button>
                        <button class="btn-acuenta" onclick="cambiarPestanaEspecial(${pestanaActualIdx + 1})">Siguiente Pestaña ➔</button>
                    </div>
                </div>
            `;
            contenedor.innerHTML = html;
        } else {
            renderizarEvaluacion();
        }
        return;
    }

    if (etapaActualIdx < mod.etapas.length) {
        const etapa = mod.etapas[etapaActualIdx];
        contenedor.innerHTML = `
            <div class="contenedor-pantalla-nueva">
                <div class="seccion-pantalla-modulo">
                    <span class="badge-modulo">Módulo ${moduloActualId} - Paso ${etapaActualIdx + 1} de ${mod.etapas.length}</span>
                    <h2 style="margin: 0.5rem 0; color: var(--color-primario);">${etapa.subtitulo}</h2>
                    <div style="margin: 1.5rem 0; line-height: 1.6;">${etapa.contenido}</div>
                    <div style="display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #ddd;">
                        <button class="btn-volver-menu" onclick="volverAlMenu()">← Volver al Menú</button>
                        <button class="btn-acuenta" onclick="siguienteEtapa()">Siguiente ➔</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        renderizarEvaluacion();
    }
}

function siguienteEtapa() {
    etapaActualIdx++;
    renderizarEtapa();
}

function renderizarEvaluacion() {
    const mod = modulosData[moduloActualId];
    const contenedor = document.getElementById('vista-modulo-pagina');
    if (!contenedor) return;

    let html = `
        <div class="contenedor-pantalla-nueva">
            <div class="seccion-pantalla-modulo">
                <span class="badge-modulo">Evaluación Módulo ${moduloActualId}</span>
                <h2 style="margin: 0.5rem 0; color: var(--color-primario);">Cuestionario de Conocimiento</h2>
                <p style="color: #666; margin-bottom: 1.5rem;">Responde las siguientes preguntas seleccionando la alternativa correcta:</p>
                <form id="form-evaluacion" onsubmit="enviarEvaluacion(event)">
    `;

    const letras = ['A', 'B', 'C', 'D', 'E', 'F'];

    mod.preguntas.forEach((p, idx) => {
        html += `<div style="background: #F8FAFC; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.25rem; border: 1px solid #E2E8F0;">
            <p style="font-weight: 600; margin-bottom: 0.8rem; color: #1E293B;">${idx + 1}. ${p.enunciado}</p>`;
        
        p.opciones.forEach((op, optIdx) => {
            const letra = letras[optIdx] || (optIdx + 1);
            html += `<label style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 0.6rem; font-size: 0.95rem; cursor: pointer; color: #334155;">
                <input type="radio" name="p_${idx}" value="${optIdx}" required style="margin-top: 3px; cursor: pointer;"> 
                <span><strong>${letra})</strong> ${op}</span>
            </label>`;
        });
        html += `</div>`;
    });

    html += `
                    <div style="display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #ddd;">
                        <button type="button" class="btn-volver-menu" onclick="volverAlMenu()">← Volver al Menú</button>
                        <button type="submit" class="btn-acuenta" style="background-color: var(--color-exito);">Enviar Evaluación ✔</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    contenedor.innerHTML = html;
}

function enviarEvaluacion(e) {
    e.preventDefault();
    const mod = modulosData[moduloActualId];
    const data = new FormData(e.target);
    let puntaje = 0;

    mod.preguntas.forEach((p, idx) => {
        const respuestaUsuario = parseInt(data.get(`p_${idx}`));
        if (respuestaUsuario === p.correcta) {
            puntaje++;
        }
    });

    const notaMinimaAprobacion = Math.ceil(mod.preguntas.length * 0.6);

    if (puntaje >= notaMinimaAprobacion) {
        alert(`¡Felicitaciones! Has aprobado el módulo con ${puntaje} de ${mod.preguntas.length} correctas.`);
        marcarCompletado(moduloActualId);
    } else {
        alert(`Obtuviste ${puntaje} de ${mod.preguntas.length}. Necesitas al menos ${notaMinimaAprobacion} correctas para aprobar. Inténtalo nuevamente.`);
        abrirModulo(moduloActualId);
    }
}

function volverAlMenu() {
    const vMod = document.getElementById('vista-modulo-pagina');
    if (vMod) vMod.style.display = 'none';

    const vMenu = document.getElementById('vista-menu');
    if (vMenu) vMenu.style.display = 'block';

    actualizarProgresoGlobal();
}

function marcarCompletado(idModulo) {
    if (!modulosCompletados.includes(idModulo)) {
        modulosCompletados.push(idModulo);
        localStorage.setItem('modulos_completados', JSON.stringify(modulosCompletados));
        
        const historial = JSON.parse(localStorage.getItem('historial_admin')) || [];
        historial.push({
            fecha: new Date().toLocaleString(),
            usuario: colaboradorActual,
            modulo: `Módulo ${idModulo}`,
            estado: 'Aprobado'
        });
        localStorage.setItem('historial_admin', JSON.stringify(historial));
    }
    volverAlMenu();
}

function mostrarModalAdmin() {
    const modal = document.getElementById('modal-admin');
    if (modal) modal.style.display = 'flex';

    const loginStep = document.getElementById('admin-login-step');
    if (loginStep) loginStep.style.display = 'block';

    const panelStep = document.getElementById('admin-panel-step');
    if (panelStep) panelStep.style.display = 'none';

    const claveAdmin = document.getElementById('clave-admin');
    if (claveAdmin) claveAdmin.value = '';

    const errClave = document.getElementById('error-clave');
    if (errClave) errClave.textContent = '';
}

function cerrarModalAdmin() {
    const modal = document.getElementById('modal-admin');
    if (modal) modal.style.display = 'none';
}

function autenticarAdmin() {
    const claveInput = document.getElementById('clave-admin');
    const clave = claveInput ? claveInput.value : '';

    if (clave === '1234') {
        const loginStep = document.getElementById('admin-login-step');
        if (loginStep) loginStep.style.display = 'none';

        const panelStep = document.getElementById('admin-panel-step');
        if (panelStep) panelStep.style.display = 'block';

        cargarHistorialAdmin();
    } else {
        const errClave = document.getElementById('error-clave');
        if (errClave) errClave.textContent = 'Contraseña incorrecta.';
    }
}

function cargarHistorialAdmin() {
    const historial = JSON.parse(localStorage.getItem('historial_admin')) || [];
    const tbody = document.getElementById('tabla-registros-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (historial.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No hay registros aún.</td></tr>';
        return;
    }

    historial.forEach(reg => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${reg.fecha}</td>
            <td>${reg.usuario}</td>
            <td>${reg.modulo}</td>
            <td><strong style="color:var(--color-exito)">${reg.estado}</strong></td>
        `;
        tbody.appendChild(tr);
    });
}

function borrarHistorialAdmin() {
    if (confirm('¿Deseas vaciar todo el historial de registros?')) {
        localStorage.removeItem('historial_admin');
        cargarHistorialAdmin();
    }
}