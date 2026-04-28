const productos=[
    {
        id: '3001',
        categoria:'mesa',
        novedad: 'no',
        imagen: '/img/mesa/catan.webp',
        nombre: 'Catan',
        edad: 'Desde los 10 años',
        autor: 'Devir',
        descripcion: 'Catán es uno de los grandes clásicos de los juegos de mesa, en este somos conquistadores que llegan a una isla sin habitar, en esta vamos a extraer recursos los que nos permitirán construir pueblos, caminos y ciudades,las cuales nos darán puntos. ¡El primero que obtenga 10 puntos gana el juego!',
        descuento: 0,
        precio: 34990,
        stock: 5
    },  
    {
        id: '3002',
        categoria:'mesa',
        novedad: 'no',
        imagen: '/img/mesa/azul.webp',
        nombre: 'Azul - Master Chocolatier',
        edad: 'Desde los 8 años',
        autor: 'Next Move',
        descripcion: '',
        precio: 44990,
        descuento: 0,
        stock: 5
    },  
    {
        id: '3003',
        categoria:'mesa',
        novedad: 'si',
        imagen: '/img/mesa/munchkin.webp',
        nombre: 'Munchkin',
        edad: 'Desde los 10 años',
        autor: 'EDGE',
        descripcion: 'Baja al Dungeon. Mata todo lo que encuentres. Apuñala a tus amigos y quédate con sus cosas. Toma el tesoro y corre. Admítelo. Te encanta.',
        precio: 25990,
        descuento: 0,
        stock: 5
    },  
    {
        id: '3004',
        categoria:'mesa',
        novedad: 'no',
        imagen: '/img/mesa/monopoly.webp',
        nombre: 'Monopoly',
        edad: 'Desde los 8 años',
        autor: 'Hasbro',
        descripcion: '¡Hazte millonario en el juego de mesa más famoso del mundo! Con Monopoly Clásico, podrás comprar, vender, construir y cobrar rentas mientras compites con amigos y familiares para convertirte en el dueño absoluto del tablero. Estrategia, negociación y un poco de suerte con los dados decidirán quién será el verdadero magnate.',
        precio: 19900,
        descuento: 0,
        stock: 0
    }, 
    {
        id: '3005',
        categoria:'mesa',
        novedad: 'no',
        imagen: '/img/mesa/carcassone.webp',
        nombre: 'Carcassone',
        edad: 'Desde los 8 años.',
        autor: 'Devir',
        descripcion: 'Carcassonne es el juego de mesa moderno para los que quieren empezar con juegos estratégicos de verdad. Con un reglamento sencillo de aprender, cada decisión que tomas durante la partida influye en tus posibilidades de ganar. Mediante la colocación de losetas, los jugadores construyen caminos, ciudades y monasterios, y, cuando se acaban las losetas, el jugador que tiene más puntos gana la partida.',
        precio: 29990,
        descuento: 10,
        stock: 5
    },
    {
        id: '2001',
        categoria:'rol',
        novedad: 'si',
        imagen: '/img/rol/vampiro.webp',
        nombre: 'Vampiro',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'WoD',
        mundo: 'mdt',
        descripcion: 'Vampiro: La Mascarada 5ª Edición rompe con el clásico sistema de Mundo de Tinieblas, ofreciéndote una visión moderna de los cambios ocurridos en la sociedad vampí­rica durante los últimos años, llena de posibilidades para jugadores y directores de juego.',
        precio: 59990,
        descuento: 0,
        stock: 5
        },
    {
        id: '2002',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/hlobo.webp',
        nombre: 'Hombre Lobo',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'Wod',
        mundo: 'mdt',
        descripcion: 'Hombre Lobo presentó a los Garou: criaturas que eran al tiempo hombre y lobo, y que estaban llenas de Rabia contra los males que podian destruir y corromper tanto el mundo natural como el espiritual.  Los Garou combatieron muchos enemigos, sabiendo siempre que al final perderían. Pero ¡qué historias se narrarían y qué canciones se cantarían de sus hazañas!',
        precio: 59990,
        descuento: 0,
        stock: 2
    },
    {
        id: '2003',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/dndmaster.webp',
        nombre: 'D&D Manual del Master',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'WotC',
        mundo: 'dnd',
        descripcion: 'Prepárate para llevar tus aventuras de Dungeons & Dragons al siguiente nivel con la renovada Dungeon Master’s Guide 2024. Esta nueva edición del DMG ha sido reorganizada y ampliada para que dirigir partidas sea más accesible, entretenido e inmersivo, tanto para narradores nuevos como experimentados.',
        precio: 65990,
        descuento: 0,
        stock: 3
    },
    {
        id: '2004',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/dndjugador.webp',
        nombre: 'D&D Manual del Jugador',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'WotC',
        mundo: 'dnd',
        descripcion: 'El clásico manual se renovó, y ahora no solo trae armas brillantes: tiene alma moderna. La edición 2024 del Manual del Jugador llega con 384 páginas en tecnicolor, nuevas opciones de personajes, hechizos, herramientas y sorpresas para renovar tus campañas sin perder el fuego original.',
        precio: 65990,
        descuento: 0,
        stock: 6
    },
    {
        id: '2005',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/dndbrujaluz.webp',
        nombre: 'D&D Las Tierras mas allá de Brujaluz',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'WotC',
        mundo: 'dnd',
        descripcion: 'Una aventura extravagante y mágica para D&D. Cada ocho años, la feria Brujaluz aparece trayendo maravillas y fantasía, pero bajo su deslumbrante espectáculo se esconden secretos inquietantes. La feria sirve como portal hacia Prismalia, un dominio feérico vibrante pero en peligro, donde la belleza y el caos conviven.',
        precio: 49990,
        descuento: 0,
        stock: 9
    },
    {
        id: '2006',
        categoria:'rol',
        novedad: 'si',
        imagen: '/img/rol/l5r.webp',
        nombre: 'L5R',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'FFG',
        mundo: 'otro',
        descripcion: 'Como samurái del Imperio Esmeralda, tu deber reside en servir a tu señor, a tu Clan, y a tu Emperador. ¿Serás fiel a tu deber, sin importar los sacrificios que te exija? ¿O te mantendrás fiel a tu propio código de honor, incluso hasta la muerte?.',
        precio: 45990,
        descuento: 0,
        stock: 6
    },
    {
        id: '2007',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/confidencial.webp',
        nombre: 'Cthulhu Confidencial',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'EDGE',
        mundo: 'cth',
        descripcion: '¿Quieres sumergirte en los misterios lovecraftianos sin necesidad de reunir a todo un grupo para jugar? ¡Cthulhu Confidential™ es lo que necesitas! Cthulhu Confidential™ recrea el sistema GUMSHOE clásico para juegos de investigación con toda la emoción y la intensidad de las partidas a dos. Combina la oscuridad de la novela negra de detectives de los años 30 y el horror cósmico de los Mitos de Cthulhu de Lovecraft.',
        precio: 39990,
        descuento: 0,
        stock: 2
    },
    {
        id: '2008',
        categoria:'rol',
        novedad: 'si',
        imagen: '/img/rol/7mar.webp',
        nombre: '7mar',
        autor: 'NOSOLOROL',
        mundo: 'otro',
        edad: 'Jóvenes y adultos con criterio formado.',
        descripcion: 'Intrigas, exploración y aventura que tiene lugar en el continente de Théah, una tierra mágica y misteriosa inspirada en nuestra propia Europa del siglo XVII. Los personajes asumen el papel de héroes inmersos en conspiraciones internacionales y maquinaciones siniestras, héroes que protegen a los verdaderos reyes y reinas de Théah de malvados asesinos y que exploran antiguas ruinas de una raza desaparecida hace mucho.',
        precio: 54990,
        descuento: 0,
        stock: 8
    },
    {
        id: '2009',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/alien.webp',
        nombre: 'Alien',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'EDGE',
        mundo: 'otro',
        descripcion: 'Un universo de horror corporal y despiadadas ambiciones corporativas en el que individuos sintéticos juegan a ser Dios mientras transportistas espaciales y marines coloniales incuban criaturas de pesadilla en el interior de sus propios cuerpos. Es un universo cruel e implacable en el que todos sois prescindibles.',
        precio: 52990,
        descuento: 0,
        stock: 2
    }, 
    {
        id: '2010',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/changeling.webp',
        nombre: 'Changeling',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'WoD',
        mundo: 'mdt',
        descripcion: 'En Changeling: El Ensueño 20º Aniversario encontrarás todo un mundo de fantasía concentrado en el manual más completo de Mundo de Tinieblas. 500 páginas con toda la información de todos los Linajes de ediciones previas, incluyendo Selkies, Clurichaun y Piskies.',
        precio: 5990,
        descuento: 0,
        stock: 1
    },  
    {
        id: '2011',
        categoria:'rol',
        novedad: 'no',
        imagen: '/img/rol/forbidden.webp',
        nombre: 'Forbidden Lands',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'NOSOLOROL',
        mundo: 'otro',
        descripcion: 'Un nuevo enfoque de los juegos de rol de fantasía. Es un escenario completamente abierto en el que los héroes no siguen misiones dictadas por otros, sino que son saqueadoras y cazatesoros dispuestos a dejar su marca en un mundo maldito. Descubrie tumbas perdidas, lucha contra monstruos terribles y construye tu propia fortaleza.',
        precio: 59990,
        descuento: 0,
        stock: 5
    },
    {
        id: '2012',
        categoria:'rol',
        novedad: 'si',
        imagen: '/img/rol/librosper.webp',
        nombre: 'Los Libros Perdidos',
        edad: 'Para todo público.',
        autor: 'YO',
        mundo: 'otro',
        descripcion: 'Aventuras al mas puro estilo de Indiana Jones. Vuélvete un cazador de tesoros y llévalos a un museo, o véndelos al mejor postor... o tal vez, úsalos para tu propio beneficio.',
        precio: 19990,
        descuento:5,
        stock: 1000
    }, 
    {
        id: '2013',
        categoria:'rol',
        novedad: 'si',
        imagen: '/img/rol/strix.webp',
        nombre: 'Strixhaven Curriculum of Chaos',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'WotC',
        mundo: 'dnd',
        descripcion: 'Vive una campaña ambientada en la universidad de magia más prestigiosa del multiverso. Explora sus campus, estudia magia, vive amistades, rivalidades, misterios y peligros ocultos entre clases, aventuras estudiantiles y momentos inolvidables. Incluye nuevas opciones de personaje, lore, criaturas únicas y todo lo necesario para desarrollar una historia que combina vida académica, fantasía y emoción.',
        precio: 54990,
        descuento:0,
        stock: 1
    }, 
    {
        id: '1001',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/back.webp',
        nombre: 'We dont need roads: The Making of the Back to the Future Trilogy',
        edad: 'Desde los 14 años.',
        autor: 'Caseen Grines',
        descripcion: 'Un libro que detalla el proceso de producción y anécdotas detrás de la trilogía "Back to the Future", con entrevistas y material inédito.',
        precio:  21990,
        descuento: 0,
        stock: 1
    },
    {
        id: '1002',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/choque.webp',
        nombre: 'Choque de Reyes',
        edad: 'Adultos con criterio formado.',
        autor: 'George R.R. Martin',
        descripcion: 'Es el segundo libro de la saga de fantasía épica Canción de Hielo y Fuego escrita por George R.R. Martin. Publicada en 1998, la novela se sumerge en la guerra civil de los Siete Reinos tras la muerte del rey Robert Baratheon.',
        precio: 14990,
        descuento: 0,
        stock: 2
    },
    {
        id: '1003',
        categoria:'libros',
        novedad: 'si',
        imagen: '/img/libros/cochrane.webp',
        nombre: 'Cochrane vs Cthulhu',
        edad: 'Desde los 14 años.',
        autor: 'Gilberto Villarroel', 
        descripcion: 'Es una novela de mash-up que fusiona la historia naval napoleónica con el terror cósmico de H.P. Lovecraft. Ambientada en 1815, el legendario marino Lord Thomas Cochrane, prófugo británico, debe aliarse con sus enemigos franceses en el fuerte Boyard para combatir a Cthulhu.',
        precio: 17990,
        descuento: 0,
        stock: 3
    },
    {
        id: '1004',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/frontera.webp',
        nombre: 'Frontera Sur',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'Gillermo Parvex',
        descripcion: 'Novela histórica enfocada en el contexto político, comercial y de convivencia entre la república de Chile y la nación mapuche entre 1835 y 1859.',
        precio: 15990,
        descuento: 0,
        stock: 4
    },
    {
        id: '1005',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/kellerman.webp',
        nombre: 'El Misterio de los Estudios Kellerman',
        edad: 'Desde los 9 años.',
        autor: 'Ken Follet',
        descripcion: 'La Banda del Disfraz, un hábil grupo de atracadores de bancos, ha vuelto a hacer de las suyas. Mick Williams, un joven repartidor de periódicos, no se ha perdido ni un detalle de sus últimos robos en el oeste de Londres. ¡Es admirable cómo burlan a la policía gracias a su astucia y a sus particulares técnicas de maquillaje! Lo que Mick no sabe es que está mucho más cerca de la banda de lo que él cree...',
        precio: 11990,
        descuento: 0,
        stock: 5
    },
    {
        id: '1006',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/materia.webp',
        nombre: 'La Materia Oscura',
        edad: 'Desde los 12 años.',
        autor: 'Phillip Pullman',
        descripcion: 'Sigue a Lyra Belacqua en una aventura épica a través de mundos paralelos. Ambientada en un Oxford alternativo donde las almas humanas son animales llamados daimonion, la historia aborda la pérdida de la inocencia, la crítica a la religión organizada y la exploración de una misteriosa partícula llamada "Polvo".',
        precio: 17990,
        descuento: 0,
        stock: 6
    },
    {
        id: '1007',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/monica.webp',
        nombre: 'Mónica la niña daltónica y Federico el perro psicodélico',
        edad: 'Desde los 5 años.',
        autor: 'Gabriel Aiquel',
        descripcion: 'Un mágico encuentro se produce cuando la vida de Federico, un perro sin hogar por su peculiar forma de ser y  Mónica una niña con daltonismo,  se unen gracias al reconocimiento del valor de la aceptación.',
        precio: 3990,
        descuento: 0,
        stock: 5
    },
    {
        id: '1008',
        categoria:'libros',
        novedad: 'si',
        imagen: '/img/libros/orgullo.webp',
        nombre: 'Orgullo y Prejuicio + Zombies',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'Gabriel Aiquel',
        descripcion: 'Una versión paródica del clásico de Jane Austen, "Orgullo y Prejuicio", que agrega una invasión de zombis a la historia romántica.  El contenido incluye escenas sangrientas, violencia explícita y descripciones gráficas.',
        precio: 9990,
        descuento: 0,
        stock: 4
    },
    {
        id: '1009',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/sobrenatural.webp',
        nombre: 'Sobrenatural',
        edad: 'Desde los 16 años.',
        autor: 'Kiersten White',
        descripcion: 'Evie por fin ha encontrado la vida normal que siempre había deseado. Sin embargo, se sorprende al descubrir que lo normal puede ser muy aburrido. Justo cuando empieza a añorar sus días en la Agencia Internacional de Contención de lo Paranormal, recibe una llamada para colaborar de nuevo con esta.',
        precio: 19990,
        descuento: 0,
        stock: 3
    },
    {
        id: '1010',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/sonar.webp',
        nombre: 'Soñar no cuesta nada',
        edad: 'Desde los 4 años.',
        autor: 'Alberto Montt',
        descripcion: 'Un cuento reflexivo sobre la imaginación, ideal para niños que empiezan a explorar la lectura y disfrutan de las ilustraciones llamativas con humor ligero.',
        precio: 12990,
        descuento: 0,
        stock: 2
    },
    {
        id: '1011',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/asimovii.webp',
        nombre: 'Viaje Alucinante II', 
        edad: 'Desde los 12 años.',
        autor: 'Isaac Asimov',
        descripcion: 'Un eminente sabio, víctima de un intento de asesinato, yace en estado comatoso a causa de un coágulo cerebral. En su mente lleva un secreto de extraordinaria importancia para la supervivencia del mundo libre.  Una operación significaría su muerte. Entonces, un grupo de sabios resuelve miniaturizar a un equipo de médicos y técnicos, con todos sus aparatos, e inyectarlo en el sistema circulatorio del enfermo... Próxima parada: el cerebro.',
        precio: 10990,
        descuento: 0,
        stock: 2
    }, 
    {
        id: '1012',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/viajeros.webp',
        nombre: 'Viajeros de la noche',
        edad: 'Adultos con criterio formado.',
        autor: 'George R.R. Martin',
        descripcion: 'Este segundo volumen complementa lo mejor de la ciencia ficción de George R. R. Martin: relatos con escenarios futuristas y misiones espaciales extremas, el telón de fondo perfecto para extraterrestres que deben resolver situaciones absolutamente humanas.',
        precio: 11990,
        descuento: 0,
        stock: 7
    },
    {
        id: '1013',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/cieloenjaulado.webp',
        nombre: 'El cielo Enjaulado',
        edad: 'Jóvenes y adultos con criterio formado.',
        autor: 'Christine Leunens',
        descripcion: 'Johannes es un niño cuando Austria es anexionada al Tercer Reich y es seducido por la doctrina de Hitler. A las pocas semanas descubre que sus padre esconden a una joven judía, Elsa. Pocoa poco Johannes acaba enamorándose de ella de un modo tan enfermizo que se convierte en su obsesión.',
        precio: 6990,
        descuento: 0,
        stock: 8
    },
    {
        id: '1014',
        categoria:'libros',
        novedad: 'no',
        imagen: '/img/libros/walts.webp',
        nombre: 'Walts Imagination',
        edad: 'Desde los 6 años.',
        autor: 'Doreen Rapaport',
        descripcion: 'Forma parte de la galardonada serie Big Words, que se caracteriza por entrelazar citas directas del protagonista con una narrativa fluida para acercar figuras históricas a los lectores jóvenes.',
        precio: 6990,
        descuento: 0,
        stock: 6
    }
]

let error = false

export const getProducts =()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (error) {
                reject ('No hay datos')
            }else{
                resolve(productos)
            }    
        },2000)
    })
}

export const getOneProduct =(id)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (error) {
                reject ('No hay datos')
            }else{
                let prod= productos.find((prd)=> prd.id === id)
                resolve(prod)
            }    
        },2000)
    })
}