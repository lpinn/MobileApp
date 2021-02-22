import React from 'react';


const Products = (props) => {
    let productsData;
    let term = props.search

    const searchingFor = (term) => {
        return (y) => {
            return y.name.toLowerCase().includes(term.toLowerCase) || !term;
        }
    }
    productsData = props.productsList.filter(searchingFor(term).map(product => {
        return (
            <Product
            key={product.id}
            
            />
        )
    }))

    return (
        <div className = "products">{productsData}</div>
    )

}

export default Products;