//import "./ItemListContainer.css";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const { name } = useParams();
  console.log(name);

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productsFiltered = products.filter(
      (product) => product.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(name ? productsFiltered : products);
      } else {
        reject({ status: 400, message: "Error con los productos" });
      }
    });
    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name]);

  console.log(items);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
