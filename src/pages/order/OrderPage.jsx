import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import "./OrderPage.css";
import { OrderGrid } from "./OrderGrid";
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
        <OrderGrid orders={orders} />
      </div>
    </>
  );
}
