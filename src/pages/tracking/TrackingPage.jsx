import "./TrackingPage.css";
import { Link, useParams } from "react-router";
import "../../components/Header";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import {OrderTracking} from './OrderTracking'

function fetchProduct(productId , orders){
  const data =  orders.products.find((product)=>{
  return product.productId === productId
 });
 return data;
}

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  const product = orders && fetchProduct(productId,orders);
  console.log("Complete Order: ",orders)
  return (
    <>
      <title>Tacking</title>

      <Header cart={cart} />
      <div className="tracking-page">
        {orders && <OrderTracking product={product} orderTimeMs={orders.orderTimeMs} />}
      </div>
    </>
  );
}
