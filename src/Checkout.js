import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  return (
    <div className="container">
      <h3>Hello, {user?.email}</h3>
      <div className="checkout">
        <h2 className="checkout_title">Your Shopping Basket</h2>

        {basket.map((product) => {
          return (
            <CheckoutProduct
              id={product.id}
              image={product.img}
              title={product.name}
              price={product.price}
            />
          );
        })}
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
