import React, {Fragment, useState} from 'react'; // Con Fragment puedes encerrar los componentes !!! Agregamos useState y usas Hooks!!!!!!
import Header from './components/Header';
import Footer from './components/Footer';

//Componente clasico "Funtion Declaration" ES5
function App() {

  //crear listado de productos usando Hooks__ Aplicamos Destructuring para crear los funciones a usas ejemplo products "state original" y getProducts "agrega o elimina---state modificado"
  const [products, getProducts] = useState([
    {id: 1, name: 'JavaScrip', price: 50},
    {id: 1, name: 'Angular', price: 50},
    {id: 1, name: 'Vue', price: 50},
    {id: 1, name: 'Svelte', price: 50},
  ]);


//Obtener fecha y la mandamos como props a footer
const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title='Introduccion a React' />
      <Footer date={date}/>
    </Fragment>
  );
}

export default App;
