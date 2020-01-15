import React from 'react'
import Product from './Product'

const Car = ({car, addProduct}) => (
       <div className="row">
           <div className="col">
            {car.length === 0      
            ? <p>No hay elementos</p>
            :car.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    car={car}
                    addProduct={addProduct}
                /> 
            ))}
           </div>
       </div>
    )


export default Car;