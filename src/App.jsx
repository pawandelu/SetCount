import "./App.css";
import Navbar from "./components/common/Navbar";
import Setcount from "./components/common/Setcount";
import Tab from "./components/common/Tab";
import Ceramic from "./components/home/Ceramic";
import Filterlist from "./components/home/Filterlist";
function App() {
  return (
    <>
      <Navbar />
      <Tab />
      <Setcount />
      <Filterlist />
      <Ceramic />
    </>
  );
}

export default App;
