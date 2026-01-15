export function OrderProgress({deliveryPercent}) {
    const preparingLabel = `progress-label ${deliveryPercent<=33 && "current-status"}`;
    const shippedLabel = `progress-label ${(deliveryPercent>=33 && deliveryPercent<100) && "current-status"}`;
    const deliveredLabel = `progress-label ${deliveryPercent>=100 && "current-status"}`;
  return (
    <>
      <div className="progress-labels-container">
        <div className ={preparingLabel}>Preparing</div>
        <div className={shippedLabel}>Shipped</div>
        <div className={deliveredLabel}>Delivered</div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{width:`${deliveryPercent}%`}}></div>
      </div>
    </>
  );
}
