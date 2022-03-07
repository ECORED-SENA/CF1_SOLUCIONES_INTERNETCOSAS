<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <i>Raspberry Pi</i> y Arduino
    p.mb-5 A continuación conoceremos qué son el <i>Raspberry Pi</i> y el Arduino, elementos importantes a la hora de hablar de Internet de las Cosas.
    h3.fst-italic RASPBERRY PI
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/29.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.fw-bold El Raspberry Pi es un minicomputador de bajo costo que puede ser conectado a un monitor o televisión.
    p.mb-5 Los componentes el <i><b>Raspberry Pi</b></i> son:
    .row.mb-5.justify-content-center
      .col-lg-6
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-4
              .icono-hover
                img(src='@/assets/curso/30.svg')
                img(src='@/assets/curso/31.jpg')
            .col-lg-8
              h4 Fuente de Potencia 
              p Puede ser conectado con una conexión capaz de suplir 400 mA en 5V.
          .row.justify-content-center.align-items-center
            .col-lg-8
              h4 Pantalla
              p La pantalla es un monitor o televisor con entrada HDMI o DVI. 
            .col-4
              .icono-hover
                img(src='@/assets/curso/32.svg')
                img(src='@/assets/curso/33.jpg')
          .row.justify-content-center.align-items-center
            .col-4
              .icono-hover
                img(src='@/assets/curso/34.svg')
                img(src='@/assets/curso/35.jpg')
            .col-lg-8
              h4 Teclado y <em>mouse</em>
              p Periféricos  USB de baja potencia con menos de 0.1ª.
          .row.justify-content-center.align-items-center
            .col-lg-8
              h4 Tarjeta de memoria SD 
              p La tarjeta SD usada para <i>Raspberry Pi</i> debe ser al menos clase 4 con mínimo 8 Gb de capacidad de almacenamiento, la tarjeta SD necesita ser instalada sobre un sistema operativo desde otro computador. El proceso de instalación puede  ser realizada sobre <i>Windows, Mac, Linux, NOOBS y Raspbian</i>. 
            .col-4
              .icono-hover
                img(src='@/assets/curso/36.svg')
                img(src='@/assets/curso/37.jpg')
    h4.mb-5 Ventajas de Raspberry Pi
    .row.mb-5
      .col-lg-3
        .tarjeta.color-alternativo_8.p-4.h-100.d-flex.align-items-center.justify-content-center
          h4.text-center.mb-0 Uso sencillo
      .col-lg-3
        .tarjeta.color-alternativo_9.p-4.h-100.d-flex.align-items-center.justify-content-center
          h4.text-center.mb-0 Tamaño muy pequeño
      .col-lg-3
        .tarjeta.color-alternativo_10.p-4.h-100.d-flex.align-items-center.justify-content-center
          h4.text-center.mb-0 Precio bajo
      .col-lg-3
        .tarjeta.color-alternativo_11.p-4.h-100.d-flex.align-items-center.justify-content-center
          h4.text-center.mb-0 Tienen pines de entrada/salida, por lo que también se pueden conectar a otros componentes electrónicos, como sensores, <em>LEDs</em>, etc.
    h3 ARDUINO
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/38.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p
              b Inventado en el Ivrea <i>Interaction Design Institute</i>, diseñado para la creación rápida de prototipos dirigido a aficionados, muy pronto su uso creció exponencialmente y se adapta a las últimas tendencias en el mercado, desde una placa de <i>8 bits</i> hasta productos IoT, dispositivos portátiles y entornos embebidos. 
    p.mb-5 El <i>software</i> Arduino es fácil de usar y se puede operar en plataformas <i>Mac, Linux y Windows</i>. 
      br
      br
      |A continuación identifiquemos cada uno de sus componentes:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/39.svg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.text-white.p-3(x="73%" y="63%" numero="1")
        p 1. ATmega 328 microcontrolador. El corazón del Arduino, el procesador.
      .tarjeta.color-secundario.text-white.p-3(x="25%" y="35%" numero="2")
        p 2. Puerto USB. Se utiliza para la alimentación de la interfaz Uno Genuino, la carga de nuestros programas, y para la comunicación con nuestra placa (a través de serie. <em>PrintIn</em> (), etc.) El regulador de tensión ubicado a su lado, convertirá la tensión que le llega a través de este puerto <em>USB</em> y hará que trabaje a 5V.
      .tarjeta.color-secundario.text-white.p-3(x="30%" y="75%" numero="3")
        p  3. Conector de alimentación. Esta es la forma de alimentar nuestra placa cuando no está conectada a un puerto USB para para suministrar corriente eléctrica. Puede aceptar tensiones entre 7-12V.
      .tarjeta.color-secundario.text-white.p-3(x="61%" y="19%" numero="4")
        p  4. Los pines digitales: utilizaremos estos pines con instrucciones como <em>DigitalRead</em> (), <em>DigitalWrite</em> (). <em>AnalogRead</em> () y <em>AnalogWrite</em> () funcionarán únicamente en los ìnes con el símbolo PWM.
      .tarjeta.color-secundario.text-white.p-3(x="73%" y="19%" numero="5")
        p  5. y 6. <em>Serial IN</em> (TX) y <em>Serial IN</em> (RX): los puertos serie están físicamente unidos a distintos pines de la placa Arduino. Lógicamente, mientras usamos los puertos de serie no podemos usar como entradas o salidas digitales los pines asociados con el puerto de serie en uso. Pines asociados con el puerto de serie como entrada y salida digital (TX es el que Transmite y RX es el que recibe).
      .tarjeta.color-secundario.text-white.p-3(x="76%" y="19%" numero="6")
        p 5. y 6. Serial IN (TX) y Serial IN (RX): Los puertos serie están físicamente unidos a distintos pines de la placa Arduino. Lógicamente, mientras usamos los puertos de serie no podemos usar como entradas o salidas digitales los pines asociados con el puerto de serie en uso. Pines asociados con el puerto de serie como entrada y salida digital (TX es el que Transmite y RX es el que recibe).
      .tarjeta.color-secundario.text-white.p-3(x="52%" y="17%" numero="7")
        p Pin 13 + L (<em>on board led</em>): el único actuador incorporado a la placa. Además de ser un objetivo práctico para nuestra primera práctica de encender y apagar <em>LED</em>, este <em>LED</em> es muy útil para la depuración (debugging).
      .tarjeta.color-secundario.text-white.p-3(x="48.5%" y="17%" numero="8")
        p GND: proporciona masa, tierra, negativo a los circuitos.
      .tarjeta.color-secundario.text-white.p-3(x="45%" y="17%" numero="9")
        p  AREF: <em>analogReference input</em> V- Tensión a 5V, proporciona diferencia de potencial. Si se le aplica voltaje externo debe ser entre 0 y 5V solamente.
      .tarjeta.color-secundario.text-white.p-3(x="33%" y="20%" numero="10")
        p Botón <em>Reset</em>. Restablece el microcontrolador <em>ATmega</em>.
      .tarjeta.color-secundario.text-white.p-3(x="41%" y="40%" numero="11")
        p Chip de comunicación serie.
      .tarjeta.color-secundario.text-white.p-3(x="33%" y="65%" numero="12")
        p Regulador de tensión. Se debe tener en cuenta que para que trabaje a 5V la placa deberá recibir unos 6,5V – 7V, pero todo lo que esté por encima de este valor se desperdiciará (es decir, sobrecalentará la placa de Arduino y mayor calor que tendrá que disipar el regulador). En cualquier caso no está recomendado aplicar al regulador más de 12V y a los 20V se dañará.
      .tarjeta.color-secundario.text-white.p-3(x="76%" y="47%" numero="13")
        p ICSP: <em>In-Circuit Serial Programming</em>.
      .tarjeta.color-secundario.text-white.p-3(x="70%" y="37%" numero="14")
        p Led de encendido: indica que la placa está recibiendo alimentación.
      .tarjeta.color-secundario.text-white.p-3(x="71%" y="80%" numero="15")
        p Pines analógicos: utilizaremos estos pines con instrucciones como <em>Analogread</em> ().
      .tarjeta.color-secundario.text-white.p-3(x="63%" y="80%" numero="16")
        p Vin: voltaje <em>Input</em>. Deberá llegarle una tensión regulada y estable (ya que no pasa por el regulador -nº12-) de 5V.
      .tarjeta.color-secundario.text-white.p-3(x="59%" y="80%" numero="17")
        p GND: proporciona masa, tierra, negativo a nuestros circuitos.
      .tarjeta.color-secundario.text-white.p-3(x="57%" y="53%" numero="17")
        p GND: proporciona masa, tierra, negativo a nuestros circuitos.
      .tarjeta.color-secundario.text-white.p-3(x="56%" y="82%" numero="18")
        p 5V: voltaje <em>Input</em>.
      .tarjeta.color-secundario.text-white.p-3(x="53.8%" y="80%" numero="19")
        p 3,3V: voltaje <em>Input</em>.
      .tarjeta.color-secundario.text-white.p-3(x="51.3%" y="80%" numero="20")
        p <em>Reset</em> pin: restablece el microcontrolador ATmega. A su izquierda está el conector IOREF: Digital Reference input V, y a continuación un pin reservado para futuras finalidades.
      .tarjeta.color-secundario.text-white.p-3(x="45%" y="37%" numero="21")
        p TX y RX <em>LED</em>. Estos <em>LEDs</em> indican la comunicación entre la placa y el ordenador. Estos <em>leds</em> parpadearán rápidamente durante la carga de nuestros programas, así como durante la comunicación serie. Útil para la depuración (debugging).

      .tarjeta.color-secundario.text-white.p-3(x="55%" y="47%" numero="22")
        p Casa fabricante original. Aquí puedes comprobar fácilmente si tu placa se trata de una imitación o el original.
      .tarjeta.color-secundario.text-white.p-3(x="46%" y="30%" numero="23")
        p Pin 13 + L (<em>on board led</em>): el único actuador incorporado a la placa. Además de ser un objetivo práctico para nuestra primera práctica de encender y apagar <em>LED</em>, este <em>LED</em> es muy útil para la depuración (<em>debugging</em>).
      .tarjeta.color-secundario.text-white.p-3(x="40%" y="50%" numero="24")
        p Reloj / <em>Crystal</em> 16 Mhz oscilador: se usa como reloj externo en el montaje del Arduino.
    h4 Ventajas de Arduino
    .row.mb-5.justify-content-center
      .col-lg-6
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-4
              img(src='@/assets/curso/40.svg')
            .col-lg-8
              h4 Costo
              p Los tableros de Arduino son menos costosos comparados con otros dispositivos como microcontroladores.
          .row.justify-content-center.align-items-center
            .col-lg-8
              h4 Plataforma
              p El <em>software</em> de Arduino (IDE) es compatible con la mayoría de sistemas operativos como <em>Macintosh OSX, Windows , Linux</em> 
            .col-4
              img(src='@/assets/curso/41.svg')
          .row.justify-content-center.align-items-center
            .col-4
              img(src='@/assets/curso/42.svg')
            .col-lg-8
              h4 Fácil de usar 
              p El <em>software</em> de Arduino (IDE) es fácil de usar, además tiene flexibilidad para programadores expertos.
          .row.justify-content-center.align-items-center
            .col-lg-8
              h4 Código abierto
              p El Arduino es un <em>software</em> de código abierto que puede ser programado con lenguajes C, C++, AVR-C  
            .col-4
              img(src='@/assets/curso/43.svg')






</template>

<script>
export default {
  name: 'Tema2',
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
.bloque-texto-g.color-primario
  height: 319px
  .bloque-texto-g__texto
    display: flex
    align-items: center
.icono-hover
  overflow: hidden
  img:first-child
    display: block
  img:last-child
    display: none
  &:hover
    img:first-child
      display: none
    img:last-child
      display: block
.img-infografica.color-secundario .img-infografica__item__numero
  color: white
</style>
