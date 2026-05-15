import "./App.css";
import { Route, Routes } from "react-router-dom";

import Rootlayout from "./components/Rootlayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Blog from "./components/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />} />

        <Route path="cart" element={<Cart />} />

        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;