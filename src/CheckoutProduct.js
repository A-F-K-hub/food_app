import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({
  product,
  id,
  img,
  alt,
  title,
  desc,
  price,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      product: product,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={img} alt={alt} />
      <div className="checkoutProduct__info">
        <h6 className="checkoutProduct__title">{title}</h6>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <button className="button" onClick={removeFromBasket}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
