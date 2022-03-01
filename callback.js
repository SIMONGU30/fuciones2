/*function funcionPrincipal(callBack){
  setTimeout(function(){ 
    console.log("Soy la Funcion Principal")  
    callBack() 
  },2000)  
}
// LLamado Funcion
funcionPrincipal(function(){
    console.log("Soy la Segunda Funcion")
})

*/
/*function resivir(n1,n2,callBack){
    setTimeout(function(){
        let total_suma

        total_suma= n1 + n2

        
        callBack(n1,n2,total_suma)

    },5000)
}

resivir(10,5,function(n1,n2,total_suma){

    console.log("la suma de "+ n1+ " + la suma de " + n2 + "es igual a : " + total_suma)

    let total_resta

    total_resta=n1-n2

    console.log("la resta de "+ n1+ "  - la suma de " + n2 + "es igual a : " + total_resta)
})*/


function recibir (nombre , edad , contraseña , callBack){
    setTimeout(function(){
       let  datos= {
        nombre : nombre,
        edad : edad,
        contraseña : contraseña
        }
        callBack( datos)
    },3000)
}

recibir("simon",18,"simon123 ",function(datos){

    if(datos.edad >15){
        console.log("su edad es : " + datos.edad + " es menor de edad , no puede acceder ")
    }
    else {
        console.log("su edad es : " + datos.edad +" es mayor de edad , si puede acceder ")
    }
    
})



