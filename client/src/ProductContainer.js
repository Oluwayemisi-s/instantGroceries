import React, { useState } from "react"
import ProductView from "./ProductView";
import Header from "./Header"

function ProductContainer( {user} ){
    return (
        <div>
            <Header />
            Hello User
         <ProductView/>
        </div>
    )
}

export default ProductContainer;