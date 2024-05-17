import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";

import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    } else {
      consulta = query(productsCollection, orderBy("category", "asc"));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      }); // []
      setItems(newArray);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <Box sx={{ flexGrow: 1, display: "flex", p: 10 }}>
        <Grid container spacing={2}>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <Skeleton
                variant="rectangular"
                sx={{ fontSize: "1rem" }}
                height={164}
                width={300}
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                sx={{ fontSize: "1rem" }}
                height={164}
                width={300}
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                sx={{ fontSize: "1rem" }}
                height={164}
                width={300}
              />
            </div>
            <div>
              <Skeleton
                variant="rectangular"
                sx={{ fontSize: "1rem" }}
                height={164}
                width={300}
              />
            </div>
          </div>
        </Grid>
      </Box>
    );
  }

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
