/*ÁREA DE UN CIRCULO*/

// const areaCirculo = (radio) => {
//     let pi = 3.14;

//     let multiplicacion = radio * radio;

//     let area = pi * multiplicacion;
//     console.log("el area es:", area)
// }

// areaCirculo(35);

// const areaRectangulo = (base, altura) => {

//     let area = base * altura;

//     console.log("el area es", area);
// }

// areaRectangulo(4, 9);

// volumenCubo = (altura, ancho, largo) => {
//     if (typeof (largo) === "string") {
//         console.log("el dato esta mal")
//     } else {
//         let volumen = altura * ancho * largo;
//         console.log("el volumen de un cubo es:", volumen);
//     }
// }
// volumenCubo(19, 15, 12);

/////////////////////////////////////////////////////////////

/*PARTIR UNA PALABRA*/

// let numeros = [34, 12, 6, 2, 17, 89, 7, 14, 60, 2]

// numeros.forEach(( numbers ) => {
//     if(numbers > 1 ) {
//         console.log("si es mayor:", numbers)
//         } 
//     })


//////////////////////////////*FILTRAR SOLO NUMEROS IMPARES*//////////////////////////////////////////


// let numeros = [ 20, 21, 23, 50]
// // let resultado = [ 21, 75, 57, 37, 45]

// const obtenerNumerosImpares = (arregloNumeros) => {
//     let impares = arregloNumeros.filter((numero) => {
//         if(numero % 2 === 1 ) {
//             console.log(numero)
//             return true;
//         }
//     })   
//     console.log("IMAPRES", impares)     
// }

// obtenerNumerosImpares(numeros);

//////////////////////////////////////////////////////////////////////////


//////////////////*SEPARACION DE UN NOMBRE*//////////////////////////////////////////////////////


const separacionNombre = (nombreHola) => {

    let cantidadCaracteres = nombreHola.length;

    let separacionNombreOne = nombreHola.slice(cantidadCaracteres / 2, cantidadCaracteres);
    let separacionNombreTwo = nombreHola.slice(0, cantidadCaracteres / 2);
    console.log("primera parte", separacionNombreTwo);
    console.log("segunda parte", separacionNombreOne);
}

separacionNombre("giancarlo");


//////////////////////////////////////////////////////////////////////////


////////////////////////////*CUENTAS VECES QUIERO QUE ME APAREZCA LA VARIABLE*//////////////////////////////////////////////

let numerosCantidades = [{"numero:": 5}]

const cantidadNumeros = (veces) => {
    for ( i = 0; i < veces; i++) {
        console.log("5")
    }
}

cantidadNumeros(5);

//////////////////////////////////////////////////////////////////////////


////////////////////////////*ORDENAR NUMEROS*//////////////////////////////////////////////

let numeros = [ 26, 234, 5, 50, 21, 10, 4, 9, 23, 18]

// const ordenarNumeros = (numeros) => {
//     let arreglados = numeros.sort((numeroArreglados) => {
//                 if(numeroArreglados > 1) {
//                     console.log("numeros", numeroArreglados)
//                 }
//             })   
//             console.log("numeros ordenados", arreglados)
// }

const ordenarNumeros = (numeros) => {
    let arreglados = numeros.sort((a, b) => a - b ) ;
    console.log("ordenar", arreglados)    
}

ordenarNumeros(numeros);

//////////////////////////////////////////////////////////////////////////


////////////////////////////*INVERTIR UNA PALABRA*//////////////////////////////////////////////

const invertirPalabra = (tuko) => {
    let invertirString = tuko.split('');
    console.log("invertir palabra", invertirString)

    let invetirStringTwo = invertirString.reverse();
    console.log("inversion", invetirStringTwo)
}

invertirPalabra("palabra");

//////////////////////////////////////////////////////////////////////////


////////////////////////////*DUPLICAR UN ARREGLO Y DESPUES SUMARLO*//////////////////////////////////////////////

let multiplicarSumar = [4, 6, 10]

const sumarMultiplicarNumero = (sumaMul) => {
    let multiplicacionNumeros = sumaMul.map( num => {
        return num*2
    }) 
    console.log(multiplicacionNumeros)

    let sumarNumeros = multiplicacionNumeros.reduce( (suma, mul) => suma + mul )  
    console.log(sumarNumeros)
}

sumarMultiplicarNumero(multiplicarSumar);

//////////////////////////////////////////////////////////////////////////


////////////////////////////*ENCONTRAR PALABRAS QUE RIMEN*//////////////////////////////////////////////

