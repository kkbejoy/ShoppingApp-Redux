import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
// import Cart from "./Cart";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 100;
const showCart=useSelector(state=>state.cart.showCart)
console.log(showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
      {showCart && <CartItems/>}
    </React.Fragment>
  );
};

export default Layout;
