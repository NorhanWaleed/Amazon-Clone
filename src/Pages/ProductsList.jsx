import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const ProductsList = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setproduct(res.data));
  }, []);

  return (
    <div className="flex justify-between gap-20">
      <div>
        <Sidebar />
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {product.map((item, index) => {
          return <ProductCard key={index} item={item}/>;
        })}
      </div>
    </div>
  );
};

export default ProductsList;
