import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./OrderPage.css";
import dayjs from "dayjs";
import { Link } from "react-router";
import { Header } from "../../components/Header";
import { FormatMoney } from "../utils/money";
import { OrderHeader } from "./OrderHeader";
export function OrderPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
   const getOrders = async () =>{
     const response = await axios.get("/api/orders?expand=products")
       setOrders(response.data);
   }
   getOrders();
  }, []);
  return (
    <>
      <title>Order</title>

      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <div className="orders-grid">

          {orders.map((order) => {
            return <>
            <div key={order.id} className="order-container">
            <OrderHeader  order={order}/> 

            { order.products && ( order.products.map((product)=>{
              console.log(product);
              return ( <Fragment key={product.productId}>
              <div className="order-details-grid">
              <div className="product-image-container">
                <img src={product.product.image} />
              </div>

              <div className="product-details">
                <div className="product-name">
                  {product.product.name}
                </div>
                <div className="product-delivery-date">
                  Arriving on: {dayjs(product.estimatedDeliveryTimeMs).format("MMMM DD")}
                </div>
                <div className="product-quantity">Quantity: {product.quantity}</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <Link to="/tracking">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </Link>
              </div>
            </div>
            </Fragment>)
            }))}     
          </div>
            </>;
          })}
        </div>
      </div>
    </>
  );
}
