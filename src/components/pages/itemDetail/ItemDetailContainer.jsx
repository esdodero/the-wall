import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  console.log(item);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
