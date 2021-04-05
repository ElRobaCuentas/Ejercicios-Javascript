let numeros = [2, 4, 6, 7, 3, 9, 5]

const duSum = () => {
    let duplicar = numeros.map(( pocoyo ) => {
        return pocoyo*2
    });
    console.log("duplciacion", duplicar)

    let sumarValor = duplicar.reduce((acumulador, suma) => {
        return acumulador = acumulador + suma
    })
    console.log("suma de todos los valores", sumarValor)
}

duSum(numeros)

/////////////////////////////////////////////////////////////////

let palabras = ["hacer", "comer", "correr", "mama", "coco", "rompe", "trotar", "romper", "rooster"]

const rimaPalabras = (verbo) => {
    let rikiRima = palabras.filter((hercules) => {
        let rimaRi = hercules.endsWith('er')
        return rimaRi
    })
    console.log("palabras que riman", rikiRima)
}

rimaPalabras(palabras)

/////////////////////////////////////////////////////////////////

let user = [
    {
        "name": "juan",
        "user": "juan.jesus",
        "password": "juan123"    
    },
    {
        "name": "daniel",
        "user": "carlos.daniel",
        "password": "daniel123"
    },
    {
        "name": "ezequiel123",
        "user": "carlos.ezequiel",
        "password": "ezequiel123"
    }
]

const validarUsuario = (pulga) => {
    let traerUP = user.filter( elemento => {
        if(elemento.name === elemento.user && elemento.password) {
            return elemento;
        } else {
            console.log("aun no se valido ningun usuario")
        }
    })  
    console.log("validación de usuario", traerUP)
}

validarUsuario("juan")

////////////////////////////////////////////////////////////////////