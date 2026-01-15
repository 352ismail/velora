export function OrderProgress({deliveryPercent}) {
  return (
    <>
      <div className="progress-labels-container">
        <div className="progress-label">Preparing</div>
        <div className="progress-label current-status">Shipped</div>
        <div className="progress-label">Delivered</div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{width:`${deliveryPercent}%`}}></div>
      </div>
    </>
  );
}
