import NavBar from "./components/layout/navBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Footer from "./components/layout/footer/Footer";
import { ThemeProvider } from "@mui/material";
import { themeClaro } from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={themeClaro}>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a la tienda"} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
