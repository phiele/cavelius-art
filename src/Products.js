import Product from "./Product.js";

export default function Products(props) {

  return (
    <div className="products-layout">
      <h1>Gallery</h1>
      {/* {loading && <Loader />} */}
      <div className="products-grid">
        {props.products.map((product, i) => {
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
