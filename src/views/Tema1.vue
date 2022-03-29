<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es IoT?
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-4.p-5(data-aos="fade-right"): img(src="@/assets/curso/0.jpg")
      .col-lg-8.p-5(data-aos="fade-left")
        p El internet de las cosas <b>hace referencia a la interconexión de los dispositivos y objetos con otros mediante redes como internet, empleando sensores y actuadores integrados y variedad de elementos electrónicos.</b> La interconexión de estos dispositivos con microprocesadores y la conexión de la red, permite obtener, tratar y transferir datos en forma automática; todo objeto en el mundo puede ser una fuente de datos.
          br
          br
          |A grandes rasgos, podemos decir que el internet de las cosas se conforma por tres sectores: conectividad, <em>hardware</em> y servicios, y el sector de servicios es un campo fértil por sembrar: <b>desarrollo <em>web</em> en la nube, ingeniería de datos, <em>machine learning</em>, inteligencia artificial, <em>big data.</em></b>
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Origen e importancia
    p.mb-5 Entre los años 1991 y 1999, Mark Weiser y Naoto Fukusawa se centraron en el área del diseño de dispositivos que tuvieran una sensibilidad a la naturaleza humana, y estos dispositivos se volvieran una parte integral de los seres humanos ejecutando algunos patrones de uso. Kevin Ashton, cofundador de AUTO ID center del MIT en 1999 en una presentación de frecuencias de radio (RFID) llamó a su presentación “internet de las cosas”, pero el verdadero internet de las cosas sucedería cuando se conecten a internet más dispositivos que personas y esto sucedió en el 2009 con el nacimiento de los celulares.
      br
      br
      |En estos términos, para el 2022 se espera que estén conectados 18 mil millones de dispositivos, no solo celulares, tablets, pc’s, sino también dispositivos que nunca nos imaginariamos tales como refrigeradores, cepillos, autos, zapatillas, collares de mascotas, iluminación, cerraduras, ropa, etc.
      br
      br
      | El internet de las cosas tiene un millar de aplicaciones, algunas de ellas son:
    .row.mb-5.justify-content-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-alternativo_1.p-3(x="9.5%" y="31.5%" numero="")
            .h5.mb-2 Hogar inteligente
            p Termostatos domésticos, control de televisores, detectores de humo, cámaras de seguridad, cafeteras y otros electrodomésticos.

          .tarjeta.color-alternativo_2.p-3(x="50%" y="10%" numero="")
            .h5.mb-2 Fuera del hogar
            p Automóviles en red, prendas tecnológicas y monitores de salud en la ropa, aplicaciones para ciclistas para controlar su actividad física.  Gafas inteligentes.

          .tarjeta.color-alternativo_3.p-3(x="90.5%" y="31.5%" numero="")
            .h5.mb-2 Ropa tecnológica (<em>wearables</em>)
            p Dispositivos médicos, productos de salud, marcapasos y bombas de insulina. Estos <em>wearables</em> monitorizan la geolocalización, así como la frecuencia cardiaca, el pulso, calorías, patrones del sueño, etc.

          .tarjeta.color-alternativo_4.p-3(x="70.7%" y="77%" numero="")
            .h5.mb-2 Transporte
            p Supervisión de vehículos conectados, sensores de proximidad, parqueo de vehículos, vehículos autónomos, control remoto de peajes.

          .tarjeta.color-alternativo_5.p-3(x="30%" y="77%" numero="")
            .h5.mb-2 Contadores inteligentes
            p Dispositivos electrónicos de medición de energía, calefacción, climatización , agua.
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Arquitectura IoT
    p.mb-5 Según un artículo en <i>Hindawi Journal of Electrical and Computer Engineering</i>, no existe una arquitectura acordada para el Internet de las Cosas. Una arquitectura simple puede estar compuesta de tres o cinco capas.
      br
      br
      |Conozcamos la arquitectura compuesta por tres capas:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/2.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4.color-alternativo_texto.mt-3
              h4 Capa de percepción
              p Es la capa física, la cual tiene sensores para detectar y recopilar información sobre el medio ambiente.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/3.svg' alt='AvatarTop')
          .tarjeta.color-secundario.w-100
            .p-4.color-alternativo_texto.mt-3
              h4 Capa de red
              p Tiene la función de conectarse a otras cosas inteligentes, dispositivos de red y servidores, se transmiten y procesan datos de los sensores.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/4.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4.color-alternativo_texto.mt-3
              h4 Capa de aplicación
              p Es responsable de proporcionar servicios de aplicación al usuario, ejemplo hogares inteligentes, ciudades inteligentes, salud inteligente, etc.
    p.mb-5 En la arquitectura de cinco capas, encontramos adicionalmente:
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/5.svg' alt='AvatarTop')
          .tarjeta.color-alternativo_6.w-100
            .p-4.color-alternativo_texto.mt-3
              h4 Capa de transporte
              p Encargada de transferir los datos de sensores desde la capa de percepción a la capa de procesamiento y viceversa a través de redes tales como <i>Wireless, 3G, LAN , Bluetooth, RFID Y NFC</i>.
      .col-md-6.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/6.svg' alt='AvatarTop')
          .tarjeta.color-alternativo_7.w-100
            .p-4.color-alternativo_texto.mt-3
              h4 Capa de procesamiento o capa <em>middleware</em>
              p Almacena, analiza y procesa grandes cantidades de datos que provienen de la capa de transporte. Puede administrar y proporcionar un conjunto diverso de servicios a las capas inferiores, aquí encontramos tecnologías como bases de datos, computación en la nube y procesamiento de <em>big data</em>.
    p.mb-5 En la siguiente figura se puede observar una comparación entre cada una de estas arquitecturas:
    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Capas de arquitectura
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up'): img(src='@/assets/curso/7.svg' alt='AvatarTop')
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Componentes IoT
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-4.p-5(data-aos="fade-right"): img(src="@/assets/curso/8.jpg")
      .col-lg-8.p-5(data-aos="fade-left")
        p Un sistema IoT no se puede llevar a cabo o es imposible sin el uso de sensores para recoger datos del medio ambiente, estos son pequeños, de bajo costo y tienen un bajo consumo de energía.
          br
          br
          |La información recogida por los sensores es convertida a información digital para así poder tratarla, almacenarla y enviarla a otros dispositivos.
          br
          br
          |Los sensores son dispositivos electrónicos capaces de medir magnitudes físicas o químicas y transformarlas en señales eléctricas y se clasifican en:
    //- SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/9.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 1. Basadas en aplicaciones
    //-       p Los sensores son seleccionados de acuerdo al requerimiento a implementar, tales como procesos de control industrial, medidas y automatización, automóviles, electrónica de consumo, productos médicos.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/10.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 2. Basadas en tipo de<br>señal de salida
    //-       p
    //-         <b>Sensores digitales:</b>
    //-         | la salida del sensor es binaria o digital la cual puede ser procesada directamente a través de controlador o  procesador.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/11.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 2. Basadas en tipo de<br>señal de salida
    //-       p
    //-         <b>Sensores análogos:</b>
    //-         | la señal de salida es continua, se requiere un conversor análogo digital para leer el sensor.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/12.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 3. Basadas en tipo de sensores
    //-       p
    //-         b Acelerómetros:
    //-         | usados en sistemas dinámicos.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/13.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 3. Basadas en tipo de sensores
    //-       p
    //-         b Biosensores:
    //-         | basados en tecnología electromecánica, usados como dispositivos médicos, prueba de agua, prueba de aire, pruebas de alimentos.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/14.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 3. Basadas en tipo de sensores
    //-       p
    //-         b Sensores de imágenes:
    //-         | usados ampliamente en vigilancia, biometría y gestión de tráfico.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/15.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Sensores de temperatura:
    //-         | termocuplas, termistores, detectores de temperatura.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/16.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Sensores de flujo:
    //-         | masa térmica, presión diferencial, campo electromagnético, desplazamiento de posición.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/17.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Sensores de presión:
    //-         | fibra óptica, manómetros.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/18.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Sensores de nivel:
    //-         | frecuencia de radio ultrasónica, radar, desplazamiento térmico.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/19.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Sensores de proximidad  y desplazamiento:
    //-         |  fotoeléctricos, ultrasónicos, magnéticos.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/20.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Biosensores:
    //-         | electroquímicos, sensores resonantes.
    //-   .tarjeta.tarjeta-slyde.color-acento-botones
    //-     img(src='@/assets/curso/21.jpg')
    //-     .tarjeta-slyde_contenido.p-4
    //-       h4 4. Basadas en propiedades
    //-       p
    //-         b Aceleración:
    //-         | acelerómetros, giroscopios.
    TabsA.color-primario.mb-5
      .tarjeta.cian.p-5(titulo="1. Basadas en aplicaciones")
        .tarjeta-slyde.d-flex.p-0
          img(src='@/assets/curso/9.png')
          p.mb-0 Los sensores son seleccionados de acuerdo al requerimiento a implementar, tales como procesos de control industrial, medidas y automatización, automóviles, electrónica de consumo, productos médicos.

      .tarjeta.cian.p-5(titulo="2. Basadas en tipo de señal de salida")
        SlyderA.p-3
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/10.png')
            p.mb-0 Sensores digitales: la salida del sensor es binaria o digital la cual puede ser procesada directamente a través de controlador o  procesador.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/11.png')
            p.mb-0 Sensores análogos: la señal de salida es continua, se requiere un conversor análogo digital para leer el sensor.
      .tarjeta.cian.p-5(titulo="3. Basadas en tipo de sensores")
        SlyderA.p-3
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/12.png')
            p.mb-0 Acelerómetros: usados en sistemas dinámicos.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/13.png')
            p.mb-0 Biosensores: basados en tecnología electromecánica, usados como dispositivos médicos, prueba de agua, prueba de aire, pruebas de alimentos.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/14.png')
            p.mb-0 Sensores de imágenes: usados ampliamente en vigilancia, biometría y gestión de tráfico.
      .tarjeta.cian.p-5(titulo="4. Basadas en propiedades")
        SlyderA.p-3
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/15.png')
            p.mb-0 Sensores de temperatura: termocuplas, termistores, detectores de temperatura.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/16.png')
            p.mb-0 Sensores de flujo: masa térmica, presión diferencial, campo electromagnético, desplazamiento de posición.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/17.png')
            p.mb-0 Sensores de presión: fibra óptica, manómetros.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/18.png')
            p.mb-0 Sensores de nivel: frecuencia de radio ultrasónica, radar, desplazamiento térmico.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/19.png')
            p.mb-0 Sensores de proximidad  y desplazamiento:  fotoeléctricos, ultrasónicos, magnéticos.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/20.png')
            p.mb-0 Biosensores: electroquímicos, sensores resonantes.
          .tarjeta-slyde.d-flex.p-0
            img(src='@/assets/curso/21.png')
            p.mb-0 Aceleración: acelerómetros, giroscopios.







    p.mb-5 Y los actuadores activan un determinado proceso utilizando señales eléctricas. Estos reciben una señal eléctrica y la transforman en movimiento en el ambiente internet de las cosas; los actuadores se usan siempre que sea necesario encender o apagar otro dispositivo, aplicando una fuerza.
      br
      br
      b Los actuadores tienen dos clasificaciones:
    .item.d-flex.align-items-center.mb-5
      span.h3.mb-0.me-3 1
      p.mb-0
        b Según la fuente de energía:
        | se requieren para generar movimiento.
    AcordionA(tipo="b" clase-tarjeta="tarjeta bg-purple-light")
      .row(titulo="Hidráulicos")
        .col-md-8.mb-4.mb-md-0
          p Utilizan la presión del líquido para generar un movimiento mecánico.
        .col-md-3
          figure
            img(src='@/assets/curso/22.png', alt='Texto que describa la imagen')
      .row(titulo="Neumáticos")
        .col-md-8.mb-4.mb-md-0
          p Utilizan aire comprimido a alta presión para permitir el funcionamiento mecánico.
        .col-md-3
          figure
            img(src='@/assets/curso/23.png', alt='Texto que describa la imagen')
      .row(titulo="Eléctricos")
        .col-md-8.mb-4.mb-md-0
          p Utilizan fuentes de energía externa como baterías u otros tipos de energía  eléctrica para generar movimiento.
        .col-md-3
          figure
            img(src='@/assets/curso/24.png', alt='Texto que describa la imagen')
    .item.d-flex.align-items-center.mb-5
      span.h3.mb-0.me-3 2
      p.mb-0
        b Según su patrón de construcción y papel que desempeñan
    AcordionA(tipo="b" clase-tarjeta="tarjeta bg-purple-light ")
      .row(titulo="Actuadores lineales")
        .col-md-8.mb-4.mb-md-0
          p Se utilizan para permitir el movimiento de objetos o elementos en línea recta, se emplean principalmente para movimientos como empujar levantar, tirar, bloquear, expulsar, sujetar o descender.
        .col-md-3
          figure
            img(src='@/assets/curso/25.png', alt='Texto que describa la imagen')
      .row(titulo="Motores")
        .col-md-8.mb-4.mb-md-0
          p Permiten movimientos rotativos precisos de los componentes del dispositivo u objetos completos.
        .col-md-3
          figure
            img(src='@/assets/curso/26.png', alt='Texto que describa la imagen')
      .row(titulo="Relés")
        .col-md-8.mb-4.mb-md-0
          p Se basan en electroimanes para manejar mecánicamente un interruptor.  No necesitan mucha energía para operar la bobina del relé. Se usan en lámparas, calentadores, vehículos inteligentes entre otros.
        .col-md-3
          figure
            img(src='@/assets/curso/27.png', alt='Texto que describa la imagen')
      .row(titulo="Selenoides")
        .col-md-8.mb-4.mb-md-0
          p Son un electroimán usados en electrodomésticos, equipos de oficina, automóviles, y  también funcionan como controladores en los sistemas de fugas de agua y gas en Iota.
        .col-md-3
          figure
            img(src='@/assets/curso/28.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-purple-light
  background-color: #f3ebf9
.cian
  background-color: #c6fcff
  border: 3px solid #01d1dd
.tarjeta-slyde
  overflow: hidden
  margin: 10px
  border: 3px solid #662c91
  border-radius: 20px
  padding: 0
  img
    width: 303px !important
    // height: 100%
  p
    padding: 50px
  @media (max-width: $bp-max-lg)
    flex-direction: column
  img
    width: 100%
</style>
