/* 
    * INPUT -> PROCESAR -> OUTPUT
    * ENTRAS -> PROCESAR -> SALIDA
    * funcion(INPUT) -> const funcion = (INPUT) => { PROCESAR -> return OUTPUT }
*/


// (15) -> RETORNAR LA FECHA EN UN OBJETO { MES, DIA, AÑO}
// let input = "1/25/2021"; output = { MES, DIA, AÑO };
// (18) -> TEOREMA DE PITAGORAS
// (22) -> PROMEDIO DE NOTAS BASICO
// let input = [12, 15, 14, 15]; output = "X";



//======================== NUEVOS EJERCICIOS ============================================
// (19) -> CANTIDAD DE DOBLECES DE UNA HOJA CUANTA DISTANCIA EN KM FORMA
// (20) -> TRANSFORMAR DE KM/HORA A METROS/SEGUNDO



//========================RETORNAR LA FECHA============================================
const returnFecha = (futuro) => {
    let fechurris = new Date(futuro)

    let presentarFecha = {
        mes: fechurris.getMonth()+1,
        dia: fechurris.getDate(), 
        año: fechurris.getFullYear()
    };
    console.log("fecha:", presentarFecha)
}  

returnFecha("5/10/2020")

////////////////////////////////////////////////////////////////


//========================TEOREMA DE PITAGORAS============================================
const teoremaPitagoras = (c1, c2) => {
    let catetoOne = c1 * c1;
    let catetoTwo = c2 * c2;
    let resultado = catetoOne + catetoTwo
    // let hipotenusa = h * h;
    // console.log("hipotenusa", hipotenusa)

    let resultadoHipotenusa = Math.sqrt(resultado)
    console.log("la hipotenusa es", resultadoHipotenusa)
}

teoremaPitagoras(3, 4)

////////////////////////////////////////////////////////////////


//========================PROMEDIO DE NOTAS============================================
let notas = [10, 11, 12, 13, 14]

const Notas = (nota) => {
    let promediarNotas = notas.reduce((acumulador, sumarNotas) => {
        acumulador = acumulador + sumarNotas;
        return acumulador;
    });

    let calcularElementos = notas.length
    let sumarrrrr = promediarNotas / calcularElementos
    console.log("mi promedio es:", sumarrrrr) 
}

Notas(notas)

////////////////////////////////////////////////////////////////