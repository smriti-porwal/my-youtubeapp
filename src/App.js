import HeaderComponent from "./Components/header-component";
import BodyComponent from "./Components/body-component";
import NavPanel from "./Components/nav-panel";
import { useSelector } from "react-redux";
import  FootetComponent from "./Components/footer-component";
import VideoComponent from "./Components/Watch/video-component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const toggleSlice = useSelector((state) => state.navToggleSlice.toggleNav);
  const route = [
    {
      path: "/",
      element: <BodyComponent />,
    },
    {
      path: "watch/:id",
      element: <VideoComponent />
    },
  ];
  const router = createBrowserRouter(route);
  return (
    <>
      <div>
        <HeaderComponent />
      </div>
      <div className="grid grid-flow-col grid-cols-12">
        {toggleSlice && <NavPanel />}
        <RouterProvider router={router} /> 
      </div>
      <div>
      <FootetComponent />
      </div>
    </>
  );
}

export default App;
