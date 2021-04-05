////////////////////////////*AREA DE UN CIRCULO*//////////////////////////////////////////////
const areaCirculo = (radio) => {
    let pi = 3.14;
    let multiplicacion = radio * radio;
    let area = pi * multiplicacion;
    console.log("el area es:", area)
}

// areaCirculo(35);


////////////////////////////*AREA DE UN RECTANGULO*//////////////////////////////////////////////
const areaRectangulo = (base, altura) => {
    let area = base * altura;
    console.log("el area es", area);
}

// areaRectangulo(4, 9);


////////////////////////////*AREA DE UN CUBO*//////////////////////////////////////////////
const volumenCubo = (altura, ancho, largo) => {
    if (typeof (largo) === "string") {
        console.log("el dato esta mal")
    } else {
        let volumen = altura * ancho * largo;
        console.log("el volumen de un cubo es:", volumen);
    }
}

// volumenCubo(19, 15, 12);


//////////////////////////////*FILTRAR SOLO NUMEROS IMPARES*//////////////////////////////////////////
let arrayNumeros = [20, 21, 23, 50]

const obtenerNumerosImpares = (arregloNumeros) => {
    let impares = arregloNumeros.filter((numero) => {
        if (numero % 2 === 1) {
            console.log(numero)
            return true;
        }
    })
    console.log("NUMEROS INPARES: ", impares)
}

// obtenerNumerosImpares(arrayNumeros);


////////////////////////////*PARTIR A LA MITAD UNA PALABRA*//////////////////////////////////////////////
const separacionNombre = (nombreHola) => {
    let cantidadCaracteres = nombreHola.length;
    let separacionNombreOne = nombreHola.slice(cantidadCaracteres / 2, cantidadCaracteres);
    let separacionNombreTwo = nombreHola.slice(0, cantidadCaracteres / 2);
    console.log("primera parte", separacionNombreTwo);
    console.log("segunda parte", separacionNombreOne);
}

// separacionNombre("giancarlo");


////////////////////////////*MOSTRAR X VECES UNA PALABRA ("hola mundo")*//////////////////////////////////////////////
const cantidadNumeros = (veces) => {
    for (i = 0; i < veces; i++) {
        console.log("hola mundo")
    }
}

// cantidadNumeros(5);


////////////////////////////*ORDENAR NUMEROS DE MENOS A MAYOR*//////////////////////////////////////////////
let numeros = [26, 234, 5, 50, 21, 10, 4, 9, 23, 18]

const ordenarNumeros = (numeros) => {
    let arreglados = numeros.sort((a, b) => a - b);
    console.log("ordenar", arreglados)
}

// ordenarNumeros(numeros);


////////////////////////////*HACIENDO LA LÓGICA DEL LA FUNCIÓN "sort" -> ordenar números (METODO DE BURBUJA)*//////////////////////////////////////////////
let arr = [34, 3, 67, 23, 7, 46]

