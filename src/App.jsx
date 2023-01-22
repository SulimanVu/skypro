import "@fontsource/montserrat";
import { Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import Header from "./components/Header";
import "./styles/header.scss";
import "./styles/main.scss";
import "./styles/basket.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="https://sulimanvu.github.io/skypro/" element={<Main />} />
        <Route
          path="https://sulimanvu.github.io/skypro/basket"
          element={<Basket />}
        />
      </Routes>
    </>
  );
}

export default App;
