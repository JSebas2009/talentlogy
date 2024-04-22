//Construir un programa que calcule y visualice por pantalla el factorial de todos 
//los valores numéricos enteros entre 1 y 10.
for (let i = 0; i<= 10; i++) {
    let factorial=1
    for (let j = 1; j <= i; j++) {
        factorial=factorial*j
        
    }
    console.log(`el factorial de ${i} es ${factorial}`)        
}
