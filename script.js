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
    const total = 6;
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
                contenido: `<p><strong>Nuestra Propuesta de Valor:</strong> En SuperBodega aCuenta ofrecemos los precios más bajos para las familias chilenas, manteniendo una operación eficiente, simple y segura bajo el respaldo global de Walmart.</p><br><p><strong>Los 4 Valores Fundamentales:</strong></p><ul><li><strong>Servicio al Cliente:</strong> Poner siempre al cliente en el centro de todas nuestras decisiones.</li><li><strong>Respeto por el Individuo:</strong> Escuchar, valorar la diversidad y promover un trato digno e inclusivo.</li><li><strong>Luchar por la Excelencia:</strong> Innovar, mantener estándares de calidad y superar nuestras metas operacionales.</li><li><strong>Actuar con Integridad:</strong> Ser honestos, transparentes y éticos en cada una de nuestras acciones.</li></ul>`
            },
            {
                subtitulo: "Etapa 2: Reglas Cardinales de Servicio y Convivencia",
                contenido: `<p>En Walmart y SuperBodega aCuenta guiamos nuestro actuar diario bajo tres reglas de oro y cultura tradicional:</p><br><ul><li><strong>La Regla de Oro:</strong> <em>"Trata a los demás como te gustaría ser tratado."</em></li><li><strong>La Regla de Platino:</strong> <em>"Trata a los demás como ELLOS quieren ser tratados."</em></li><li><strong>La Regla de la Puesta del Sol (Sundown Rule):</strong> <em>"Responder a las solicitudes, requerimientos o problemas el mismo día en que son recibidos."</em></li></ul>`
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
                enunciado: "¿Cuál es la diferencia fundamental entre la 'Regla de Oro' y la 'Regla de Platino'?",
                opciones: ["Tratan sobre el orden de la bodega.", "La de Oro es tratarlos como nos gustaría ser tratados, y la de Platino como ELLOS desean ser tratados.", "Aplica solo para supervisores.", "Son exactamente iguales."],
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
                opciones: ["Es un requisito estético.", "Para prevenir accidentes laborales como aplastamientos de pies.", "Solo porque lo exige el prevencionista.", "Para no ensuciar la ropa."],
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
                    <div class="flujo-pasos" style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1rem;">
                        <div class="tarjeta-paso" style="display: flex; align-items: flex-start; gap: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
                            <div class="numero-paso" style="background-color: var(--color-secundario); color: #fff; font-weight: bold; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
                            <div class="contenido-paso" style="flex: 1;"><h3 style="margin-bottom: 0.5rem;">Impresión del Reporte de NSG</h3><p>Imprime el reporte correspondiente al turno actual según la sección (ACP, PPS o GM).</p></div>
                        </div>
                        <div class="tarjeta-paso" style="display: flex; align-items: flex-start; gap: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
                            <div class="numero-paso" style="background-color: var(--color-secundario); color: #fff; font-weight: bold; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</div>
                            <div class="contenido-paso" style="flex: 1;"><h3 style="margin-bottom: 0.5rem;">Búsqueda de Productos en Sala</h3><p>Dirígete a los pasillos con el reporte impreso para localizar físicamente cada producto indicado.</p></div>
                        </div>
                        <div class="tarjeta-paso" style="display: flex; align-items: flex-start; gap: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
                            <div class="numero-paso" style="background-color: var(--color-secundario); color: #fff; font-weight: bold; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</div>
                            <div class="contenido-paso" style="flex: 1;"><h3 style="margin-bottom: 0.5rem;">Verificar Reposición y Flejes de Precio</h3><p>Comprueba que el producto esté bien repuesto bajo criterio FIFO y que el fleje de precio esté actualizado.</p></div>
                        </div>
                        <div class="tarjeta-paso" style="display: flex; align-items: flex-start; gap: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
                            <div class="numero-paso" style="background-color: var(--color-secundario); color: #fff; font-weight: bold; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">4</div>
                            <div class="contenido-paso" style="flex: 1;"><h3 style="margin-bottom: 0.5rem;">Ingresar a Me@Walmart en la Pistola Zebra</h3><p>Inicia sesión en la aplicación corporativa Me@Walmart utilizando tu usuario oficial.</p></div>
                            <div style="max-width: 140px; text-align: center;"><img src="image_79a0c8.png" alt="Me@Walmart" style="width: 100%; border-radius: 6px; border: 1px solid #CBD5E1;"></div>
                        </div>
                        <div class="tarjeta-paso" style="display: flex; align-items: flex-start; gap: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
                            <div class="numero-paso" style="background-color: var(--color-secundario); color: #fff; font-weight: bold; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">5</div>
                            <div class="contenido-paso" style="flex: 1;"><h3 style="margin-bottom: 0.5rem;">Disponibilidad > Mi Repo</h3><p>Abre el menú, ingresa a la sección de Disponibilidad y selecciona la opción Mi Repo.</p></div>
                            <div style="max-width: 140px; text-align: center;"><img src="IMG_1313.png" alt="Mi Repo" style="width: 100%; border-radius: 6px; border: 1px solid #CBD5E1;"></div>
                        </div>
                        <div class="tarjeta-paso" style="display: flex; align-items: flex-start; gap: 1.25rem; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 1.25rem;">
                            <div class="numero-paso" style="background-color: var(--color-secundario); color: #fff; font-weight: bold; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">6</div>
                            <div class="contenido-paso" style="flex: 1;"><h3 style="margin-bottom: 0.5rem;">Pasillos, Escaneo y Registro</h3><p>Selecciona Pasillo, escanea el código de barras con el scanner e ingresa la existencia disponible.</p></div>
                            <div style="max-width: 120px; text-align: center; display: flex; gap: 6px;"><img src="IMG_1314.jpg" alt="Pasillos" style="width: 50%; border-radius: 6px; border: 1px solid #CBD5E1;"><img src="IMG_1315.png" alt="Escaneo" style="width: 50%; border-radius: 6px; border: 1px solid #CBD5E1;"></div>
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
                contenido: `<p>La merma es la pérdida no planificada de inventario. Afecta los resultados económicos de SuperBodega aCuenta y el inventario disponible en sistema.</p><br><p><strong>Causas principales de merma operativa:</strong></p><ul><li>Mala manipulación de apiladores y traspaletas (cajas caídas o aplastadas).</li><li>Falta de rotación FIFO (vencimiento de productos).</li><li>Empaques dañados por fraccionamiento o aperturas no autorizadas.</li></ul>`
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
                contenido: `<p>Para prevenir el ingreso de dinero falso a la caja, es obligatorio aplicar siempre el <strong>Método M.I.T. (Mirar, Inclinar y Tocar)</strong> al recibir pagos en efectivo:</p><br><ul><li><strong>M - MIRAR:</strong> Pon el billete contra la luz. Busca la marca de agua, el hilo de seguridad y el motivo complementario.</li><li><strong>I - INCLINAR:</strong> Mueve el billete suavemente frente a tus ojos para observar el cambio de color o la franja 3D.</li><li><strong>T - TOCAR:</strong> Pasa tus dedos por la superficie para sentir la textura áspera y el relieve.</li></ul>`
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
                enunciado: "Al empacar o embolsar los productos del cliente en caja, ¿qué precaución principal debes tener?",
                opciones: ["Empacar productos de limpieza y detergentes junto con productos frescos y carnes.", "Separar estrictamente los productos químicos y de limpieza de los alimentos para evitar contaminación.", "Mezclar todo en una sola bolsa para ahorrar bolsas plásticas.", "Dejar los productos frágiles al fondo de la bolsa y las latas pesadas arriba."],
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
        titulo: "Módulo 6: Ajuste SMART de Inventario",
        etapas: [
            {
                subtitulo: "Etapa 1: Importancia del Ajuste de Inventario",
                contenido: `<div class="alerta-meta" style="font-size: 1.05rem; line-height: 1.5; color: #004085; background-color: #cce5ff; border-left: 4px solid #0066c0; padding: 1rem; border-radius: 4px;">"El ajuste de nuestro inventario es sumamente importante para nuestros clientes ya que un mal ajuste de un producto puede provocar que este mismo no siga llegando porque ya habrá stock en el sistema y también nos alertara sobre este en los NSG."</div><br><p>Un conteo y ajuste preciso en la plataforma SMART garantiza que el Centro de Distribución envíe la mercadería necesaria a tiempo, evitando faltantes en la góndola y discrepancias en los registros de la tienda.</p>`
            }
        ],
        preguntas: [
            {
                enunciado: "¿Qué problema principal genera en el reabastecimiento realizar un MAL ajuste de inventario en el sistema?",
                opciones: ["Que el producto deje de llegar desde el Centro de Distribución porque el sistema asumirá que aún hay stock disponible.", "Que la tienda deba cerrar antes de tiempo por falta de clientes.", "Que se dupliquen las cajas registradoras automáticamente.", "Que el precio del producto aumente un 50% en el sistema."],
                correcta: 0
            },
            {
                enunciado: "¿De qué manera afecta un ajuste incorrecto de inventario al indicador NSG (Nivel de Servicio en Góndola)?",
                opciones: ["Mantiene el NSG en 100% todo el tiempo sin variaciones.", "Genera alertas por descuadres y distorsiona la medición real de disponibilidad de productos en la repisa.", "Elimina automáticamente los quiebres de stock sin necesidad de reponer.", "No afecta de ninguna manera los indicadores de la tienda."],
                correcta: 1
            }
        ]
    }
};

