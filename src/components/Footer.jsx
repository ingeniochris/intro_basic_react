import React from 'react'

//Otra forma de crear elementos es con "Function Expression" puedes eliminar las {} y el return para simplificar codigo el return queda implicito "'solo en function expression'" 

const Footer = ({date}) => ( // Aplicamos Destructuring para obtener el props.fecha
        <footer className="text-center">
            <p>Todos los derechos reservados &copy; {date}</p>
        </footer>
    );

export default Footer;



