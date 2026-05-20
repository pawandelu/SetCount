import "./App.css";
import Navbar from "./components/common/Navbar";
import Setcount from "./components/common/Setcount";
import Ceramic from "./components/home/Ceramic";
import Filterlist from "./components/home/Filterlist";
// import Countset from "./components/home/Countset";
function App() {
  return (
    <>
      <Navbar />
      <Setcount />
      <Filterlist />
      {/* <Countset /> */}
      <Ceramic />
    </>
  );
}

export default App;
