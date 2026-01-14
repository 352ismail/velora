import "./HomePage.css";
import axios from "axios";
import {ProductGrid} from './ProductGrid'
import { Header } from "../../components/Header";
// import { products } from "../../starting-code/data/products";

import { useState, useEffect } from "react";
export function HomePage({cart}) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      const response = await axios.get("/api/products");
         setProducts(response.data)
        }
        getProducts();
  }, []);
  return (
    <>
      <title>Velora E-commerce</title>
      <Header cart ={cart} />
      <div className="home-page">
        <ProductGrid products={products}/> 
      </div>
    </>
  );
}
