import { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import productsObject from "./ProductsObject.js"

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "http://localhost:3000/api/v1/"
  );

  const getAPIdata = (request) => {
    get(request)
      .then((data) => {
        console.log(data)
        setProducts(data);
      })
      .catch((error) => console.log(`Could not load ${request}`, error))
      .finally(() => {console.log(`${request} loaded`)});
  }

  useEffect(() => {
    getAPIdata("products.json")
  }, []);

  // console.log("PRODUCTS:")
  // console.log(products)
  // console.log(productsObject)

  return (
    <div className="products-layout">
      <h1>Gallery</h1>
      {loading && <Loader />}
      <div className="products-grid">
        {products.map((product, i) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductPlus={props.onProductPlus}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
