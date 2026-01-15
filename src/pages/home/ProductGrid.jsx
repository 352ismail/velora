import { ProductDetails } from "./ProductDetails";

export function ProductGrid( {products ,getCart}) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
         <ProductDetails key={product.id} product={product} getCart={getCart}/>
        );
      })}
    </div>
  );
}
