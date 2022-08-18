import { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import useFetch from "./useFetch.js";
import { printful } from "../lib/printful-client";

function App() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://cavelius-art-api.herokuapp.com/api/v1/"
  );

  // fetch products from rails API
  const getAPIdata = (request) => {
    get(request)
      .then((data) => {
        // console.log(data)
        setProducts(data);
      })
      .catch((error) => console.log(`Could not load ${request}`, error))
      .finally(() => {console.log(`${request} loaded`)});
  }

  useEffect(() => {
    getAPIdata("products.json")
  }, []);

  // save cart items to local storage
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // handle products in cart
  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductMinus(existingProduct) {
    if (existingProduct.quantity > 1) {
      // decrease quantity
      const updatedCart = cart.map((product) => {
        if (product.id === existingProduct.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      handleProductDelete(existingProduct.id)
    }
  }

  function handleProductPlus(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }


  return (
    <HashRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              loading={loading}
              products={products}
              cart={cart}
              onProductPlus={handleProductPlus}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails
              products={products}
              onProductPlus={handleProductPlus}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onProductPlus={handleProductPlus}
              onProductMinus={handleProductMinus}
              onProductDelete={handleProductDelete}
            />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