let moduloActualId = null;
let etapaActualIdx = 0;

function abrirModulo(id) {
    moduloActualId = id;
    etapaActualIdx = 0;
    const vMenu = document.getElementById('vista-menu');
    if (vMenu) vMenu.style.display = 'none';

    const contenedor = document.getElementById('vista-modulo-pagina');
    if (contenedor) {
        contenedor.style.display = 'block';
        renderizarEtapa();
    }
}

function renderizarEtapa() {
    const mod = modulosData[moduloActualId];
    const contenedor = document.getElementById('vista-modulo-pagina');
    if (!contenedor) return;

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
                <p style="color: #666; margin-bottom: 1.5rem;">Responde las siguientes preguntas para aprobar el módulo:</p>
                <form id="form-evaluacion" onsubmit="enviarEvaluacion(event)">
    `;

    mod.preguntas.forEach((p, idx) => {
        html += `<div style="background: #F8FAFC; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.25rem; border: 1px solid #E2E8F0;">
            <p style="font-weight: 600; margin-bottom: 0.8rem;">${idx + 1}. ${p.enunciado}</p>`;
       p.opciones.forEach((op, optIdx) => {
            const letras = ['A', 'B', 'C', 'D'];
            const letraActual = letras[optIdx] || optIdx;
            html += `<label style="display: block; margin-bottom: 0.5rem; font-size: 0.95rem; cursor: pointer;">
                <input type="radio" name="p_${idx}" value="${letraActual}" required style="margin-right: 8px;">
                ${letraActual}) ${op}
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