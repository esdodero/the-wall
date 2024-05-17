import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  let initial = getQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  //Funcionalidad de los botones para cambiar la propiedad variant en el onclick
  const [tamanioVariant, setTamanioVariant] = useState({
    small30x45: "outlined",
    small40x60: "outlined",
    small60x90: "contained",
    small80x120: "outlined",
    small100x150: "outlined",
    small120x180: "outlined",
  });

  const [marcoVariant, setMarcoVariant] = useState({
    white: "outlined",
    lightWood: "outlined",
    darkWood: "contained",
    black: "outlined",
    printOnly: "outlined",
  });

  const [selectedTamanio, setSelectedTamanio] = useState("small60x90");
  const [selectedMarco, setSelectedMarco] = useState("darkWood");

  const handleTamanioButtonClick = (tamanio) => {
    const updatedTamanioVariant = {};
    Object.keys(tamanioVariant).forEach((key) => {
      updatedTamanioVariant[key] = key === tamanio ? "contained" : "outlined";
    });
    setTamanioVariant(updatedTamanioVariant);
    setSelectedTamanio(tamanio);
  };

  const handleMarcoButtonClick = (marco) => {
    const updatedMarcoVariant = {};
    Object.keys(marcoVariant).forEach((key) => {
      updatedMarcoVariant[key] = key === marco ? "contained" : "outlined";
    });
    setMarcoVariant(updatedMarcoVariant);
    setSelectedMarco(marco);
  };

  const onAdd = (cantidad) => {
    let product = {
      ...item,
      quantity: cantidad,
      tamanio: selectedTamanio,
      marco: selectedMarco,
    };
    addToCart(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "EL producto se agrego al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <ItemDetail
      item={item}
      onAdd={onAdd}
      initial={initial}
      tamanioVariant={tamanioVariant}
      marcoVariant={marcoVariant}
      handleTamanioButtonClick={handleTamanioButtonClick}
      handleMarcoButtonClick={handleMarcoButtonClick}
    />
  );
};

export default ItemDetailContainer;
