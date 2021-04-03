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
let arrayNumeros = [ 20, 21, 23, 50]

const obtenerNumerosImpares = (arregloNumeros) => {
    let impares = arregloNumeros.filter((numero) => {
        if(numero % 2 === 1 ) {
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
    for ( i = 0; i < veces; i++) {
        console.log("hola mundo")
    }
}

// cantidadNumeros(5);


////////////////////////////*ORDENAR NUMEROS DE MENOS A MAYOR*//////////////////////////////////////////////
let numeros = [ 26, 234, 5, 50, 21, 10, 4, 9, 23, 18]

const ordenarNumeros = (numeros) => {
    let arreglados = numeros.sort((a, b) => a - b ) ;
    console.log("ordenar", arreglados)    
}

// ordenarNumeros(numeros);


////////////////////////////*HACIENDO LA LÓGICA DEL LA FUNCIÓN "sort" -> ordenar números (METODO DE BURBUJA)*//////////////////////////////////////////////
let arr = [34, 3, 67, 23, 7, 46]

const ordenar = (arreglo) => {
    let aux;
    for( let i = 0; i<arreglo.length-1; i++) {
        for( let j = i+1; j<arreglo.length; j++) {
            if(arreglo[j] < arreglo[i]) {
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
    let multiplicacionNumeros = sumaMul.map( num => {
        return num*2
    }) 
    let sumarNumeros = multiplicacionNumeros.reduce( (suma, mul) => suma + mul )  
    console.log("SUMA DE NUMEROS DEL ARREGLO DUPLICADO: ", sumarNumeros)
}

// sumarMultiplicarNumero(multiplicarSumar);


////////////////////////////*ENCONTRAR PALABRAS QUE RIMEN*//////////////////////////////////////////////
let rimaPalabras = ["Romper", "Hacer", "Tropezar", "Tomar", "Agua", "Entretener", "Correr", "Tongo", "Tecla", "Tocer", "Tizer", "Master"]

const HacerRimaPalabras = (rimas) => {  
    let palabrasER = rimas.filter( numero  => {
        let palabras = numero.endsWith("er");
        if(palabras) {
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
        if(cadaElemento === texto) {
            return true; 
        }
    })
    if(filtarPalabra.length > 0) {
        console.log("La palabra ingresada existe: ", filtarPalabra)
    } else {
        console.log("La palabra no existe en el texto: ", filtarPalabra);
    }
}

// searchPalabras("sexto");


////////////////////////////*SUMAR LAS EDADES DE LOS USUARIOS MAYORES DE 13 AÑOS*//////////////////////////////////////////////
let array = [
    {
      id: 1,
      name: "gian",
      edad: 10
    },
    {
      id: 1,
      name: "gian",
      edad: 11
    },
    {
      id: 1,
      name: "gian",
      edad: 12
    },
    {
      id: 1,
      name: "gian",
      edad: 13
    },
    {
      id: 1,
      name: "gian",
      edad: 14
    },
    {
      id: 1,
      name: "gian",
      edad: 15
    }
   ];
    
const sumarEdades = (edad) => {
    let filtrarSuma = edad.filter(( sumaSuma ) => {
        if(sumaSuma.edad > 13) {
            return true;
        } 
    })

    let sumarEdades = filtrarSuma.reduce((acumulador, suma) => {
        acumulador = acumulador + suma.edad;
        return acumulador;
    }, 0)
    console.log("Suma de las edades de usuarios mayores de 13 años: ", sumarEdades)
}

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
const validarFecha = (x) => {
    let date = new Date(x)
    
    let objeto = {
        mes: date.getMonth()+1,
        dia: date.getDate(), 
        año: date.getFullYear()
    };
    console.log("Resultado fecha:", objeto)
}  

// validarFecha("4/21/2038")


////////////////////////////*ECUCACION ( f(x) = x▼2 + raiz(x) + (x/2) )*//////////////////////////////////////////////
const resolverEcuacion = (x) => {
    let primero = x * x; 
    let segundo = Math.sqrt(x);
    let tercero = x / 2;
    let resultado = primero + segundo + tercero;
    console.log("ecuacion", resultado)
}

// resolverEcuacion(2)


////////////////////////////*ENCRIPTAR Y DESENCRIPTAR PALABRA*//////////////////////////////////////////////

const encriptarPalabra = (encriptarNombre) => {
    let invertirPalabraEncript = encriptarNombre.split('');
    let invertirPalabraEncriptTwo = invertirPalabraEncript.reverse();
    let agregarLetra = invertirPalabraEncriptTwo.map( (palabra, index) => {
        let unaLetra = encriptarNombre
        let sumar = index+1
        return palabra + sumar;

    }) 
    console.log("palabra encriptada", agregarLetra.join(''))
}

const desencriptarPalabraNombre = (desencriptarNombre) => {
    let invertirPalabraDes = desencriptarNombre.split('');
    let invertirPalaDestTwo = invertirPalabraDes.reverse();
    let encript = invertirPalaDestTwo.filter(( primeraPalabra ) => {
        let convertirNumero = Number(primeraPalabra)
        return !convertirNumero      
    });
    console.log("desencriptacion", encript.join(''))
}

// encriptarPalabra("giancarlo")
// desencriptarPalabraNombre("o1l2r3a4c5n6a7i8g9")


////////////////////////////*ENCRIPTAR Y DESENCRIPTAR PALABRA (calin)*//////////////////////////////////////////////
const encriptar = (palabra) => {
    let encript = palabra.split('').reverse();
    let encript2 = encript.map( (caracter, index) => {
      return `${caracter}${index+1}`;
    })
    console.log(`encriptado -> ${encript2.join('')}`);
}
  
const descencriptar = (palabra) => {
    let encript = palabra.split('')
    let encript2 = encript.filter( (caracter, index) => {
        return !Number(caracter)
    } )
    console.log(`encriptado -> ${encript2.reverse().join('')}`);
}
  
// encriptar("ezequiel");
// descencriptar("l1e2i3u4q5e6z7e8");


////////////////////////////*HALLAR EL TEOREMA DE PITAGORAS*//////////////////////////////////////////////

console.log("*TAREA*")

const teoremaPitagoras = (c, cc, h ) => {
    let catetoOne = c * c;
    let catetoTwo = cc * cc;
    let resultado = catetoOne + catetoTwo
    console.log("hipotenusa", resultado)

    let hipotenusa = h * h;
    let resultadoGeneral = Math.sqrt(resultado)
    console.log("resultado mayor", resultadoGeneral)
}

// teoremaPitagoras(1, Math.sqrt(3))


////////////////////////////*PROMEDIO DE NOTAS BASICO*//////////////////////////////////////////////

let notas = [10, 11, 12, 13, 12, 19, 17, 16, 13, 05, 01, 01]

const promedioNotas = (nota) => {
    let promediarNotas = notas.reduce((acumulador, sumar) => {
        acumulador = acumulador + sumar;
        return acumulador;
    });

    let calcularElementos = notas.length
    let sumako = promediarNotas / calcularElementos
    console.log("mi promedio es:", sumako) 
}

// promedioNotas(notas)