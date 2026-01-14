import dayjs from "dayjs";
export function DeliveryDate({ cartData }) {
  return (
    <div className="delivery-date">
      Delivery date: {dayjs(cartData.estimatedDeliveryTimeMs).format("MMMM DD")}
    </div>
  );
}
