import { useState, useEffect } from "react";
import {
  NavLink,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailDelivery from "./ProductDetailDelivery.js";
import productsObject from "./ProductsObject.js";
import Button from "./Button.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    setProduct(productsObject[params.id - 1])
  }, [])

  return (
    <div className="product-details-layout">
      <div className="product-details-main">
        <div className="product-details-left">
          <Link to="/products">← back</Link>
          <img
            src={product.image}
            className="product-details-image"
            alt={product.name}
            />
        </div>
        <div className="product-details-right">
          <h2>{product.name}</h2>
          <h3>€{product.price}</h3>
          <Button onClick={() => props.onProductPlus(product)}>Add to cart</Button>
          <div className="tabs">
            <ul>
              <li>
                <NavLink exact activeClassName="tab-active" to={match.url}>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="tab-active"
                  to={match.url + "/delivery"}
                >
                  Delivery
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path={match.path}>
              <ProductDetailInfo
                onProductPlus={props.onProductPlus}
                product={product}
              />
            </Route>

            <Route path={match.path + "/delivery"}>
              <ProductDetailDelivery />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
