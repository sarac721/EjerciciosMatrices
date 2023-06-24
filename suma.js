function suma (matriz1, matriz2){
    let resultado = []
    for (let i=0; i<matriz1.length; i++ ){
        let fila = []
        for (let j=0; j<matriz1[i].length; j++){
        fila.push(matriz1[i][j] +matriz2[i][j]) 

        }
        resultado.push(fila)
    }
    return resultado;

}
let matriz1 =[[1,2,3],[4,5,6],[7,8,9]];
let matriz2 =[[1,2,3],[1,1,1], [2,3,4]];
let sumas= suma(matriz1, matriz2)
console.log(sumas)

function sumav ( vector1, vector2){
    let resultado1= []
    for (let i=0; i<vector1.length; i++){
        let fila1= []
        for (let j=0; j<vector1[i].length; j++){
            fila1.push(vector1[i][j] + vector2[i][j])
        }
        resultado1.push(fila1)
    } 
      
    return resultado1;
}

let vector1 =[[3,5,7,8]];
let vector2= [[1,2,3,4]];
let suma1= sumav (vector1, vector2)
console.log(suma1)
