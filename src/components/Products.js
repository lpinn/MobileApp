import React from 'react';
import { Card } from 'react-native-elements'

import Product from './Product'

const Products = (props) => {
    let productsData;
    let term = props.search

    const searchingFor = (term) => { // probably dont need this
        return (y) => {
            return y.name.toLowerCase().includes(term.toLowerCase) || !term;
        }
    }
    
    productsData = props.list.map(product => {
        return (
            <Product
            key={product.id}
            name = {product.name}
            description = {product.description}
            price = {product.price}
            size = {product.size}
            grind = {product.grind}
            />
        )
    })

    return (
        <Card className = "products"> 
        {/* do i want to nest cards here, kinda fugly TODO */}
            {productsData}
        </Card>
    )

}

export default Products;