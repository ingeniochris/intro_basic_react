import React, { Fragment, useState } from "react"; // Con Fragment puedes encerrar los componentes !!! Agregamos useState y usas Hooks!!!!!!
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";

//Componente clasico "Funtion Declaration" ES5
function App() {
  //crear listado de productos usando Hooks__ Aplicamos Destructuring para crear los funciones a usas ejemplo products "state original" y getProducts "agrega o elimina---state modificado"
  const [products, getProducts] = useState([
    { id: 1, name: "JavaScrip", price: 50 },
    { id: 2, name: "Angular", price: 50 },
    { id: 3, name: "Vue", price: 50 },
    { id: 4, name: "Svelte", price: 50 }
  ]);

  //Obtener fecha y la mandamos como props a footer
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Introduccion a React" />
      <h1>Lista de productos</h1>
      {products.map(product => (
          <Product 
            key={product.id}
            product={product} 
          />
      ))}
      <Footer 
        date={date} 
      />
    </Fragment>
  );
}

export default App;