const ordenar = (arreglo) => {
    let aux;
    for (let i = 0; i < arreglo.length - 1; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[j] < arreglo[i]) {
                aux = arreglo[i]
                arreglo[i] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    console.log("Numeros ordenados de menos a mayor a menor", arreglo)
}

// ordenar(arr)


////////////////////////////*INVERTIR UNA PALABRA*//////////////////////////////////////////////
const invertirPalabra = (tuko) => {
    let invertirString = tuko.split('');
    let invetirStringTwo = invertirString.reverse();
    console.log("Palabra invertida", invetirStringTwo)
}

// invertirPalabra("palabra");


////////////////////////////*DUPLICAR LOS VALORES DEL ARREGLO Y DESPUES SUMARLO*//////////////////////////////////////////////
let multiplicarSumar = [4, 6, 10]

const sumarMultiplicarNumero = (sumaMul) => {
    let multiplicacionNumeros = sumaMul.map(num => {
        return num * 2
    })
    let sumarNumeros = multiplicacionNumeros.reduce((suma, mul) => suma + mul)
    console.log("SUMA DE NUMEROS DEL ARREGLO DUPLICADO: ", sumarNumeros)
}

// sumarMultiplicarNumero(multiplicarSumar);


////////////////////////////*ENCONTRAR PALABRAS QUE RIMEN*//////////////////////////////////////////////
let rimaPalabras = ["Romper", "Hacer", "Tropezar", "Tomar", "Agua", "Entretener", "Correr", "Tongo", "Tecla", "Tocer", "Tizer", "Master"]

const HacerRimaPalabras = (rimas) => {
    let palabrasER = rimas.filter(numero => {
        let palabras = numero.endsWith("er");
        if (palabras) {
            return palabras;
        }
    })
    console.log("PALABRA QUE RIMEN: ", palabrasER)
}

// HacerRimaPalabras(rimaPalabras);


////////////////////////////*BUSCADOR DE PALABRAS*//////////////////////////////////////////////
let buscadorPalabras = `Bedtime Stories es el sexto álbum de estudio de la cantante cantante estadounidense Madonna, publicado por primera vez el 21 de octubre de 1994 por las compañías Maverick, Sire y Warner Bros. Records. Para la producción, colaboró con Dallas Austin, Babyface, Dave «Jam» Hall y Nellee Hooper con el objetivo de cambiar a un sonido más convencional y atenuar su imagen pública, tras enfrentar respuestas negativas crítica y comercialmente por proyectos sexualmente explícitos en 1992, especialmente con el álbum Erotica y el libro Sex. El lanzamiento del sencillo «I'll Remember» en marzo de 1994, para la banda sonora del filme With Honors, marcó el comienzo de esta nueva transformación y continuó con Bedtime Stories. De géneros pop y R&B, las letras exploran temas como el amor, la tristeza y el romance, pero con un enfoque más suave y reflexivo. No obstante, en otras canciones aborda la polémica en relación con sus trabajos anteriores, lo que los críticos analizaron como autobiográfico. Madonna también quería explorar la música club británica, cuyos géneros como el dub habían ganado popularidad, por lo que trabajó con la cantante islandesa Björk.`

const searchPalabras = (texto) => {
    let search = buscadorPalabras.split(' ');
    let filtarPalabra = search.filter((cadaElemento) => {
        if (cadaElemento === texto) {
            return true;
        }
    })
    if (filtarPalabra.length > 0) {
        console.log("La palabra ingresada existe: ", filtarPalabra)
    } else {
        console.log("La palabra no existe en el texto: ", filtarPalabra);
    }
}

// searchPalabras("sexto");


////////////////////////////*SUMAR LAS EDADES DE LOS USUARIOS MAYORES DE 13 AÑOS*//////////////////////////////////////////////
// let array = [
//     {
//       id: 1,
//       name: "gian",
//       edad: 10
//     },
//     {
//       id: 1,
//       name: "gian",
//       edad: 11
//     },
//     {
//       id: 1,
//       name: "gian",
//       edad: 12
//     },
//     {
//       id: 1,
//       name: "gian",
//       edad: 13
//     },
//     {
//       id: 1,
//       name: "gian",
//       edad: 14
//     },
//     {
//       id: 1,
//       name: "gian",
//       edad: 15
//     }
//    ];

// const sumarEdades = (edad) => {
//     let filtrarSuma = edad.filter(( sumaSuma ) => {
//         if(sumaSuma.edad > 13) {
//             return true;
//         } 
//     })

//     let sumarEdades = filtrarSuma.reduce((acumulador, suma) => {
//         acumulador = acumulador + suma.edad;
//         return acumulador;
//     }, 0)
//     console.log("Suma de las edades de usuarios mayores de 13 años: ", sumarEdades)
// }

// sumarEdades(array);


////////////////////////////*VALIDAR USUARIO (user y password)*//////////////////////////////////////////////
let userLogin = [
    {
     user: "juan",
      password: "juan123",
      edad: 14
    },
    {
     user: "daniel",
      password: "daniel123",
      edad: 12
    },
    {
     user: "calin",
      password: "calin123",
      edad: 60
    },
    {
     user: "ezequiel",
      password: "ezequiel123",
      edad: 13
    },
    {
     user: "hilda",
      password: "hilda123",
      edad: 59
    },
    {
      user: "junior",
      password: "junior123",
      edad: 48
    }
   ];

const validarUser = (usuario, contraseña) => {
    let entrarUsuario = userLogin.filter(( login ) => {
        if(login.user === usuario && login.password === contraseña) {
            return true;
         }
    });

    if(entrarUsuario.length > 0) {
        console.log("usted se registro en nuesta base de datos", entrarUsuario)
    } else {
        console.log("el usuario o contraseña no existe", entrarUsuario);
    }
}  

// validarUser("junior", "junior123qw")


////////////////////////////*RETORNAR LA FECHA EN UN OBJETO { MES, DIA, AÑO}  *//////////////////////////////////////////////
// const validarFecha = (x) => {
//     let date = new Date(x)

//     let objeto = {
//         mes: date.getMonth()+1,
//         dia: date.getDate(), 
//         año: date.getFullYear()
//     };
//     console.log("Resultado fecha:", objeto)
// }  

// validarFecha("4/21/2038")


////////////////////////////*ECUCACION ( f(x) = x▼2 + raiz(x) + (x/2) )*//////////////////////////////////////////////
// const resolverEcuacion = (x) => {
//     let primero = x * x; 
//     let segundo = Math.sqrt(x);
//     let tercero = x / 2;
//     let resultado = primero + segundo + tercero;
//     console.log("ecuacion", resultado)
// }

// resolverEcuacion(2)


////////////////////////////*ENCRIPTAR Y DESENCRIPTAR PALABRA*//////////////////////////////////////////////

const encriptarPalabra = (encriptarNombre) => {
    let invertirPalabraEncript = encriptarNombre.split('');
    let invertirPalabraEncriptTwo = invertirPalabraEncript.reverse();
    let agregarLetra = invertirPalabraEncriptTwo.map((palabra, index) => {
        let unaLetra = encriptarNombre
        let sumar = index + 1
        return palabra + sumar;

    })
    console.log("palabra encriptada", agregarLetra.join(''))
}

const desencriptarPalabraNombre = (desencriptarNombre) => {
    let invertirPalabraDes = desencriptarNombre.split('');
    let invertirPalaDestTwo = invertirPalabraDes.reverse();
    let encript = invertirPalaDestTwo.filter((primeraPalabra) => {
        let convertirNumero = Number(primeraPalabra)
        return !convertirNumero
    });
    console.log("desencriptacion", encript.join(''))
}

// encriptarPalabra("giancarlo")
// desencriptarPalabraNombre("o1l2r3a4c5n6a7i8g9")


////////////////////////////*ENCRIPTAR Y DESENCRIPTAR PALABRA (calin)*//////////////////////////////////////////////
// const encriptar = (palabra) => {
//     let encript = palabra.split('').reverse();
//     let encript2 = encript.map( (caracter, index) => {
//       return `${caracter}${index+1}`;
//     })
//     console.log(`encriptado -> ${encript2.join('')}`);
// }

// const descencriptar = (palabra) => {
//     let encript = palabra.split('')
//     let encript2 = encript.filter( (caracter, index) => {
//         return !Number(caracter)
//     } )
// console.log(`encriptado -> ${encript2.reverse().join('')}`);
// }

// encriptar("ezequiel");
// descencriptar("l1e2i3u4q5e6z7e8");


////////////////////////////*HALLAR EL TEOREMA DE PITAGORAS*//////////////////////////////////////////////

// console.log("*TAREA*")

// const teoremaPitagoras = (c, cc, h ) => {
//     let catetoOne = c * c;
//     let catetoTwo = cc * cc;
//     let resultado = catetoOne + catetoTwo
//     console.log("hipotenusa", resultado)

//     let hipotenusa = h * h;
//     let resultadoGeneral = Math.sqrt(resultado)
//     console.log("resultado mayor", resultadoGeneral)
// }

// teoremaPitagoras(1, Math.sqrt(3))


////////////////////////////*PROMEDIO DE NOTAS BASICO*//////////////////////////////////////////////

// let notas = [12, 14, 15, 20]

// const promedioNotas = (notaNota) => {
//     let promediarNotas = notaNota.reduce(( acumulador, proko) => {
//         acumulador = acumulador + proko
//         return acumulador
//     });
//     console.log("holaaa", promediarNotas)

//     let calcularNota = notas.length;
//     console.log("lol", calcularNota)

//     let sumarNotas = calcularNota / promediarNotas
//     console.log("calcule todo", sumarNotas)
// }

// promedioNotas(notas)


////////////////////////////*PROMEDIO DE NOTAS BASICO*//////////////////////////////////////////////

// let notas = [10, 11, 12, 13, 12, 19, 17, 16, 13, 05, 01, 01]

// const promedioNotas = (nota) => {
//     let promediarNotas = notas.reduce((acumulador, sumar) => {
//         acumulador = acumulador + sumar;
//         return acumulador;
//     });

//     let calcularElementos = notas.length
//     let sumako = promediarNotas / calcularElementos
//     console.log("mi promedio es:", sumako) 
// }

// promedioNotas(notas)


////////////////////////////*MULTIPLICAR LOS DIGITOS DE UN STRING*//////////////////////////////////////////////

// console.log("2 new ejercices")


// let numberString = "681121331"

// const multiplicarString = (coco) => {
//     let numeros = coco.split('');
//     console.log("coco", numeros)

//     let multiplicarNumeros = numeros.reduce((acumulador, cadaElementoString) => {
//                 let newNumber = Number(cadaElementoString)
//                 console.log("cada elemento", typeof(cadaElementoString))
//                 acumulador = acumulador * newNumber
//                 return acumulador;
//             });
//     console.log("multipplicacion de cada numero", multiplicarNumeros)
//     let numero = 2
//     // console.log("hola " + "mundo " + numero + " chau")
//     console.log(`hola mundo ${numero} chau`)
// }

// multiplicarString(numberString)


////////////////////////////*MULTIPLICAR LOS DIGITOS DE UN STRING*//////////////////////////////////////////////

console.log("1 new ejercice")

let validarValor = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

const sacarMigajas = (pichon) => {
    let filtrar = validarValor.filter((impares) => {
        if (impares.id % 2) {
            return true;
        }
    })
    console.log("solo impares", filtrar)

    let LALO = validarValor.map((restar) => {
        let mostarLL = restar.address.geo
        console.log("lat y long", mostarLL)

        return restar.address.geo.lat - restar.address.geo.lng
    })
    console.log("solo impares", LALO)

    let promediarSuma = LALO.reduce((acumulador, sumaSuma) => {
        acumulador = acumulador + sumaSuma;
        return acumulador;
    });
    console.log("suma de todo", promediarSuma)
}
// sacarMigajas()