import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "@mui/material";
import { themeClaro } from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={themeClaro}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="category/:name" element={<ItemListContainer />} />
            <Route path="itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path="*" element="" />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
