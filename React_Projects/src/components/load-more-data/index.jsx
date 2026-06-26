import { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreData() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`,
      );
      const data = await response.json();
      if (data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setloading(false);
      } else {
        setDisableButton(true);
      }
      console.log(data.products);
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
      setloading(false);
    } finally {
      setloading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (errorMsg !== null) return <div>Error Occured:{errorMsg}</div>;
  return (
    <div className="load-more-container">
      <div className="products-container">
        {products && products.length
          ? products.map((item) => (
              <div className="products" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
      </div>
    </div>
  );
}
