import "./App.css";
import PhoneDetailComponent from "./components/PhoneDetailComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Hero />
    //   <PhoneListContainer />
    //   {/* <PhoneDetailComponent /> */}
    // </div>
    <Router>
      <Routes>
        <Route exact path="/:id" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
