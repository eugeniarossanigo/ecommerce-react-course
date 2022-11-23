import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

export default function App() {
  return (
      <>
        <NavBar />
        <ItemListContainer greeting="Hola! Soy una página de productos de una organización ambiental" />
      </>
  )
}
