import React from 'react'
import Product from './Product'

const Car = ({car}) => (
       <div className="row">
           <div className="col">
            {car.length === 0       {//agregamos un compracion ternaria es recomendable}
            ? <p>No hay elementos</p>
            :car.map(product => (
                <Product
                    key={product.id}
                    product={product}
                /> 
            ))}
           </div>
       </div>
    )


export default Car