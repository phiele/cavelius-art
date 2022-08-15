import { Link } from "react-router-dom";

export default function Product(props) {
  const { details } = props;

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
