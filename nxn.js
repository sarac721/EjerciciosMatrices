// funcion para crear matriz 

let nLongitud = parseInt(prompt("Ingrese el numero de la logitud de la matriz"));


function crearMatriz (nLongitud){
    let matriz=[]
    for (let i = 0; i <nLongitud; i++) {
        matriz [i]= []
        for (let j = 0; j < nLongitud; j++) {
            matriz[i][j] = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]`))
           
        }   
    }
   return matriz
   

}
let matriz1 = crearMatriz(nLongitud)
let matriz2 = crearMatriz(nLongitud)

//funcion para mostrar 

function mostrarMatriz(matriz, nombre){
    console.log(`Matriz ${nombre}`)
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"))
        
    }
}
mostrarMatriz(matriz1, "1")
mostrarMatriz(matriz2, "2")

//funcion para sumar

function sumarMatriz(matriz1, matriz2){
    let result = []

    for(let i=0; i < matriz1.length; i++ ){
        result[i]=[]
        for(let j=0; j < matriz1.length; j++ ){
            result[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }
    return result
}

let result= console.log(sumarMatriz(matriz1, matriz2))



    
