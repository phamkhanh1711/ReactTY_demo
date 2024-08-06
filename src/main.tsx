import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "../public/css/style.css";
import "react-multi-carousel/lib/styles.css";

import Login from "./Auth/Login.tsx";
import Product from "./pages/Product.tsx";
import FoodProduct from "./pages/crud/FoodProduct.tsx";
import Home from "./pages/Home.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/Foods" element={<FoodProduct />} />
      </Routes>
    </App>
  </Router>
);
