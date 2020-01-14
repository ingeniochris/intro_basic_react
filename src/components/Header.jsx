import React from 'react'

//funcion estandar en React -Function Declaration
function Header (){

    //Antes del return puedes escribir variables para utilizar dentro del return
    const age = 15; 
    let message='';
    if(age>=18){
        message='Eres mayor de edad';
    }else{
        message='Eres menor de edad';
    }

    return(
        //Para declarar variables utiliza  {variable}
    <h1>{message}</h1>
        
    )
}


export default Header;
