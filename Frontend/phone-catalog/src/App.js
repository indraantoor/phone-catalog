import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PhoneListContainer from "./components/PhoneListContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PhoneListContainer />
    </div>
  );
};

export default App;
