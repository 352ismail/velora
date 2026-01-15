import { Link } from "react-router";
import dayjs from "dayjs";
import { OrderPage } from "../order/OrderPage";
import { OrderProgress } from "./OrderProgress";
export function OrderTracking({ product, orderTimeMs }) {
  const deliveryPercent = CalculatedDeliveryProgessPercent(
    product.estimatedDeliveryTimeMs,
    orderTimeMs
  );
  console.log("deliveryPercent", deliveryPercent)
  return (
    <>
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          Arriving on
          {dayjs(product.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
        </div>

        <div className="product-info">{product.product.name}</div>

        <div className="product-info">Quantity: {product.quantity}</div>

        <img className="product-image" src={`/${product.product.image}`} />

        <OrderProgress
          productTime={product}
          orderTimeMs={orderTimeMs}
          deliveryPercent={deliveryPercent}
        />
      </div>
    </>
  );
}

export function CalculatedDeliveryProgessPercent(
  estimatedDeliveryTimeMs,
  orderTimeMs
) {
  const totalDeliveryTimeMs = estimatedDeliveryTimeMs - orderTimeMs;
  const timePassedMs = dayjs().valueOf() - orderTimeMs;
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
  return deliveryPercent;
}
