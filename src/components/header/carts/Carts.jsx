import { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";
import PropTypes from "prop-types";

const Carts = ({markHandle, countHandle}) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setCarts(res));
  }, []);
  return (
    <div className="w-2/3">
        {
            carts.map((cart) => <Cart key={cart.id} cart={cart} markHandle={markHandle} countHandle={countHandle}></Cart>)
        }
    </div>
  );
};

Carts.propTypes ={
  markHandle: PropTypes.func.isRequired,
  countHandle: PropTypes.func.isRequired
}

export default Carts;
