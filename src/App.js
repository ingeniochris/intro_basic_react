import React, {Fragment} from 'react'; // Con Fragment puedes encerrar los elementos / componentes
import Header from './components/Header';
import Footer from './components/Footer';

//Componente clasico "Funtion Declaration" ES5
function App() {

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
