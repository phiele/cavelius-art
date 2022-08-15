import { Link } from "react-router-dom";
// import Button from "./Button.js";

export default function Product(props) {
  const { details } = props;

  // // Check if product is already in cart
  // const productFromCart = props.cart.find(
  //   (product) => product.id === details.id
  // );
  // // get product quantity from cart
  // const quantity = productFromCart ? productFromCart.quantity : 0;

  // console.log("Image:")
  // console.log(details.image)
  // console.log(details.image[Object.keys(details.image)[0]])

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            className="product-image"
            src={details.image_urls[0]}
            alt={details.name}
          />
          <div className="img-overlay">
            <h3>{details.name}</h3>
            <p>|</p>
            <p>€{details.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
