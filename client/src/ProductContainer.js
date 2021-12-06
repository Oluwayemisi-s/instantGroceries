import { useState } from "react";
function ProductContainer(){

    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    return (
        <div>
          
         <ProductView allProducts = {allProducts}/>
        </div>
    )
}

export default ProductContainer;