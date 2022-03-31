export default {
  global: {
    componenteFormativo: 'Arquitectura IoT',
    descripcionCurso:
      'En este componente formativo aprenderemos a recopilar la señal de un sensor, procesarla y almacenarla en bases de datos en la nube; <b>el concepto de Internet de las Cosas es fundamental en nuestra era de la información</b> porque todo está conectado, desde simples bombillas hasta los sensores más sensibles',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es IoT?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Origen e importancia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Arquitectura IoT ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Componentes de IoT',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Raspberry Pi y Arduino',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: '¿Qué es Arduino Y Para Qué Sirve? ',
      link:
        'https://educarparaelcambio.com/arduino/que-es-arduino-y-para-que-sirve/',
    },
    {
      referencia:
        'Edureka. (2019). <em>Learn IoT In 4 Hours</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
    },
    {
      referencia:
        '<em>Fazt. (2020). Raspberry Pi</em>, Curso para principiantes [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ra6kNSIB1uA',
    },
    {
      referencia:
        '<em>Hindawi Journal of Electrical and Computer Engineering Volume 2017, Article ID 9324035, 25 pages.</em>',
      link: 'https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg',
    },
    {
      referencia:
        '<em>Init.</em> (2020). Arduino Curso Desde Cero con Ejemplos, Prácticas y Ejercicios. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=4yOZPsv9I2U',
    },
    {
      referencia:
        '<em>IoT Bytes Bits and Bytes of IoT.</em> 1 febrero de 2017.',
      link: 'https://iotbytes.wordpress.com',
    },
    {
      referencia:
        '<em>Rajesh S. Gehlot A., Raj Gupta, L., Singh B., Swain M. Internet of Things with Raspberry Pi and Arduino. 2020 Taylor & Francis Group</em>',
      link: '',
    },
    {
      referencia: '<em>RaspberrPi</em> y el IoT. ',
      link:
        'https://forum.huawei.com/enterprise/es/raspberry-pi-y-el-iot/thread/743013-100761',
    },
  ],
  glosario: [
    {
      termino: 'Actuador',
      significado:
        'Es un componente que emplea la energía recibida para activar el funcionamiento de un proceso automatizado.',
    },
    {
      termino: 'Arduino',
      significado:
        'Plataforma de desarrollo basada en una placa electrónica de <em>hardware</em> libre que incorpora un microcontrolador re-programable y una serie de pines hembra.',
    },
    {
      termino: 'IoT',
      significado: 'Internet de las cosas.',
    },
    {
      termino: 'Microcontrolador',
      significado:
        'Es un circuito integrado programable, capaz de ejecutar las órdenes grabadas en su memoria.',
    },
    {
      termino: 'M2M',
      significado:
        'Tecnología que permita que dos dispositivos intercambien información entre sí.',
    },
    {
      termino: 'OSI',
      significado:
        'Lenguaje universal de comunicación entre sistemas de redes informáticas. ',
    },
    {
      termino: '<em>Raspberry pi</em>',
      significado:
        'Ordenador de placa única u ordenadores de placa simple de bajo costo desarrollado en el Reino Unido por la <em>Raspberry Pi Foundation</em>',
    },
    {
      termino: 'Sensor',
      significado:
        'Dispositivo que está capacitado para detectar acciones o estímulos externos y responder en consecuencia.',
    },
    {
      termino: '<em>Smart cities</em>',
      significado: 'Ciudades inteligentes.',
    },
    {
      termino: '<em>Wearables</em>',
      significado:
        'Hace referencia al conjunto de aparatos y dispositivos electrónicos que se incorporan en alguna parte de nuestro cuerpo interactuando de forma continua con el usuario y con otros dispositivos con la finalidad de realizar alguna función concreta.',
    },
  ],
  complementario: [
    {
      texto: 'Edureka. (2019). Learn IoT In 4 Hours [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
    },
    {
      texto:
        'Fazt. (2020). Raspberry Pi, Curso para principiantes [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ra6kNSIB1uA',
    },
    {
      texto:
        'Init. (2020). Arduino Curso Desde Cero con Ejemplos, Prácticas y Ejercicios [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4yOZPsv9I2U',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Hector Henry Jurado Soto',
        cargo: 'Experto temático - Contratista',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca ',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital  ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Álvarez ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
