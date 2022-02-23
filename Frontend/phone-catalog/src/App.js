import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <h1>Phone Catalog</h1>
    </div>
  );
};

export default App;
