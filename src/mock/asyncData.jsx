const productos=[
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