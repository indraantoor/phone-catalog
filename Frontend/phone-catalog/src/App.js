import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/:id" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
