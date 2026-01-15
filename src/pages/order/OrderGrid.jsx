import dayjs from "dayjs";
import { Fragment } from "react";
import { Link } from "react-router";
import { OrderHeader } from "./OrderHeader";
import { CalculatedDeliveryProgessPercent } from "../tracking/OrderTracking";
export function OrderGrid({ orders }) {
  return (
    <>
      <div className="orders-grid">
        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OrderHeader order={order} />

              {order.products &&
                order.products.map((product) => {
                  console.log(product);
                  return (
                    <Fragment key={product.productId}>
                      <div className="order-details-grid">
                        <div className="product-image-container">
                          <img src={product.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {product.product.name}
                          </div>
                          <div className="product-delivery-date">
                            {CalculatedDeliveryProgessPercent(
                              product.estimatedDeliveryTimeMs,
                              order.orderTimeMs
                            ) >= 100 ? "Delivered On: " : "Arriving on: "}
                            {dayjs(product.estimatedDeliveryTimeMs).format(
                              "MMMM DD"
                            )}
                          </div>
                          <div className="product-quantity">
                            Quantity: {product.quantity}
                          </div>
                          <button className="buy-again-button">
                            <img
                              className="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span className="buy-again-message">
                              Add to Cart
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link
                            to={`/tracking/${order.id}/${product.productId}`}
                          >
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
}