let rimaPalabras = ["Romper", "Hacer", "Tropezar", "Tomar", "Agua", "Entretener", "Correr", "Tongo", "Tecla", "Tocer", "Tizer", "Master"]

const HacerRimaPalabras = (rimas) => {
    
    let palabrasER = rimas.filter( numero  => {

        let palabras = numero.endsWith("er");
        // console.log("rima", palabras);
        
        if(palabras) {
            return palabras;
        }
    })
    console.log("rima de palabras", palabrasER)
}

HacerRimaPalabras(rimaPalabras);

//////////////////////////////////////////////////////////////////////////


////////////////////////////*BSUCADOR DE PALABRAS*//////////////////////////////////////////////

let buscadorPalabras = `Bedtime Stories es el sexto álbum de estudio de la cantante cantante estadounidense Madonna, publicado por primera vez el 21 de octubre de 1994 por las compañías Maverick, Sire y Warner Bros. Records. Para la producción, colaboró con Dallas Austin, Babyface, Dave «Jam» Hall y Nellee Hooper con el objetivo de cambiar a un sonido más convencional y atenuar su imagen pública, tras enfrentar respuestas negativas crítica y comercialmente por proyectos sexualmente explícitos en 1992, especialmente con el álbum Erotica y el libro Sex. El lanzamiento del sencillo «I'll Remember» en marzo de 1994, para la banda sonora del filme With Honors, marcó el comienzo de esta nueva transformación y continuó con Bedtime Stories. De géneros pop y R&B, las letras exploran temas como el amor, la tristeza y el romance, pero con un enfoque más suave y reflexivo. No obstante, en otras canciones aborda la polémica en relación con sus trabajos anteriores, lo que los críticos analizaron como autobiográfico. Madonna también quería explorar la música club británica, cuyos géneros como el dub habían ganado popularidad, por lo que trabajó con la cantante islandesa Björk.`

const searchPalabras = (texto) => { 
    let search = buscadorPalabras.split(' ');
    console.log("search", search)

    let filtarPalabra = search.filter((cadaElemento) => {
        if(cadaElemento === texto) {
            return true; 
        }
    })

    console.log("hola", filtarPalabra)

    if(filtarPalabra.length > 0) {
        console.log("si me retorna algo", filtarPalabra)
    } else {
        console.log("no me retorna nada", filtarPalabra);
    }
}

searchPalabras("sexto");

//////////////////////////////////////////////////////////////////////////


////////////////////////////*HACIENDO LA LÓGICA DEL LA FUNCIÓN "sort" -> ordenar números*//////////////////////////////////////////////

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
    console.log("final", arreglo)
}

ordenar(arr)


//////////////////////////////////////////////////////////////////////////


////////////////////////////*HACIENDO LA LÓGICA DEL LA FUNCIÓN "sort" -> ordenar números*//////////////////////////////////////////////

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

        console.log("sumaSuma", filtrarSuma)
        

        let sumarEdades = filtrarSuma.reduce((acumulador, suma) => {
          acumulador = acumulador + suma.edad;
          return acumulador;
        }, 0)
        console.log("suma", sumarEdades)
  }

sumarEdades(array);
  

//////////////////////////////////////////////////////////////////////////


////////////////////////////*VALIDAR USUARIO*//////////////////////////////////////////////

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
    //  console.log("user", entrarUsuario)

     if(entrarUsuario.length > 0) {
        console.log("usted se registro en nuesta base de datos", entrarUsuario)
    } else {
        console.log("el usuario o contraseña no existe", entrarUsuario);
    }
}  

validarUser("junior", "junior123qw")

//////////////////////////////////////////////////////////////////////////


////////////////////////////*RETORNAR LA FECHA EN UN OBJETO*//////////////////////////////////////////////

const validarFecha = (x) => {
    let date = new Date(x)
    console.log("fecha variable:", date)
    
    let objeto = {
        mes: date.getMonth()+1,
        dia: date.getDate(), 
        año: date.getFullYear()
    };
    console.log("Resultado fecha:", objeto)
}  

validarFecha("4/21/2038")

//////////////////////////////////////////////////////////////////////////


////////////////////////////*ECUCACION*//////////////////////////////////////////////

const resolverEcuacion = (x) => {
    let primero = x * x; 
    let segundo = Math.sqrt(x);
    let tercero = x / 2;
    let resultado = primero + segundo + tercero;
    console.log("ecuacion", resultado)
}

resolverEcuacion(2)

//////////////////////////////////////////////////////////////////////////


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

encriptarPalabra("giancarlo")
desencriptarPalabraNombre("o1l2r3a4c5n6a7i8g9")
//////////////////////////////////////////////////////////////////////////