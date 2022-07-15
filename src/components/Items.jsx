import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ img, description, title, price, quantity, id }) => {
  const { removeHandler, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info py=5px">
        <div className="product-img">
          <img src={img} alt="phone" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fa-solid fa-minus minus"
            onClick={() => decrement(id)}
          ></i>
          <input type="text" value={quantity} />
          <i className="fa-solid fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <i
            className="fa-solid fa-trash-alt remove"
            onClick={() => removeHandler(id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
