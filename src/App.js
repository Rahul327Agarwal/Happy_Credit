import "./App.css";
import Headder from "./componets/Headder";
import Catogories from "./componets/Catogories.jsx";
import Items from "./componets/Items.jsx";
function App() {
  return (
    <div className="">
      <Headder />
      <input className="mySerach" type="text" placeholder="Search" />
      <div className="differ leftRight">
        <Catogories />
        <Items />
      </div>
    </div>
  );
}

export default App;
