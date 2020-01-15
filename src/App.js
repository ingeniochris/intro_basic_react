import React, { Fragment, useState } from "react"; // Con Fragment puedes encerrar los componentes !!! Agregamos useState y usas Hooks!!!!!!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Car from "./components/Car";
//Componente clasico "Funtion Declaration" ES5
function App() {
  //crear listado de productos usando Hooks__ Aplicamos Destructuring para crear los funciones a usas ejemplo products "state original" y getProducts "agrega o elimina---state modificado"
  const [products, getProducts] = useState([
    { id: 1, name: "JavaScript", price: 80 },
    { id: 2, name: "Angular", price: 50 },
    { id: 3, name: "Vue", price: 25 },
    { id: 4, name: "Svelte", price: 55 },
    { id: 5, name: "React", price: 55 }    
  ]);

  //Segundo State para un carrito de compras
  const [car, addProduct]= useState([])

  //Obtener fecha y la mandamos como props a footer
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <div className="container mt-5">
       <div className="row">
         <div className="col">
            <div className="card">
          <div className="card-header">
            <div className="card-title">
              <Header title="Tienda virtual" />
            </div>
          </div>
          <div className="card-body col-md-6">
            {products.map(product => (
              <Product key={product.id} product={product} car={car} products={products} addProduct={addProduct} />
            ))}
          </div>
          <div className="card-footer text-muted">
            <Footer date={date} />
          </div>
        </div>
         </div>
         <div className="col col-md-5">
           <div className="card">
             <div className="card-header">
               <h1 className="card-title">Carrito</h1>
             </div>
             <div className="card-body">
                <Car
                car={car}
                />
             </div>
           </div>
         </div>
       </div>
      </div>
    </Fragment>
  );
}

export default App;
