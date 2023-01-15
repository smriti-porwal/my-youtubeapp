import HeaderComponent from "./Components/header-component";
import BodyComponent from "./Components/body-component";
import NavPanel from "./Components/nav-panel";
import { useSelector } from "react-redux";

function App() {
  const toggleSlice = useSelector((state) => state.navToggleSlice.toggleNav);
  return (
    <>
      <div>
        <HeaderComponent />
      </div>
      <div className="grid grid-flow-col grid-cols-12">
        {toggleSlice && <NavPanel />}
        <BodyComponent />
      </div>
    </>
  );
}

export default App;
