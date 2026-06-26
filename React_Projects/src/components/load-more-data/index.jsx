import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  async function fetchProducts(utl) {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = response.json();
      console.log(data)
    } catch (e) {
        console.log(e)
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div className="container"></div>;
}
